var MongoClient = require('mongodb').MongoClient;
var speakeasy = require('speakeasy');
var secret = require('./creds');
var mongodb = null;


function connectMongo() {

    // Connect to mongo db
    var uri = process.env.mongoCreds || ''
    MongoClient.connect(uri, function(err, db){
        mongodb = db
    });
}

function saveInDb(req, res) {
    
    var data = req.body;

    var rowObject = {
        'name': data.Name,
        'phone': data.Phone,
        'email': data.Email,
        'source': data.Source,
        'condition': data.Illness,
        'resident': data['From Florida'],
        'treatment' : data['Previous Treatment'],
        'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
    }

    mongodb.collection('contacts').insert(rowObject)
        .then(function(response){
            console.log('success');
        });
}

function getData(req, res) {

    const token = req.body.token;

    var verified = speakeasy.totp.verify({
        secret: secret.base32,
        encoding: 'base32',
        token: token
    });

    if( verified === false && typeof req.cookies.USER === 'undefined') {
        res.json({
            success : false,
            message : 'Invalid authentication'
        })
    }

    if(req.cookies.USER && +req.cookies.USER % 23 !== 0) {
        
        res.cookie('USER', '', { maxAge : 1 });
        res.json({
            success : false,
            message : 'Invalid cookie'
        })
    }

    const cursor = mongodb.collection('contacts').find({});
    const arr = [];

    cursor.toArray().then( response => {
        
        // Session valid for 30 minutes
        res.cookie('USER', generateRandomNumber() , { maxAge: 1000 * 60 * 60 });
        
        res.json({
            success : true,
            data : response
        });
    });
}

function generateRandomNumber() {
    var randomNumber = Math.random().toString();
    return randomNumber.substring(5, randomNumber.length) * 23;
}

module.exports = {
    connectMongo : connectMongo,
    saveInDb : saveInDb,
    getData : getData
}