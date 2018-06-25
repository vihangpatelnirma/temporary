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
__p += '<div class="contact-us">\n\n\t<div class="contact-us-description">\n\t\t<h1> Contact Us </h1>\n\t\t<div class="sub-text">\n\t\t\tFor a FREE TELEPHONE call with Dr. Patel, please click the button below and fill out the information form.\n\n\t\t\t</br>\n\t\t\t<div class="schedule-now">\n\t\t\t\t<a href="/get-info">\n\t\t\t\t\tFREE Consultation\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class="contact-us-description">\n\t\t<h1> Standard Fee Schedule </h1>\n\t\t<div class="sub-text">\n\t\t\t<b>Initial Office Visit:</b>\n\t\t\t$165\n\t\t\t<br/> Visit includes a comprehensive medical examination and discussion of your diagnosis and treatment options.\n\n\t\t\t<br/>\n\t\t\t<br/>\n\t\t\t<b>Follow-up Office Visit:</b>\n\t\t\t$150\n\t\t\t<br/> Visit includes a detailed discussion of your ongoing treatment plan with medical cannabis.\n\t\t\t<br/>\n\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<div class="locate-us">\n\t<h1> New Port Richey </h1>\n\t<div id="address-map" class="map"></div>\n\t<div class="address-detail">\n\n\t\t<div>\n\t\t\t<img src="/images/logo.png" />\n\t\t</div>\n\t\t<h3> Natural Clinic MD </h3>\n\t\t<div>\n\t\t\t<b>New Port Richey:</b>\n\t\t\t<br/> 4766 Rowan Rd\n\t\t\t<br/> New Port Richey FL 34653\n\t\t</div>\n\t\t<div>\n\t\t\tIf you have any question, please feel free to contact us\n\t\t</div>\n\t\t<br/>\n\t\t<div>\n\t\t\tEmail :\n\t\t\t<a href="mailto:jalpa.dance.academy@gmail.com">\n\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t</a>\n\t\t</div>\n\t\t<div>\n\t\t\tPhone :\n\t\t\t<a href="tel:727-753-8861">\n\t\t\t\t727-753-8861\n\t\t\t</a>\n\t\t</div>\n\t\t<div>\n\t\t\tFax :\n\t\t\t<a href="tel:888-849-6158">\n\t\t\t\t888-849-6158\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n\n<div class="locate-us">\n\t<h1> Rockledge </h1>\n\t<div id="address-map-1" class="map"></div>\n\t<div class="address-detail">\n\n\t\t<div>\n\t\t\t<img src="/images/logo.png" />\n\t\t</div>\n\t\t<h3> Natural Clinic MD </h3>\n\t\t<div>\n\t\t\t<b>Rockledge:</b>\n\t\t\t<br/> 577 Barnes Blvd #400\n\t\t\t<br/> Rockledge, FL 32955\n\t\t</div>\n\t\t<br/>\n\t\t<div>\n\t\t\tIf you have any question, please feel free to contact us\n\t\t</div>\n\t\t<br/>\n\t\t<div>\n\t\t\tEmail :\n\t\t\t<a href="mailto:jalpa.dance.academy@gmail.com">\n\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t</a>\n\t\t</div>\n\t\t<div>\n\t\t\tPhone :\n\t\t\t<a href="tel:321-405-2090">\n\t\t\t\t321-405-2090\n\t\t\t</a>\n\t\t</div>\n\t\t<div>\n\t\t\tFax :\n\t\t\t<a href="tel:888-849-6158">\n\t\t\t\t888-849-6158\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n\n<script>\n\tfunction initMap() {\n\t\tvar address1 = { lat: 28.228645, lng: -82.690326 },\n\t\t\taddress2 = { lat: 28.2941081, lng: -80.7205293 }\n\n\t\tvar map = new google.maps.Map(document.getElementById(\'address-map\'), {\n\t\t\tzoom: 10,\n\t\t\tcenter: address1\n\t\t});\n\n\t\tvar map1 = new google.maps.Map(document.getElementById(\'address-map-1\'), {\n\t\t\tzoom: 10,\n\t\t\tcenter: address2\n\t\t});\n\n\t\tvar marker = new google.maps.Marker({\n\t\t\tposition: address1,\n\t\t\tmap: map\n\t\t});\n\t\tvar marker2 = new google.maps.Marker({\n\t\t\tposition: address2,\n\t\t\tmap: map1\n\t\t})\n\t}\n</script>\n\n<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-OJo_BS_LEeMdzIwq30RE7ZUnE6uuDW4&callback=initMap">\n</script>';

}
return __p
};

this["JST"]["templates/dashboard.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="dashboard">\n\n\t<div class="active">\n\t\t<div class="logo-container">\n\t\t\t<img src="/images/logo.png" />\n\t\t</div>\n\n\t\t<div class="input-box">\n\t\t\t<input type="number" />\n\t\t\t<button id="submit-btn"> Enter Token </button>\n\t\t</div>\n\t</div>\n\n\t<div class="in-active">\n\n\t\t<div class="logo-container">\n\t\t\t<img src="/images/logo.png" />\n\t\t</div>\n\t\t<h4> Admin Dashboard </h4>\n\t\t<table>\n\n\t\t\t<thead>\n\t\t\t\t<tr>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tName\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tEmail\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tContact No.\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tCounty\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tPrevious Treatment\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tSource Of Lead\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tMedical Condition\n\t\t\t\t\t</td>\n\n\t\t\t\t\t<td>\n\t\t\t\t\t\tRequest Time\n\t\t\t\t\t</td>\n\n\t\t\t\t</tr>\n\t\t\t</thead>\n\n\t\t\t<tbody>\n\n\t\t\t\t';
 _.each((contacts || []).reverse(), function(contact, index) { ;
__p += '\n\n\t\t\t\t\t<tr>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t' +
((__t = ( contact.name )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href="mailto:' +
((__t = ( contact.email )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t<i class="fa fa-envelope"></i>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t' +
((__t = ( contact.email )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href="tel:' +
((__t = ( contact.phone )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t<i class="fa fa-phone"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t' +
((__t = ( contact.phone )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t' +
((__t = ( contact.resident )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t' +
((__t = ( contact.treatment )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t' +
((__t = ( contact.source )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t' +
((__t = ( contact.condition )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t';
 var dateObj = new Date(contact.time * 1000) ;
__p += '\n\t\t\t\t\t\t\t\t' +
((__t = ( dateObj.toDateString() + ' , ' + dateObj.toLocaleTimeString() )) == null ? '' : __t) +
'\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t';
 }); ;
__p += '\n\n\t\t\t</tbody>\n\n\t\t</table>\n\n\t</div>\n\n</div>';

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

this["JST"]["templates/getinfo.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="success-overlay">\n\t<h4> We have received your request. Our team will get back to you.\n\t\t<br> Redirecting you to homepage\n\t</h4>\n</div>\n<div class="get-info">\n\n\t<h4>\n\t\tFree telephone consultation available. Please fill out the form below if you think you might qualify for treatment with medical\n\t\tcannabis. Dr. Patel will call you within 2 to 3 days to gather more information about your medical condition and determine\n\t\twhether medical marijuana might be right for you.\n\t</h4>\n\n\t<form class="form-container">\n\n\t\t<div class="input-ele">\n\t\t\t<label>Name</label>\n\t\t\t<input type="text" id="name" required/>\n\t\t</div>\n\n\t\t<div class="input-ele">\n\t\t\t<label>Email</label>\n\t\t\t<input type="email" id="email" required/>\n\t\t</div>\n\n\t\t<div class="input-ele">\n\t\t\t<label>Phone</label>\n\t\t\t<input type="text" pattern="[0-9]{10}" id="phone" required/>\n\t\t</div>\n\n\t\t<div class="input-ele">\n\t\t\t<label>\n\t\t\t\tWhat county do you live in Florida ?\n\t\t\t</label>\n\t\t\t<br/>\n\t\t\t<div class="radio-container">\n\t\t\t\t';
 _.each(counties, function(county) { ;
__p += '\n\t\t\t\t\t<input type="radio" name="residence" value="' +
((__t = ( county )) == null ? '' : __t) +
'" id="radio-' +
((__t = ( county )) == null ? '' : __t) +
'" />\n\t\t\t\t\t<label for="radio-' +
((__t = ( county )) == null ? '' : __t) +
'">' +
((__t = ( county )) == null ? '' : __t) +
'</label>\n\t\t\t\t\t<br/>\n\t\t\t\t\t';
 }); ;
__p += '\n\t\t\t</div>\n\t\t\t<input type="text" name="Other County" placeholder="Other County" id="other-county">\n\t\t</div>\n\n\t\t<div class="input-ele">\n\t\t\t<label>\n\t\t\t\tHave you received previous treatment for your condition?\n\t\t\t</label>\n\t\t\t<br/>\n\t\t\t<div class="radio-container">\n\t\t\t\t<label for="yes-treatment">Yes</label>\n\t\t\t\t<input type="radio" name="treatment" value="Yes" id="yes-treatment" />\n\t\t\t\t<label for="no-treatment">No</label>\n\t\t\t\t<input type="radio" name="treatment" value="No" id="no-treatment" />\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="input-ele">\n\t\t\t<label>\n\t\t\t\tWhere did you hear about us?\n\t\t\t</label>\n\t\t\t<br/>\n\t\t\t<div class="radio-container">\n\n\t\t\t\t<input type="checkbox" name="how" value="Internet" id="internet" />\n\t\t\t\t<label for="internet">Internet search</label>\n\t\t\t\t<br/>\n\n\t\t\t\t<input type="checkbox" name="how" value="Friends" id="friends" />\n\t\t\t\t<label for="friends">Friends or family</label>\n\t\t\t\t<br/>\n\n\t\t\t\t<input type="checkbox" name="how" value="Ad" id="ad" />\n\t\t\t\t<label for="ad">Advertisement</label>\n\t\t\t\t<br/>\n\n\t\t\t\t<input type="checkbox" name="how" value="News" id="news" />\n\t\t\t\t<label for="news">Newspaper story</label>\n\t\t\t\t<br/>\n\n\t\t\t\t<input type="checkbox" name="how" value="Other" id="other" />\n\t\t\t\t<label for="other">Other</label>\n\t\t\t\t<br/>\n\n\t\t\t\t<input type="text" name="Other condition" placeholder="Other Source" id="other-condition">\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="input-ele">\n\t\t\t<label> What is your medical condition? </label>\n\t\t\t<select>\n\t\t\t\t<option value="ALS">Amyotrophic Lateral Sclerosis (ALS or Lou Gehrig’s disease)</option>\n\t\t\t\t<option value="Cancer">Cancer</option>\n\t\t\t\t<option value="Crohn\'s disease">Crohn\'s disease</option>\n\t\t\t\t<option value="Chronic muscle spasms">Chronic muscle spasms</option>\n\t\t\t\t<option value="Chronic Nonmalignant Pain">Chronic Nonmalignant Pain</option>\n\t\t\t\t<option value="glaucoma">Glaucoma</option>\n\t\t\t\t<option value="epilepsy">Epilepsy</option>\n\t\t\t\t<option value="HIV/AIDS">HIV/AIDS</option>\n\t\t\t\t<option value="Multiple sclerosis">Multiple Sclerosis</option>\n\t\t\t\t<option value="Parkinson’s disease">Parkinson’s disease </option>\n\t\t\t\t<option value="PTSD">Post Traumatic Stress Disorder (PTSD) </option>\n\t\t\t\t<option value="Seizures">Seizures</option>\n\t\t\t\t<option value="others">Other debilitating conditions</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<button type="submit"> Request A Free Phone Consultation </button>\n\t</form>\n\n</div>';

}
return __p
};

this["JST"]["templates/header.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="header-wrapper">\n    <div class="logo-container">\n        <img src="/images/logo.png"/>\n    </div>\n\n    <div class="header-overlay hide"></div>\n    \n    <div class="hamberger-container">\n        <button class="ham-berger"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></button>\n    </div>\n\n    <div class="header-contact">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> <a href="tel:(678) 481-7207">(678) 481-7207 </a></span>\n                </li>\n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span> <a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a></span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n                        <i class="fa fa-instagram"></i>\n                    </a>\n                </li>\n            </ul>\n\n    </div>\n\n    <div class="menu-tab">\n        \n        <div class="group group-1">\n\n            <ul>\n                <li>\n                    <i class="fa fa-phone"></i>\n                    <span> \n                        <a href="tel:(678) 481-7207">\n                            (678) 481-7207\n                        </a>    \n                    </span>\n                </li>                            \n                <li>\n                    <i class="fa fa-envelope"></i>\n                    <span>\n                        <a href="mailto:jalpa.dance.academy@gmail.com">\n                            jalpa.dance.academy@gmail.com\n                        </a> \n                    </span>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.facebook.com/indiandanceform/">\n                        <i class="fa fa-facebook"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://twitter.com/indiandanceform">\n                        <i class="fa fa-twitter"></i>\n                    </a>\n                </li>\n                <li>\n                    <a target="_blank" href="https://www.linkedin.com/">\n                        <i class="fa fa-linkedin"></i>\n                    </a>\n                </li>\n                 <li>\n                    <a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n                        <i class="fa fa-instagram"></i>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n\n        <div class="group group-2">\n\n            <ul class="main-menu">\n                ';
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
__p += '<div class=\'homepage\'>\n\n\t\n</div>\n\n';

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
'\n\t</style>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( websiteSchema )) == null ? '' : __t) +
'\n\t</script>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( addressSchema )) == null ? '' : __t) +
'\n\t</script>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( customerCare )) == null ? '' : __t) +
'\n\t</script>\n\n\t<script type="application/ld+json">\n\t\t' +
((__t = ( socialProfile )) == null ? '' : __t) +
'\n\t</script>\n\n\n\t<script type="text/javascript">\n\n\t\tfunction loadScript() {\n\n\t\t\t// No need of adding live reload script on live site\n\t\t\tif (location.hostname === \'www.jalpadance.com\') {\n\t\t\t\treturn\n\t\t\t}\n\n\t\t\tvar lrHost = location.protocol + \'//\' + location.hostname + \':35729\';\n\t\t\tvar s = document.createElement(\'script\');\n\t\t\ts.async = true;\n\t\t\ts.setAttribute(\'src\', lrHost + \'/livereload.js\');\n\t\t\tdocument.body.appendChild(s);\n\t\t}\n\n\t\twindow.onload = loadScript;\n\t</script>\n\n\t<!-- Global site tag (gtag.js) - Google Analytics -->\n\t<script async src="https://www.googletagmanager.com/gtag/js?id=UA-105629408-1"></script>\n\t<script>\n\t\twindow.dataLayer = window.dataLayer || [];\n\t\tfunction gtag() { dataLayer.push(arguments); }\n\t\tgtag(\'js\', new Date());\n\n\t\tgtag(\'config\', \'UA-121319602-1\');\n\t</script>\n\n\n\t<style type="text/css">\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n\n\t\t.logo-container {\n\t\t\tpadding: 100px 0 20px;\n\t\t}\n\n\t\t.overlay-modal {\n\t\t\tposition: fixed;\n\t\t\toverflow: hidden;\n\t\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcolor: white;\n\t\t}\n\t</style>\n\n\t<link rel="icon" type="image/png" href="/favico.ico">\n</head>\n\n<body>\n\n\n\t<div class="content">\n\n\t</div>\n\n\t' +
((__t = ( mainContent )) == null ? '' : __t) +
'\n\n\t<header>\n\t\t<div class="header-wrapper">\n\t\t\t<div class="logo-container">\n\t\t\t\t<img src="/images/logo.png">\n\t\t\t</div>\n\n\n\t\t\t<div class="hamberger-container">\n\t\t\t\t<button class="ham-berger">\n\t\t\t\t\t<i class="fa fa-bars fa-2x" aria-hidden="true"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class="header-overlay"></div>\n\n\t\t\t<div class="header-contact">\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class="fa fa-phone"></i>\n\t\t\t\t\t\t<span> <a href="tel:(678) 481-7207">(678) 481-7207 </a></span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<i class="fa fa-envelope"></i>\n\t\t\t\t\t\t<span> <a href="mailto:jalpa.dance.academy@gmail.com">jalpa.dance.academy@gmail.com </a></span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.linkedin.com/">\n\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a target="_blank" href="https://www.instagram.com/jalpa.dance.academy/">\n\t\t\t\t\t\t\t<i class="fa fa-instagram"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</header>\n\n\n\t<footer>\n\t\t<div class="footer-wrapper">\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">About Us</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="footer-logo-container">\n\t\t\t\t\t\t<img src="/images/logo.png" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="company-text">\n\t\t\t\t\t\tJalpa Dance Academy was originally established in 2011 in Chicago southwest suburbs for all the dancers to find the best in them no matter what their age and experience is. \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Navigation</div>\n\t\t\t\t<div class="content nav-links">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Address</div>\n\t\t\t\t<div class="content nav-links">\n\t\t\t\t\t<ul>\t\t\t\t\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<b>Suwanee:</b>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t6365 Read Road\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tSuwanee, GA 30024\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tPhone :\n\t\t\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t\t\t(678) 481-7207\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<b>Buford:</b>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t4296 Old Suwanee Road\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tSuite 4 Buford, GA 30518\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\tPhone :\n\t\t\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t\t\t(678) 481-7207\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li> \n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tEmail :\n\t\t\t\t\t\t\t<a href="mailto:Jalpa.dance.academy@gmail.com">\n\t\t\t\t\t\t\t\tjalpa.dance.academy@gmail.com\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\t\t\t\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\tFax :\n\t\t\t\t\t\t\t<a href="tel:(678) 481-7207">\n\t\t\t\t\t\t\t\t(678) 481-7207\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="coloumn">\n\t\t\t\t<div class="col-header">Connect Us</div>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<ul class="social-connection">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="https://www.facebook.com/indiandanceform/">\n\t\t\t\t\t\t\t\t<i class="fa fa-facebook"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="https://twitter.com/indiandanceform">\n\t\t\t\t\t\t\t\t<i class="fa fa-twitter"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="https://www.linkedin.com/">\n\t\t\t\t\t\t\t\t<i class="fa fa-linkedin"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a  target="_blank" href="">\n\t\t\t\t\t\t\t\t<i class="fa fa-instagram"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\n\n\t\t<div class="developer">\n\t\t\t\t© 2018 Jalpa Dance Academy. All Rights Reserved.\n\t\t</div>\n\t\n\t</footer>\n\n\t\t\n\n\t<!-- Start content loading -->\n\t<script type="text/javascript" src=\'/js/vendor/requirejs/require.js\' data-main=\'/config.js\'></script>\n\t<script type="text/javascript" src=\'/js/main.js\'></script>\n\t<script type="text/javascript" src=\'/js/font-awesome.js\'></script>\n\t<!-- content loading end -->\n\n</body>\n\n</html>';

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
__p += '<div class="patients-tab">\n    <div class="info-text">\n        Forms\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Process of Obtaining Medical Marijuana Card in Florida\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/ommu-patient.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Release of Confidential Information\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/release-of-confidential-information.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Applying for Medical Marijuana Card - Online\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/online-apply.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n        <div class="question-type">\n\n        <div class="header-text">\n            Applying for Medical Marijuana Card - Paper / Offline\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/offline-apply.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Natural Clinic MD Intake Form\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/gen-form.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            FL Dept Of Health Consent Form for Medical Marijuana Use\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/consent-form.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Patient Registry User Guide\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/patient-registry-user-guide.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Patient Application Form for Medical Marijuana Card Use\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/patient-application.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Permission Of Treatment\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/permission-of-treatment.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n    <div class="question-type">\n\n        <div class="header-text">\n            Dispensary List\n        </div>\n\n        <div class="sub-header-text">\n            <a target="_blank" href="/forms/dispensary-list.pdf">\n                Download\n            </a>\n        </div>\n\n    </div>\n\n</div>';

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
__p += '<div class="patients-tab">\n\n\t<div class="info-text">\n\t\tResearch Information\n\t</div>\n\n    <div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\t  \n\t\t\t \t60 Peer-Reviewed Studies on Medical Marijuana\n\t\t\t\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            <p>\n                <a href="https://medicalmarijuana.procon.org/view.resource.php?resourceID=000884">Results of 60 scientific research studies</a> \n\t\t\t\tconducted between 1990 and 2014 that examine the impact of medical marijuana on various medical and mental health conditions.\n            </p>\n\n            <p>\n                NIH Research on Marijuana and Cannabinoids\n            </p>\n\n            <p>\n                Details federal research, funded at more than $100 million per year, on the health benefits of medical cannabis.\n            </p>\n\n            <p>\n                Marijuana as Medicine\n            </p>\n\n            <p>\n                Recent information from the federal government on medical uses of cannabis\n            </p>\n\t\t</div>\n\n\t</div>\n\n  \n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tDo Medical Marijuana Laws Reduce Addiction and Deaths Related to Pain Killers?\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n            <a href="https://www.rand.org/pubs/external_publications/EP67480.html">\n\t\t\tReport from the prestigious RAND Corporation research organization.\n\t\t\t</a>\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tAfter Medical Marijuana Legalized, Medicare Prescriptions Drop For Many Drugs\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\t<a target="_blank" href="https://www.npr.org/sections/health-shots/2016/07/06/484977159/after-medical-marijuana-legalized-medicare-prescriptions-drop-for-many-drugs">\n\t\t\t\tNational Public Radio story discussing a study in the prestigious Health Affairs academic journal.\n\t\t\t</a>\n\t\t</div>\n\n\t</div>\n\n\t<div class="question-type">\n\n\t\t<div class="header-text">\n\t\t\tOpioid Use Lower In States That Eased Marijuana Laws\n\t\t</div>\n\n\t\t<div class="sub-header-text">\n\t\t\t<a target="_blank" href="https://www.npr.org/sections/health-shots/2018/04/02/598787768/opioid-use-lower-in-states-that-eased-marijuana-laws">\n\t\t\t\tNew research suggest​s​ medical marijuana ​can reduce the opioid drug epidemic ravaging the United States.\n\t\t\t</a>\n\t\t</div>\n\n\t</div>\n\n</div>';

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

this["JST"]["templates/reviews.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

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