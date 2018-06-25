module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: ["templates/*.handlebars"],
				tasks: ["jst"],
				options: {
					spawn: false,
				},
			},
		},
		jst: {
			compile: {
				options: {
					templateSettings: {
						interpolate: /\{\{(.+?)\}\}/g,
					},
				},
				files: {
					"templates/contactus.js": [
						"templates/contactus.handlebars",
					],
					"templates/dashboard.js": [
						"templates/dashboard.handlebars",
						"templates/admin.handlebars",
					],
					"templates/error.js": ["templates/*.handlebars"],
					"templates/faqs.js": ["templates/*.handlebars"],
					"templates/templates.js": [
						"templates/homepage.handlebars",
						"templates/main.handlebars",
						"templates/index.handlebars",
						"templates/header.handlebars",
						"templates/footer.handlebars",
						"templates/error.handlebars",
					],
					"templates/getinfo.js": ["templates/getinfo.handlebars"],
					"templates/patient.js": ["templates/patient*.handlebars"],
					"templates/medinfo.js": ["templates/medinfo*.handlebars"],
					"templates/team.js": ["templates/team.handlebars"],
					"templates/pres.js": ["templates/pres*.handlebars"],
					"templates/research.js": ["templates/research*.handlebars"],
					"templates/all.js": ["templates/*.handlebars"],
					"templates/reviews.js": ["templates/reviews.handlebars"]
				},
			},
		},
	})

	grunt.loadNpmTasks("grunt-contrib-watch")
	grunt.loadNpmTasks("grunt-contrib-jst")

	grunt.registerTask("default", ["watch", "jst"])
	grunt.registerTask("build", ["jst"])
}
