var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var db = require("./db/savedb.js")
var indexFile = require("./templates/templates")["JST"]["templates/index.handlebars"]
var urlPageMap = require("./seo/urlPageMap")
var bodyContent = urlPageMap.getHandlebar
var urlMap = urlPageMap.urlMap
var _ = require("underscore")
var seoData = require("./seo/metafile")
var cookieParser = require("cookie-parser")
var compression = require("compression")
var fs = require("fs")
var path = require("path")

var cssCache = {}

global._ = _

var PORT = process.env.PORT

var mailer = require("./server/mailer")


app.use(compression())
app.use(express.static(__dirname))

app.use("/styles", express.static(__dirname + "/css"))
app.use("/images", express.static(__dirname + "/images"))
app.use("/vendor/js", express.static(__dirname + "/node_modules"))

app.use(bodyParser())
app.use(cookieParser())

db.connectMongo()

app.get("/", serveHTML)
app.get(/(get-info|medical-cannabis|team|patients|faqs|contact-us|prescriptions|research|error|admin)/, serveHTML)

function serveHTML(req, res) {
	const mainContent = bodyContent(req.path)

	const indexFileText = indexFile({
		...seoData.tags(req.path),
		addressSchema: JSON.stringify(seoData.addressSchema, "\t", 4),
		customerCare: JSON.stringify(seoData.customerCare, "\t", 4),
		socialProfile: JSON.stringify(seoData.socialProfile, "\t", 4),
		websiteSchema: JSON.stringify(seoData.websiteSchema, "\t", 4),
		mainContent,
		ctxPath: req.path,
		pageName: urlMap[req.path],
		pageCSS: getPageCSS(urlMap[req.path]),
	})
	res.end(indexFileText)
}

app.get("/sitemap.xml", function() {
	res.sendFile(__dirname + "/sitemap.xml")
})

app.post("/query", function(req, res) {
	// Save the same data in connection url
	db.saveInDb(req, res)

	// Send an email to the user and get acknowledgment
	mailer(req, res)

	// respond to client whether the API is completed or not
	res.send({
		success: true,
	})
})

app.post("/get-data", function(req, res) {
	const data = db.getData(req, res)
})

app.get("*", function(req, res) {
	res.redirect("/error")
})

var getPageCSS = function(fileName) {
	if (cssCache[fileName]) {
		return cssCache[fileName]
	}


	readCSSFiles(path.join(__dirname, "css", fileName + ".css"), (err, content) => (cssCache[fileName] = content))
	return null
}

function readCSSFiles(filePath, callBack) {
	fs.readFile(filePath, "utf8", callBack)
}

var server = app.listen(PORT, function() {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})
