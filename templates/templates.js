this["JST"] = this["JST"] || {};

this["JST"]["templates/homepage.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'homepage\'>\n\n\t<marquee>\n\t\t<h4>We are updating our Website. Please reach us for New Registration via Email \n\t\t\t<a href="mailto:jalpa.dance.academy@gmail.com">\n\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t</a> \n\t\t\tor Call us on \n\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t(678) 481-7207\n\t\t\t</a>\n\t\t</h4>\n\t</marquee>\n\n\t<div class="image-container">\n\n\t\t<img src="/images/main.jpeg" />\n\n\t</div>\n\n</div>\n\n';

}
return __p
};

this["JST"]["templates/main.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<header></header>\n<section id="main-content"></section>\n<footer></footer>';

}
return __p
};

this["JST"]["templates/index.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html>\n\n<head>\n\t<title itemprop=\'name\'> ' +
((__t = ( title )) == null ? '' : __t) +
'</title>\n\n\t<meta charset="utf-8">\n\t<meta http-equiv=\'Content-type\' content=\'text/plain; charset=x-user-defined\' />\n\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1" />\n\t<meta name="apple-mobile-web-app-status-bar-style" content="purple-translucent">\n\t<meta name="mobile-web-app-capable" content="yes">\n\n\t<meta name=\'description\' content="' +
((__t = ( description )) == null ? '' : __t) +
'" />\n\n\t<meta name="keywords" itemprop="keywords" content="' +
((__t = ( keywords )) == null ? '' : __t) +
'" />\n\n\t<link rel=\'canonical\' href=\'\' itemprop=\'url\' />\n\n\t<link rel="icon" sizes="192x192" href="/favico.ico" data-reactid="24">\n\n\t<meta name="theme-color" content="#db1174">\n\t\n\t<!-- HTTP -->\n\t<meta name="google-site-verification" content="5onw29QzEFUh_wayOn_9EdxfzH0csFOR4OGroaIHb-k" />\n\n\t<!-- HTTPS -->\n\t<meta name="google-site-verification" content="5onw29QzEFUh_wayOn_9EdxfzH0csFOR4OGroaIHb-k" />\n\t\n\t<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n\n\t<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">\n\n\t<link rel="stylesheet" type="text/css" href="/styles/main.css">\n\t<style type="text/css">\n\t\t' +
((__t = ( pageCSS )) == null ? '' : __t) +
'\n\t</style>\n\n\t<script type="text/javascript">\n\n\t\tfunction loadScript() {\n\n\t\t\t// No need of adding live reload script on live site\n\t\t\tif (location.hostname === \'www.jalpadance.com\') {\n\t\t\t\treturn\n\t\t\t}\n\n\t\t\tvar lrHost = location.protocol + \'//\' + location.hostname + \':35729\';\n\t\t\tvar s = document.createElement(\'script\');\n\t\t\ts.async = true;\n\t\t\ts.setAttribute(\'src\', lrHost + \'/livereload.js\');\n\t\t\tdocument.body.appendChild(s);\n\t\t}\n\n\t\twindow.onload = loadScript;\n\t</script>\n\n\t<!-- Global site tag (gtag.js) - Google Analytics -->\n\t<script async src="https://www.googletagmanager.com/gtag/js?id=UA-105629408-1"></script>\n\t<script>\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() { dataLayer.push(arguments); }\n\t\tgtag(\'js\', new Date());\n\n\t\tgtag(\'config\', \'UA-121319602-1\');\n\t</script>\n\n\n\t<style type="text/css">\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t.logo-container {\n\t\t\tpadding: 100px 0 20px;\n\t\t}\n\n\t\t.overlay-modal {\n\t\t\tposition: fixed;\n\t\t\toverflow: hidden;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcolor: white;\n\t\t}\n\t</style>\n\n\t<link rel="icon" type="image/png" href="/favico.ico">\n</head>\n\n<body>\n\n\n\t<div class="content">\n\n\t</div>\n\n\t' +
((__t = ( mainContent )) == null ? '' : __t) +
'\n\n\t<header>\n\t\t<div class="header-wrapper">\n\t\t\t<div class="logo-container">\n\t\t\t\t<img src="/images/logo.png">\n\t\t\t</div>\n\n\n\t\t\t<div class="hamberger-container">\n\t\t\t\t<button class="ham-berger">\n\t\t\t\t\t<i class="fa fa-bars fa-2x" aria-hidden="true"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class="header-overlay"></div>\n\n\t\t\t<div class="header-contact">\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class="fa fa-phone"></i>\n\t\t\t\t\t\t<span> <a href="tel:(678) 481-7207">(678) 481-7207 </a></span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class="fa fa-envelope"></i>\n\t\t\t\t\t\t<span> <a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a></span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.linkedin.com/">\n\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n\t\t\t\t\t\t\t<i class="fa fa-instagram"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</header>\n\n\n\t<footer>\n\t\t<div class="footer-wrapper">\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">About Us</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="footer-logo-container">\n\t\t\t\t\t\t<img src="/images/logo.png" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="company-text">\n\t\t\t\t\t\tJalpa Dance Academy was originally established in 2011 in Chicago southwest suburbs for all the dancers to find the best in them no matter what their age and experience is. \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Navigation</div>\n\t\t\t\t<div class="content nav-links">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Address</div>\n\t\t\t\t<div class="content nav-links">\n\t\t\t\t\t<ul>\t\t\t\t\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<b>Suwanee:</b>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t6365 Read Road\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tSuwanee, GA 30024\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tPhone :\n\t\t\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t\t\t(678) 481-7207\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<b>Buford:</b>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t4296 Old Suwanee Road\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tSuite 4 Buford, GA 30518\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tPhone :\n\t\t\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t\t\t(678) 481-7207\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tEmail :\n\t\t\t\t\t\t\t<a href="mailto:Jalpa.dance.academy@gmail.com">\n\t\t\t\t\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\t\t\t\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tFax :\n\t\t\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t\t\t(678) 481-7207\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Connect Us</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<ul class="social-connection">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="https://www.linkedin.com/">\n\t\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="">\n\t\t\t\t\t\t\t\t<i class="fa fa-instagram"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\n\n\t\t<div class="developer">\n\t\t\t\t© 2018 Jalpa Dance Academy. All Rights Reserved.\n\t\t</div>\n\t\n\t</footer>\n\n\t\t\n\n\t<!-- Start content loading -->\n\t<script type="text/javascript" src=\'/js/vendor/requirejs/require.js\' data-main=\'/config.js\'></script>\n\t<script type="text/javascript" src=\'/js/main.js\'></script>\n\t<script type="text/javascript" src=\'/js/font-awesome.js\'></script>\n\t<!-- content loading end -->\n\n</body>\n\n</html>';

}
return __p
};

this["JST"]["templates/header.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="header-wrapper">\n    <div class="logo-container">\n        <img src="/images/logo.png"/>\n    </div>\n\n    <div class="header-overlay hide"></div>\n\n    <div class="hamberger-container">\n        <button class="ham-berger"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>\n    </div>\n\n    <div class="header-contact">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> <a href="tel:(678) 481-7207">(678) 481-7207 </a></span>\n                </li>\n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span> <a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a></span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n                        <i class="fa fa-instagram"></i>\n                    </a>\n                </li>\n            </ul>\n\n    </div>\n\n    <div class="menu-tab">\n        \n        <div class="group group-1">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> \n                        <a href="tel:(678) 481-7207">\n                            (678) 481-7207\n                        </a>    \n                    </span>\n                </li>                            \n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span>\n                        <a href="mailto:jalpa.dance.academy@gmail.com">\n                            jalpa.dance.academy@gmail.com\n                        </a> \n                    </span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                 <li>\n                    <a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n                        <i class="fa fa-instagram"></i>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n\n        <div class="group group-2">\n\n            <ul class="main-menu">\n                ';
 _.each(tabsData, function(tab, index) { ;
__p += '\n                    ';
 var className = selectedIndex === index ? "active" : "" ;
__p += '\n                        <li class="' +
((__t = (className)) == null ? '' : __t) +
'" data-id="' +
((__t = (index)) == null ? '' : __t) +
'"\n                            data-url="' +
((__t = ( tab.subMenu.length ? null : tab.url )) == null ? '' : __t) +
'">\n                            ' +
((__t = ( tab.text.toUpperCase() )) == null ? '' : __t) +
'\n                            <ul class="sub-menu">\n                                ';
 _.each(tab.subMenu, function(menu, index) { ;
__p += '\n                                    <li class="sub-menu-item" \n                                        data-url="' +
((__t = ( tab.url + "/" + menu.url)) == null ? '' : __t) +
'" >\n                                        ' +
((__t = ( menu.text )) == null ? '' : __t) +
'\n                                    </li>\n                                ';
 }); ;
__p += '\n                            </ul>\n                        </li>\n                        ';
 }); ;
__p += '\n            </ul>\n\n        </div>\n\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/footer.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<div class="footer-wrapper">\n\n\t<div class="coloumn">\n\t\t<div class="col-header">About Us</div>\n\t\t<div class="content">\n\t\t\t<div class="footer-logo-container">\n\t\t\t\t<img src="/images/logo.png" />\n\t\t\t</div>\n\t\t\t<div class="company-text">\n\t\t\t\tJalpa Dance Academy was originally established in 2011 in Chicago southwest suburbs for all the dancers to find the best in them no matter what their age and experience is. \n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="coloumn">\n\t\t<div class="col-header">Navigation</div>\n\t\t<div class="content nav-links">\n\t\t\t<ul>\n\t\t\t\t';
 _.each(tabsData, function(tab, index) { ;
__p += ' \n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=' +
((__t = ( tab.firstUrl )) == null ? '' : __t) +
'>\n\t\t\t\t\t\t\t' +
((__t = ( tab.text )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t';
 }); ;
__p += '\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class="coloumn">\n\t\t<div class="col-header">Address</div>\n\t\t<div class="content nav-links">\n\t\t\t<ul>\t\t\t\t\n\t\t\t\t<li>\n\t\t\t\t\t<b>Suwanee:</b>\n\t\t\t\t\t<br/>\n\t\t\t\t\t6365 Read Road\n\t\t\t\t\t<br/>\n\t\t\t\t\tSuwanee, GA 30024\n\t\t\t\t\t<br/>\n\t\t\t\t\tPhone :\n\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t (678) 481-7207\n\t\t\t\t\t</a>\n\t\t\t\t</li> \n\t\t\t\t<li>\n\t\t\t\t\t<b>Buford:</b>\n\t\t\t\t\t<br/>\n\t\t\t\t\t4296 Old Suwanee Road\n\t\t\t\t\t<br/>\n\t\t\t\t\tSuite 4 Buford, GA 30518\n\t\t\t\t\t<br/>\n\t\t\t\t\tPhone :\n\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t (678) 481-7207\n\t\t\t\t\t</a>\n\t\t\t\t</li> \n\t\t\t\t<li>\n\t\t\t\t\tEmail :\n\t\t\t\t\t<a href="mailto:Jalpa.dance.academy@gmail.com">\n\t\t\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t\t\t</a>\n\t\t\t\t</li>\t\t\t\n\t\t\t\t<li>\n\t\t\t\t\tFax :\n\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t (678) 481-7207\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class="coloumn">\n\t\t<div class="col-header">Connect Us</div>\n\t\t<div class="content">\n\t\t\t<ul class="social-connection">\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="https://www.linkedin.com/">\n\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a  target="_blank" href="">\n\t\t\t\t\t\t<i class="fa fa-instagram"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\t\n</div>\n\n\n<div class="developer">\n\t\t© 2018 Jalpa Dance Academy. All Rights Reserved.\n</div>';

}
return __p
};

this["JST"]["templates/error.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="error-page">\n    <h1> Ohhh, You lost your way </h1>\n    <div class="home-button">\n        <a href="/">\n            Let\'s Get Back To Home\n        </a>\n    </div>\n</div>';

}
return __p
};