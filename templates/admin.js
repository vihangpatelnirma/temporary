this["JST"] = this["JST"] || {};

this["JST"]["templates/admin.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["templates/contactus.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="contact-us">\n\n    <div class="contact-us-description">\n        <h1> Contact Us </h1>\n        <div class="sub-text">\n            For a FREE TELEPHONE call with Dr. Patel, please click the button below and fill out the information form.\n\n            </br>\n            <div class="schedule-now">\n                <a href="/get-info">\n                    FREE Consultation\n                </a>\n            </div>\n        </div>\n\n    </div>\n\n    <div class="contact-us-description">\n        <h1> Standard Fee Schedule </h1>\n        <div class="sub-text">\n            <b>Initial Office Visit:</b>  \n                $165 \n                <br/>\n                Visit includes a comprehensive medical examination and discussion of your diagnosis and treatment options. \n\n            <br/>\n            <br/>\n            <b>Follow-up Office Visit:</b>\n                    $150 \n                    <br/>\n                    Visit includes a detailed discussion of your ongoing treatment plan with medical cannabis. \n            <br/>\n            \n        </div>    \n\n    </div>\n\n</div>\n\n<div class="locate-us">\n    <h1> New Port Richey </h1>\n    <div id="address-map" class="map"></div>\n    <div class="address-detail">\n\n        <div>\n            <img src="/images/logo.png" />\n        </div>\n        <h3> Natural Clinic MD </h3>\n        <div>\n            <b>New Port Richey:</b>\n            <br/>\n            4766 Rowan Rd\n            <br/>\n            New Port Richey FL 34653\n        </div>\n        <div>\n            If you have any question, please feel free to contact us\n        </div>\n        <br/>\n        <div>\n            Email : \n            <a href="mailto:jalpa.dance.academy@gmail.com">\n                jalpa.dance.academy@gmail.com\n            </a>\n        </div>\n        <div>\n            Phone : \n            <a href="tel:727-753-8861">\n                727-753-8861\n            </a>\n        </div>\n        <div>\n            Fax : \n            <a href="tel:888-849-6158">\n                888-849-6158\n            </a>\n        </div>\n    </div>\n</div>\n\n<div class="locate-us">\n    <h1> Rockledge </h1>\n    <div id="address-map-1" class="map"></div>\n    <div class="address-detail">\n\n        <div>\n            <img src="/images/logo.png" />\n        </div>\n        <h3> Natural Clinic MD </h3>\n         <div>\n            <b>Rockledge:</b>\n            <br/>\n            577 Barnes Blvd #400\n            <br/>\n            Rockledge, FL 32955\n        </div>\n        <br/>\n        <div>\n            If you have any question, please feel free to contact us\n        </div>\n        <br/>\n        <div>\n            Email : \n            <a href="mailto:jalpa.dance.academy@gmail.com">\n                jalpa.dance.academy@gmail.com\n            </a>\n        </div>\n        <div>\n            Phone : \n            <a href="tel:321-405-2090">\n                321-405-2090\n            </a>\n        </div>\n        <div>\n            Fax : \n            <a href="tel:888-849-6158">\n                888-849-6158\n            </a>\n        </div>\n    </div>\n</div>\n\n<script>\n      function initMap() {\n        var address1 = {lat: 28.228645, lng: -82.690326},\n            address2 = { lat : 28.2941081, lng: -80.7205293}\n\n        var map = new google.maps.Map(document.getElementById(\'address-map\'), {\n            zoom: 10,\n            center: address1\n        });\n\n        var map1 = new google.maps.Map(document.getElementById(\'address-map-1\'), {\n            zoom: 10,\n            center: address2\n        });\n\n        var marker = new google.maps.Marker({\n            position: address1,\n            map: map\n        });\n        var marker2 = new google.maps.Marker({\n            position: address2,\n            map: map1\n        })\n      }\n</script>    \n\n<script async defer\n    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-OJo_BS_LEeMdzIwq30RE7ZUnE6uuDW4&callback=initMap">\n</script>';

}
return __p
};

this["JST"]["templates/dashboard.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="dashboard">\n\n    <div class="active">\n        <div class="logo-container">\n            <img src="/images/logo.png" />\n        </div>\n\n        <div class="input-box">\n            <input type="text" />\n            <button id="submit-btn" > Enter Token </button>\n        </div>\n    </div>\n\n    <div class="in-active">\n\n        <div class="logo-container">\n            <img src="/images/logo.png" />\n        </div>\n        <h4> Admin Dashboard </h4>\n        <table>\n\n            <thead>\n                <tr>\n\n                    <td>\n                        Name\n                    </td>\n\n                    <td>\n                        Email\n                    </td>\n\n                    <td>\n                        Contact No.\n                    </td>\n\n                    <td>\n                        Florida Resident \n                    </td>\n\n                    <td>\n                        Previous Treatment\n                    </td>\n\n                    <td>\n                        Source Of Lead\n                    </td>\n\n                    <td>\n                        Request Time\n                    </td>\n\n                </tr>\n            </thead>\n\n            <tbody>\n\n                ';
 _.each((contacts || []).reverse(), function(contact, index) { ;
__p += '\n\n                    <tr>\n                        \n                        <td>\n                            ' +
((__t = ( contact.name )) == null ? '' : __t) +
'\n                        </td>\n\n                        <td>\n                            <a href="mailto:' +
((__t = ( contact.email )) == null ? '' : __t) +
'">\n                                <i class="fa fa-envelope"></i>\n                            </a> \n                            \n                            ' +
((__t = ( contact.email )) == null ? '' : __t) +
'\n                        </td>\n\n                        <td>\n                            <a href="tel:' +
((__t = ( contact.phone )) == null ? '' : __t) +
'">\n                                <i class="fa fa-phone"></i>\n                            </a>\n                            ' +
((__t = ( contact.phone )) == null ? '' : __t) +
'\n                        </td>\n\n                        <td>\n                            ' +
((__t = ( contact.resident )) == null ? '' : __t) +
'\n                        </td>\n\n                        <td>\n                            ' +
((__t = ( contact.treatment )) == null ? '' : __t) +
'\n                        </td>\n\n                        <td>\n                            ' +
((__t = ( contact.source )) == null ? '' : __t) +
'\n                        </td>\n\n                        <td>\n                            ';
 var dateObj = new Date(contact.time * 1000) ;
__p += '\n                            ' +
((__t = ( dateObj.toDateString() + ' , ' + dateObj.toLocaleTimeString()  )) == null ? '' : __t) +
'\n                        </td>\n\n                    </tr>\n\n                ';
 }); ;
__p += '\n\n            </tbody>\n\n        </table>\n\n    </div>\n\n</div>';

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

this["JST"]["templates/footer.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="footer-cities">\n    <div class="footer-logo-container">\n        <img src="/images/logo.png" />\n    </div> \n    <div class="county-cities">\n        ';
 _.each(counties, function(county, index) { ;
__p += ' \n                <div class="col">\n                    <li> ' +
((__t = ( county.name )) == null ? '' : __t) +
' </li>\n                    ';
 _.each(county.areas, function(area) { ;
__p += '\n                        <a href=\'/\'>\n                            Medical Marijuana in ' +
((__t = ( area )) == null ? '' : __t) +
' |\n                        </a>\n                    ';
 }); ;
__p += '\n                </div>\n        ';
 }); ;
__p += '\n    </div>  \n</div>\n\n<div class="footer-wrapper">\n\n    <div class="coloumn">\n        <div class="col-header">About Us</div>\n        <div class="content">\n            <div class="footer-logo-container">\n                <img src="/images/logo.png" />\n            </div>\n            <div class="company-text">\n                Natural Clinic,MD is committed to provide proper care and guidance for medical cannabis in every step of process according to Florida Law\n            </div>\n        </div>\n    </div>\n\n    <div class="coloumn">\n        <div class="col-header">Navigation</div>\n        <div class="content nav-links">\n            <ul>\n                ';
 _.each(tabsData, function(tab, index) { ;
__p += ' \n                    <li>\n                        <a href=' +
((__t = ( tab.firstUrl )) == null ? '' : __t) +
'>\n                            ' +
((__t = ( tab.text )) == null ? '' : __t) +
'\n                        </a>\n                    </li>\n                ';
 }); ;
__p += '\n            </ul>\n        </div>\n    </div>\n\n    <div class="coloumn">\n        <div class="col-header">Address</div>\n        <div class="content nav-links">\n            <ul>\n                <li>\n                    <b>New Port Richey:</b>\n                    <br/>\n                    4766 Rowan Rd\n                    <br/>\n                    New Port Richey FL 34653\n                    <br/>\n                    Phone :\n                    <a href="tel:727-753-8861">\n                         727-753-8861\n                    </a>\n                </li> \n                <li>\n                    <b>Rockledge:</b>\n                    <br/>\n                    577 Barnes Blvd #400\n                    <br/>\n                    Rockledge, FL 32955\n                    <br/>\n                    Phone :\n                    <a href="tel:321-405-2090">\n                         321-405-2090\n                    </a>\n                </li> \n                <li>\n                    Email :\n                    <a href="mailto:jalpa.dance.academy@gmail.com">\n                        jalpa.dance.academy@gmail.com\n                    </a>\n                </li>            \n                <li>\n                    Fax :\n                    <a href="tel:888-849-6158">\n                         888-849-6158\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class="coloumn">\n        <div class="col-header">Connect Us</div>\n        <div class="content">\n            <ul class="social-connection">\n                <li>\n                    <a  target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a  target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a  target="_blank" href="https://www.linkedin.com/company-beta/24426776/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                <li>\n                    <a  target="_blank" href="">\n                        <i class="fa fa-google-plus"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>    \n</div>\n\n\n<div class="developer">\n        © 2017 Natural Clinic, MD. All Rights Reserved.\n</div>';

}
return __p
};

this["JST"]["templates/getinfo.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="success-overlay">\n    <h4> We have received your request. Our team will get back to you. \n        <br>\n        Redirecting you to homepage\n    </h4>\n</div>\n<div class="get-info">\n\n    <h4>\n        Free telephone consultation available. Please fill out the form below if you\n        think you might qualify for treatment with medical cannabis. Dr. Patel\n        will call you within 2 to 3 days to gather more information about your\n        medical condition and determine whether medical marijuana might be\n        right for you.        \n    </h4>\n\n    <form class="form-container">\n\n        <div class="input-ele">\n            <label>Name</label>\n            <input type="text" id="name" required/>\n        </div>\n\n        <div class="input-ele">\n            <label>Email</label>\n            <input type="email" id="email" required/>\n        </div>\n\n        <div class="input-ele">\n            <label>Phone</label>\n            <input type="text" pattern="[0-9]{10}" id="phone" required/>\n        </div>\n\n        <div class="input-ele">\n            <label>\n                Are you a Florida resident?\n            </label>\n            <br/>\n            <div class="radio-container">\n                <label for="yes">Yes</label>\n                <input type="radio" name="residence" value="Yes" id="yes"/>\n                <label for="no">No</label>\n                <input type="radio" name="residence" value="No" id="no"/>\n            </div>  \n        </div>\n\n        <div class="input-ele">\n            <label>\n                Have you received previous treatment for your condition? \n            </label>\n            <br/>\n            <div class="radio-container">\n                <label for="yes-treatment">Yes</label>\n                <input type="radio" name="treatment" value="Yes" id="yes-treatment"/>\n                <label for="no-treatment">No</label>\n                <input type="radio" name="treatment" value="No" id="no-treatment"/>\n            </div>  \n        </div>\n\n        <div class="input-ele">\n            <label>\n                Where did you hear about us? \n            </label>\n            <br/>\n            <div class="radio-container">\n               \n                <input type="checkbox" name="how" value="Internet" id="internet"/>\n                <label for="internet">Internet search</label>\n                <br/>\n\n                <input type="checkbox" name="how" value="Friends" id="friends"/>\n                <label for="friends">Friends or family</label>\n                <br/>\n\n                <input type="checkbox" name="how" value="Ad" id="ad"/>\n                <label for="ad">Advertisement</label>\n                <br/>\n\n                <input type="checkbox" name="how" value="News" id="news"/>\n                <label for="news">Newspaper story</label>\n                <br/>\n\n                <input type="checkbox" name="how" value="Other" id="other"/>\n                <label for="other">Other</label>\n                <br/>\n\n                <input type="text" name="Other condition" placeholder="Other Source" id="other-condition">\n\n            </div>  \n        </div>\n\n        <div class="input-ele">\n            <label> What is your medical condition? </label>\n            <select>\n                <option value="ALS">Amyotrophic Lateral Sclerosis (ALS or Lou Gehrig’s disease)</option>\n                <option value="Cancer">Cancer</option>\n                <option value="Crohn\'s disease">Crohn\'s disease</option>\n                <option value="Chronic muscle spasms">Chronic muscle spasms</option>\n                <option value="Chronic Nonmalignant Pain">Chronic Nonmalignant Pain</option>\n                <option value="glaucoma">Glaucoma</option>\n                <option value="epilepsy">Epilepsy</option>\n                <option value="HIV/AIDS">HIV/AIDS</option>\n                <option value="Multiple sclerosis">Multiple Sclerosis</option>\n                <option value="Parkinson’s disease">Parkinson’s disease </option>\n                <option value="PTSD">Post Traumatic Stress Disorder (PTSD) </option>\n                <option value="Seizures">Seizures</option>\n                <option value="others">Other debilitating conditions</option>\n            </select>\n        </div>\n        <button type="submit"> Request A Free Phone Consultation </button>\n    </form>\n\n</div>';

}
return __p
};

this["JST"]["templates/header.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="header-wrapper">\n    <div class="logo-container">\n        <img src="/images/logo.png"/>\n    </div>\n\n    \n    <div class="hamberger-container">\n        <button class="ham-berger"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>\n    </div>\n\n    <div class="header-overlay"></div>\n\n    <div class="header-contact">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> <a href="tel:727-753-8861">727-753-8861 </a></span>\n                </li>\n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span> <a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a></span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/company-beta/24426776/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="">\n                        <i class="fa fa-google-plus"></i>\n                    </a>\n                </li>\n            </ul>\n\n    </div>\n\n    <div class="schedule-appointment">\n        FREE Consultation\n    </div>\n\n    <div class="menu-tab">\n        \n        <div class="group group-1">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> \n                        <a href="tel:727-753-8861">\n                            New Port Richey : 727-753-8861\n                        </a>    \n                    </span>\n                </li>\n                 <li>\n                    <i class="fa fa-phone"></i>\n                    <span> \n                        <a href="tel:321-405-2090">\n                            Rockledge : 321-405-2090\n                        </a>    \n                    </span>\n                </li>\n                 <li>\n                    <i class="fa fa-fax"></i>\n                    <span> \n                        <a href="tel:888-849-6158">\n                            888-849-6158\n                        </a>    \n                    </span>\n                </li>\n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span>\n                        <a href="mailto:jalpa.dance.academy@gmail.com">\n                            jalpa.dance.academy@gmail.com\n                        </a> \n                    </span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/company-beta/24426776/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="">\n                        <i class="fa fa-google-plus"></i>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n\n        <div class="group group-2">\n\n            <ul class="main-menu">\n                ';
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
__p += '\n            </ul>\n\n        </div>\n\n        <div class="schedule-appointment schedule-appointment-mobile">\n            FREE Consultation\n        </div>\n\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/homepage.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class=\'homepage\'>\n\n\t<div class="schedule-now" >\n\t\t<a href="/get-info" >\n\t\t\tFREE Consultation\n\t\t</a>\n\t</div>\n\n\t<div class="image-container">\n\n\t\t<img src="/images/main.jpeg" />\n\n\t</div>\n\n\t<div class="homepage-text">\n\n\t\t<h1>Our Treatment Philosophy</h1>\n\n\t\t<p>\n\t\t\tAs experienced medical providers, we often see how traditional medicine fails to\n\t\t\thelp patients suffering with serious health conditions. We also see how often\n\t\t\ttraditional medications cause negative or even dangerous side effects. (For\n\t\t\texample, with powerful opioid medications used to treat severe pain.)\n\t\t</p>\n\t\t\t\n\t\t<p>\n\t\t\tWe at  \n\t\t\t\t<span class="text-natural">Natural Clinic</span> \n                <span class="text-md"> MD </span> \n\t\t\tbelieve there is a better way. A more natural and holistic\n\t\t\tway. A way that helps patients live with less physical and emotional misery on a\n\t\t\tdaily basis. A way that helps patients live the best life possible even when facing a\n\t\t\tserious medical condition or a terminal diagnosis.\n\t\t</p>\n\n\t\t<p>\n\t\t\tMost of all, we believe no one should needlessly suffer. Life is hard enough as it is\n\t\t\twithout enduring physical or emotional distress that can often be reduced or\n\t\t\trelieved with non-traditional medical care.\n\t\t</p>\n\n\t\t<p>\n\t\t\tWhile medical marijuana is not right for every person or every condition, it can\n\t\t\timprove the quality of life for many people currently suffering without hope of\n\t\t\trelief. We at \n\t\t\t\t<span class="text-natural">Natural Clinic</span> \n                <span class="text-md"> MD </span>\n\t\t\tare committed to helping our patients achieve their\n\t\t\thealth goals and live life to the fullest.\n\t\t</p>\n\n\t\t<p>\n\t\t\tWe opened our doors in 2017 with a deep commitment to providing compassionate individualized care for adult patients suffering from serious medical conditions and terminal illnesses.  Please contact us to arrange a \n\t\t\t<a class="get-info-page" href="/get-info">FREE PHONE CONSULTATION</a>\t\n\t\t\t if you think you or a loved one might qualify for care with our clinic. \n\t\t</p>\n\n\t</div>\n\n\t<div class="team-detail">\n\t\t<h2 class="title-text"> Our Team </h2>\n\n\t\t<div class="doc-image">\n       \t\t<img src="/images/tanmay.jpg" />\n    \t</div>\n\n\t\t<div class="team-text-wrapper">\n\t\t\t<h3 class="doc-name">\n\t\t\t\tTanmay Patel, MD\n\t\t\t</h3>\n\n\t\t\t<p>\n\n\t\t\t\tTanmay Patel, MD is a board certified internist with over 15 years of clinical\n\t\t\t\texperience. Throughout his career he has served and treated many patients in\n\t\t\t\tpain and with chronic debilitating diseases. Recent Legalization of Medical\n\t\t\t\tCannabis in Florida now provided another treatment options for these patients.\n\t\t\t\tDr. Patel compassion and expertise has been the impetus for \n\t\t\t\t\t<span class="text-natural">Natural Clinic</span> \n\t\t\t\t\t<span class="text-md"> MD </span>\t\n\t\t\t\tto be created.\n\n\t\t\t</p>\n\t\t</div>\t\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/index.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html>\n<head>\n    <title itemprop=\'name\' > ' +
((__t = ( title )) == null ? '' : __t) +
'</title>\n\n    <meta charset="utf-8">\n    <meta http-equiv = \'Content-type\' content = \'text/plain; charset=x-user-defined\'/>\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimum-scale=1"/>\n    <meta name="apple-mobile-web-app-status-bar-style" content="purple-translucent">\n    <meta name="mobile-web-app-capable" content="yes">\n    \n    <meta name=\'description\' content=' +
((__t = ( description )) == null ? '' : __t) +
' />\n\n    <meta name="keywords" itemprop="keywords" \n        content=' +
((__t = ( keywords )) == null ? '' : __t) +
' />\n\n    <link rel=\'canonical\' href=\'\' itemprop=\'url\' />\n\n    <link rel="icon" sizes="192x192" href="/favico.ico" data-reactid="24">\n\n    <meta name="theme-color" content="#db1174">\n    <meta name="google-site-verification" content="5onw29QzEFUh_wayOn_9EdxfzH0csFOR4OGroaIHb-k" />\n    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n\n    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">\n    \n    <script type="application/ld+json">\n        ' +
((__t = ( addressSchema )) == null ? '' : __t) +
'\n    </script>\n    \n\n    <script type="text/javascript">\n       \n        function loadScript() {\n\n            // No need of adding live reload script on live site\n            if(location.hostname === \'www.naturalclinicmd.com\') {\n                return\n            }\n\n            var lrHost = location.protocol + \'//\' + location.hostname + \':35729\';\n            var s = document.createElement(\'script\');\n            s.async = true;\n            s.setAttribute(\'src\', lrHost + \'/livereload.js\');\n            document.body.appendChild(s);\n        }\n\n        window.onload = loadScript;\n    </script>\n\n    <style type="text/css">\n\n        body {\n            margin: 0;\n            padding: 0;\n        }\n\n        .logo-container {\n            padding: 100px 0 20px;\n        }\n\n        .overlay-modal {\n            position: fixed;\n            overflow: hidden;\n            background: rgba(0, 0, 0, 0.8);\n            text-align: center;\n            width: 100%;\n            height: 100%;\n            color: white;\n        }\n\n    </style>\n\n    <link rel="icon" \n      type="image/png" \n      href="/favico.ico">\n</head>\n<body>\n\n    <!-- Overlay Modal to show bootstraping -->\n    <div class="overlay-modal">\n            <a href="/">        \n                <div class="logo-container">\n                    <img src="/images/logo.png" style="width:200px;height:80px;"/>\n                </div>\n            </a>        \n            <h1>\n                Natural Clinic, MD\n                <br/>Florida\n            <h1>\n            <h2>\n                Medical Marijuana Clinic\n            </h2>\n        \n    </div>\n    <div class="content">\n\n    </div>\n\n    <!-- Start content loading -->\n    <script type="text/javascript" src=\'/js/vendor/requirejs/require.js\'\n     data-main=\'/config.js\'></script>\n    <script type="text/javascript" src=\'/js/main.js\'></script>\n    <script type="text/javascript" src=\'/js/font-awesome.js\'></script>\n    <!-- content loading end -->\n\n</body>\n</html>';

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

this["JST"]["templates/medinfoTerms.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n        Terms and Types\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tAre “medical marijuana” and “medical cannabis” the same thing?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYes. Cannabis is the medical term for marijuana.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tWhat are cannabinoids?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tCannabinoids are chemicals found in cannabis. THC and CBD are the two cannabinoids used for\n            medical treatment.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            Do cannabinoids get people “high”?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tTHC is the mind-altering ingredient in marijuana that can make people “high.” CBD does not\n            have this effect on patients.\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDoes the human body also naturally produce cannabinoids?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Yes. These chemicals improve concentration, pain tolerance, memory and other important daily\n            functions.\n\t\t</div>\n\t</div> \n\n\n    <div class="question-type">\n\n            <div class="header-text">\n                Are cannabinoids dangerous?\n            </div>\n\n            <div class="sub-header-text">\n                When misused, these chemicals can have serious side effects. This is why patients must \n                be under a physician\'s supervision.\n            </div>\n    </div>\n\n    <div class="question-type">\n\n            <div class="header-text">\n                What do the terms indica, sativa, and hybrid mean?\n            </div>\n\n            <div class="sub-header-text">\n                Indica and sativa are different types of cannabis. A hybrid is a combination of the two types.\n            </div>\n    </div>  \n\n    <div class="question-type">\n\n            <div class="header-text">\n                What is the difference between indica and sativa strands of cannabis?\n            </div>\n\n            <div class="sub-header-text">\n                Indica cannabis, which has a high level of THC, tends to make people feel relaxed. Sativa\n                cannabis, which has a high level of CBD, tends to make people feel energized. (Hybrids fall\n                somewhere in the middle.)\n            </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/medinfoUses.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n\t\tMedical Uses\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tWhat are the medical uses for THC?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tTHC increases appetite and reduces nausea. This is important for patients with certain medical\n            conditions or those undergoing chemotherapy. THC can also decrease pain, inflammation, and\n            problems with muscle control.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tWho determines what type of medical cannabis I need?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Dr. Patel will determine what treatment is best for you based on your diagnosis, medical history,\n            and symptoms.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            Is medical marijuana safely manufactured and inspected for purity in Florida?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Yes. The state has established rules to make sure all medical cannabis is properly manufactured\n            and inspected.\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan medical marijuana have negative side effects?   \n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Sometimes. Dr. Patel will carefully monitor your ongoing health situation to make sure medical\n            cannabis is a good choice for you.\n\t\t</div>\n\t</div> \n\n\n    <div class="question-type">\n\n            <div class="header-text">\n                Is medical marijuana as potentially addictive and destructive to my health as opioid pain\n                medications?\n            </div>\n\n            <div class="sub-header-text">\n                No. In fact, research shows that medical marijuana can help patients reduce use of dangerous\n                opiods.\n            </div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/patientCost.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n    <div class="info-text">\n        Treatment Costs\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            How much does the initial consultation with Dr. Patel cost?\n        </div>\n\n        <div class="sub-header-text">\n            It is <b>FREE</b>. Dr. Patel will speak with you on the phone to determine if you can be eligible for\n            medical marijuana.\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            How much do office visits cost?\n        </div>\n\n        <div class="sub-header-text">\n            Initial office visit consultation charge is $165.\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            How much does medical marijuana cost?\n        </div>\n\n        <div class="sub-header-text">\n           It depends. Different types and strengths of medical cannabis have different prices.\n        </div>\n    </div> \n\n\n    <div class="question-type">\n\n            <div class="header-text">\n               Does health insurance cover the costs of office visits or medical marijuana?\n            </div>\n\n            <div class="sub-header-text">\n                No. These expenses must be paid out of pocket by the patient or their legal representative.\n            </div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/patientEligibility.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n        Patient Eligibility\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDoes Dr. Patel treat both adult and pediatric patients?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tNo. Unfortunately, Dr. Patel only treats adult patients above the age of 18.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan medical marijuana be prescribed for all health conditions?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tNo. Only certain medical conditions qualify for treatment under state law.\n\t\t</div>\n\n\t</div>\n\n    <div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tWhat do I have to bring during my first visit?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            To ensure a timely and complete evaluation by Dr. Patel, please bring the following:\n            <ul>\n                <li> State issued identification card from the state of Florida </li>\n                <li> Complete medical records from Primary care physicians/Specialist within past year </li>\n            </ul>\n            \n            \n        </div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            What medical conditions qualify for cannabis treatment?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\n\t\t\t<ul>\n\n                <li value="ALS">Amyotrophic Lateral Sclerosis (ALS or Lou Gehrig’s disease)</li>\n                <li value="Cancer">Cancer</li>\n                <li value="Crohn\'s disease">Crohn\'s disease</li>\n                <li value="Chronic muscle spasms">Chronic muscle spasms</li>\n                <li value="Chronic Nonmalignant Pain">Chronic Nonmalignant Pain</li>\n                <li value="glaucoma">Glaucoma</li>\n                <li value="epilepsy">Epilepsy</li>\n                <li value="HIV/AIDS">HIV/AIDS</li>\n                <li value="Multiple sclerosis">Multiple Sclerosis</li>\n                <li value="Parkinson’s disease">Parkinson’s disease </li>\n                <li value="PTSD">Post Traumatic Stress Disorder (PTSD) </li>\n                <li value="Seizures">Seizures</li>\n                <li value="others">Other debilitating conditions</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDoes Dr. Patel diagnose medical marijuana patients with these conditions?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Yes, Dr. Patel can diagnose patients with the above conditions but he may request records from\n            your physicians.\n\t\t</div>\n\t</div> \n\n\n    <div class="question-type">\n\n            <div class="header-text">\n                Do I need to try other treatments for my condition before I can try medical marijuana?\n            </div>\n\n            <div class="sub-header-text">\n                Yes. Florida law requires that you first try traditional medical treatments to see if they help your\n                condition.\n            </div>\n    </div>\n\n    <div class="question-type">\n\n            <div class="header-text">\n                Can mental health problems such as depression or anxiety be treated with medical\n                cannabis?\n            </div>\n\n            <div class="sub-header-text">\n                It depends. Dr. Patel must evaluate each case to determine whether a patient qualifies for\n                cannabis-based treatment.\n            </div>\n    </div>\n\n        <div class="question-type">\n\n            <div class="header-text">\n                Is there any other conditions which may qualify me for medical cannabis?\n            </div>\n\n            <div class="sub-header-text">\n                It depends upon the condition and how they interfere with your activities of daily\n                living. Following conditions may qualify you for medical cannabis.\n                <ul>\n                    <li value="Cancer">Anxiety</li>\n                    <li value="Crohn\'s disease">Anorexia</li>\n                    <li value="epilepsy">Arthritis</li>\n                    <li value="glaucoma">Back Pain</li>\n                    <li value="HIV/AIDS">Cachexia (Wasting Syndrome)</li>\n                    <li value="Seizures">Cyclical Vomiting Syndrome</li>\n                    <li value="Crohn\'s disease">Diabetes</li>\n                    <li value="Crohn\'s disease">Hepatitis C</li>\n                    <li value="Crohn\'s disease">Irritable Bowel Syndrome (with chronic abdominal pain)</li>\n                    <li value="Crohn\'s disease">Lyme Disease</li>\n                    <li value="Crohn\'s disease">Migraine</li>\n                    <li value="Crohn\'s disease">Muscle Spasms</li>\n                    <li value="Crohn\'s disease">Muscular Dystrophy</li>\n                    <li value="Crohn\'s disease">Severe &amp; Chronic Pain</li>\n                    <li value="Crohn\'s disease">Severe Nausea</li>\n                    <li value="Crohn\'s disease">Sickle Cell Anemia</li>\n                    <li value="Crohn\'s disease">Spasticity</li>\n                    <li value="Crohn\'s disease">Any Terminal Condition</li>\n                    <li value="Crohn\'s disease">Other Debilitating Conditions</li>\n                </ul>            \n            </div>\n    </div>  \n\n    <div class="question-type">\n\n            <div class="header-text">\n                Know More .... \n            </div>\n\n            <div class="sub-header-text">\n               For more information, please click on \n                <a target="_blank"\n                    href="http://www.floridahealth.gov/programs-and-services/office-of-medical-marijuana-use/patients/index.html">\n                    this link\n                </a>\n            </div>\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/patientForms.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n    <div class="info-text">\n        Forms\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Process of Obtaining Medical Marijuana Card in Florida\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/ommu-patient.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Release of Confidential Information\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/release-of-confidential-information.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Natural Clinic MD Intake Form\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/gen-form.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            FL Dept Of Health Consent Form for Medical Marijuana Use\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/consent-form.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>  \n\n    <div class="question-type">\n\n        <div class="header-text">\n            Patient Registry User Guide\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/patient-registry-user-guide.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>      \n\n    <div class="question-type">\n\n        <div class="header-text">\n            Patient Application Form for Medical Marijuana Card Use\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/patient-application.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Permission Of Treatment\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/permission-of-treatment.pdf"> \n                Download\n            </a>\n        </div>\n\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/patientLegal.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n        Legal Representative\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan I get medical marijuana for another person?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tOnly if you are that person’s legal representative as defined by the state of Florida.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tWhat does it mean to be a “legal representative” in Florida?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tTo get medical marijuana for another person you must be one of the following:\n\n            <ul>\n\t\t\t\t<li>The parent of a patient under the age of 18.</li>\n                <li>The legal guardian of a patient under the age of 18.</li>\n                <li>The legal health care surrogate for an adult patient</li>\n                <li>The legal power of attorney for an adult patient (with authorization to make health care decisions).</li>\n            </ul>\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            What sections of Florida law explain “health care surrogate” and “power of attorney”?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\t<ul>\n\t\t\t\t<li>Health care surrogate—section 744.3215(4), Florida Statutes</li>\n                <li>Power of attorney—section 765.113, Florida Statutes</li>\n            </ul>\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDo I need to register with the state and get a Compassionate Use Registry ID card to get\n            medical marijuana for another person?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Yes. The state will need your name and the name of the patient you represent.\n\t\t</div>\n\t</div> \n</div>';

}
return __p
};

this["JST"]["templates/patientRegistration.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n\t\tHow to Register\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDo I need to register with the state of Florida to get medical marijuana?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYes. All medical marijuana patients need to obtain a Compassionate Use Registry ID card from\n            the state.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDo I need to register if I am the legal representative for the patient?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYes. The state will need your name and the name of the patient you represent.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            How much does it cost to apply for a Compassionate Use Registry ID card?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tThe state charges an application fee of $75. (You also need to submit a full-face, passport-type\n            color photograph taken within the last 90 days.)\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tHow do I apply for a Compassionate Use Registry ID card?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            You can either apply online or by mail. Application information is located\n            <a href="http://www.floridahealth.gov/programs-and-services/office-of-compassionate-use/registry-id-cards/index.html">\n                here.\n            </a>\n\t\t</div>\n\t</div> \n\n\n    <div class="question-type">\n\n            <div class="header-text">\n                How long will it take to get my ID card?\n            </div>\n\n            <div class="sub-header-text">\n               About 3 weeks if you apply online. It takes a few extra days if you apply by mail.\n            </div>\n    </div>\n\n</div>';

}
return __p
};

this["JST"]["templates/presFill.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n\t\tFilling My Prescription\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tWhere do I fill my prescription for medical marijuana?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tAt a special clinic owned by a licensed, state-approved dispensing organizations. (No one else is allowed to dispense medical marijuana).\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tHow do I locate a dispensing clinic near where I live?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYou can click here to locate a dispensary near your home. (You may also be able to order online or over the phone.)\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            How much medical cannabis can I get at one time?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYou can receive up to a 70-day supply at a time. \n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan I get refills on my prescription?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n           \tYes. State law allows you to receive two 70-day refills on your original prescription. After that,\n\t\t\tyou must visit Dr. Patel again to be re-certified as a medical marijuana patient.\n\t\t</div>\n\t</div> \n\n</div>';

}
return __p
};

this["JST"]["templates/presGet.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n\t\tGetting My Prescription\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan any Florida-licensed physician prescribe medical cannabis?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tNo. Only physicians who complete a special course offered by the state are allowed to prescribe\n            medical cannabis.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan I get medical marijuana on my own without seeing a physician?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tNo. State law requires that you first see a specially trained physician like Dr. Patel.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            Can I get a prescription for medical cannabis the first time I see Dr. Patel?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYes, if you medically qualify under state law. (A 90-day waiting period is no longer required\n            before you can get your first prescription.)\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tIs my prescription information entered into the state medical marijuana database?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n           Yes. State law requires that all patient and medication information be entered into the Florida Department of Health database. \n\t\t</div>\n\t</div> \n\n</div>';

}
return __p
};

this["JST"]["templates/researchInfo.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\n\t<div class="info-text">\n\t\tResearch Information\n\t</div>\n\n    <div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\t 60 Peer-Reviewed Studies on Medical Marijuana\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            <p>\n                Results of 60 scientific research studies conducted between 1990 and 2014 that examine the impact of medical marijuana on various medical and mental health conditions.\n            </p>\n\n            <p>\n                NIH Research on Marijuana and Cannabinoids\n            </p>\n\n            <p>\n                Details federal research, funded at more than $100 million per year, on the health benefits of medical cannabis.\n            </p>\n\n            <p>\n                Marijuana as Medicine\n            </p>\n\n            <p>\n                Recent information from the federal government on medical uses of cannabis\n            </p>\n\t\t</div>\n\n\t</div>\n\n  \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDo Medical Marijuana Laws Reduce Addiction and Deaths Related to Pain Killers?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Report from the prestigious RAND Corporation research organization.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tAfter Medical Marijuana Legalized, Medicare Prescriptions Drop For Many Drugs\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tNational Public Radio story discussing a study in the prestigious Health Affairs academic journal.\n\t\t</div>\n\n\t</div>\n\n</div>';

}
return __p
};

this["JST"]["templates/researchPolicy.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="patients-tab">\n\t<div class="info-text">\n\t\tPolicy Issues\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tIs cannabis treatment regulated by the U.S. Food and Drug Administration (FDA)?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tNo. But the FDA has approved two medications that contain cannabinoids, the major chemical in medical marijuana.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tHave other states legalized the use of medical cannabis?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\tYes. Currently 28 states and the District of Columbia allow marijuana use for medical purposes.\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n            Have other countries legalized the use of medical cannabis?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            Yes. Canada, Israel, Germany, Finland, and Italy are among the growing number of nations that permit medical marijuana.\n\t\t</div>\n\n\t</div> \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tCan I smoke marijuana or grow my own marijuana?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n           No. Both activities are prohibited by Florida law.\n\t\t</div>\n\t</div> \n\n</div>';

}
return __p
};

this["JST"]["templates/team.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="team-tab" itemscope itemtype="http://schema.org/Physician">\n\n    <div class="doc-image">\n        <img itemprop="image" src="/images/tanmay.jpg" />\n    </div>\n\n    <div class="team-text-wrapper">\n        <h3 itemprop="name">\n            Tanmay Patel, MD\n        </h3>\n\n        <p itemprop="description">\n\n            Tanmay Patel, MD is a board\n            \n            <span itemprop="medicalSpecialty" itemscope itemtype="https://schema.org/medicalSpecialty">\n                 <span itemprop="description"> certified internist </span> \n            </span>     \n            with over 15 years of clinical\n            experience. Throughout his career he has served and treated many patients in\n            pain and with chronic debilitating diseases. Recent Legalization of Medical\n            Cannabis in Florida now provided another treatment options for these patients.\n            Dr. Patel compassion and expertise has been the impetus for \n                <span itemscope itemtype="http://schema.org/Hospital">\n                    <span itemprop="name"> Natural Clinic MD </span>\n                </span>\n            to be created.\n        </p>\n\n        <p>\n            Medical Cannabis has beneficial benefits on the body. However Like any\n            treatment, There are risks and benefits. As quality of life and symptom relief are\n            critical, Dr. Patel will offer a \n            \n            <a href="/get-info">\n                <b>FREE TELEPHONIC CONSULTATION</b>\n            </a>   \n            to see if you\n            would qualify for Medical cannabis under the state current Law.\n        </p>\n\n        <p>\n            It is our goal to provide quality medical care to patients with end stage cancer,\n            Parkinson’s diseases, Multiple Sclerosis, Post traumatic Stress Disorder and\n            other chronic debilitating conditions. Please visit our website for more\n            information on how we can best serve you and your family.\n        </p>\n    </div>\n\n</div>';

}
return __p
};