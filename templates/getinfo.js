this["JST"] = this["JST"] || {};

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