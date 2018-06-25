
define('appconfig' ,[] , function() {

    return {
        HEADER :  [
            { text : 'Home' , url : '/', subMenu : [], firstUrl : '/'} ,            
            { text : 'Types Of Dances' , url : 'dances', subMenu : [], firstUrl : '/dances'},
            { text : 'Services' , url : 'services', subMenu : [], firstUrl : '/services'},
            { text : 'About Us' , url : 'about-us', subMenu : [], firstUrl : '/about-us'},
            { text : 'Contact Us' , url : 'contact-us', subMenu : [], firstUrl : '/contact-us'}
        ],
        FOOTER : [],
        REVIEWS: []
    }


});