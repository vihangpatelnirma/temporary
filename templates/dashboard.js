this["JST"] = this["JST"] || {};

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

this["JST"]["templates/admin.handlebars"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};