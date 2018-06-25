define("footer", ["backbone", "appconfig"], function(Backbone, Config) {
	return Backbone.View.extend({
		el: "footer",

		templateName: "templates/footer.handlebars",

		initialize: function() {
			this.render()
		},

		render: function() {
			this.$el.html(
				window["JST"][this.templateName]({
					tabsData: Config.HEADER,
					counties: Config.FOOTER,
				})
			)
		},
	})
})
