define("getinfo", ["backbone", "appconfig", "templates/getinfo"], function(Backbone, appConfig) {
	utils.loadCSS("/styles/getinfo.css")

	return Backbone.View.extend({
		el: "#main-content",

		templateName: "templates/getinfo.handlebars",

		events: {
			"submit form": "onFormSubmit",
		},

		initialize: function() {
			this.render()
		},

		onFormSubmit: function(event) {
			if (this.$el.find("button").hasClass("disable")) {
				return
			}

			this.$el.find("button").addClass("disable")
			event.preventDefault()

			$.ajax({
				type: "POST",
				url: "/query",
				data: {
					Name: this.$el.find("#name").val(),
					Email: this.$el.find("#email").val(),
					Phone: this.$el.find("#phone").val(),
					"From Florida": this.county(),
					Source: this.source(),
					"Previous Treatment": this.$el
						.find("[name=treatment]")
						.filter(":checked")
						.val(),
					Illness: this.$el.find("select").val(),
				},
				success: this.onSuccess.bind(this),
				error: this.onError.bind(this),
			})
		},

		county: function() {
			var selectedCounty = this.$el
				.find("[name=residence]")
				.filter(":checked")
				.val()

			var otherCounty = this.$el.find("#other-county").val()

			return otherCounty ? otherCounty + " , " + selectedCounty : selectedCounty
		},

		source: function() {
			var sourceArray = this.$el
				.find("[type=checkbox]:checked")
				.map(function(_, el) {
					return $(el).val()
				})
				.get()

			sourceArray.push(this.$el.find("#other-condition").val())

			return sourceArray
		},

		onSuccess: function() {
			this.$el.find(".success-overlay").fadeIn("slow")
			setTimeout(function() {
				location.href = "/"
			}, 5000)
		},

		onError: function() {
			console.log("on error encountered")
		},

		render: function() {
			this.$el.html(
				window.JST[this.templateName]({
					counties: appConfig.FOOTER.map(function(county) {
						return county.name
					}),
				})
			)
		},
	})
})
