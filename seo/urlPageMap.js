// URL and corresponding handlebar

const urlMap = {
	"/": "homepage",
	"/get-info": "getinfo",
	"/contact-us": "contactus",
	"/team/doctors": "team",
	"/admin/dashboard": "dashboard",
	"/patients/how-to-register" : "patientRegistration",
	"/patients/eligibility" : "patientEligibility"
}

function getHandlebar(path) {
	const file = `${urlMap[`${path}`] || urlMap["/"]}`
	return require("../templates/all")["JST"][`templates/${file}.handlebars`]({
		counties: [],
		contacts: [],
		testimonials : [],
		review: [ 	]
	})
}

module.exports = { getHandlebar, urlMap }
