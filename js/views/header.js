define("header", ["backbone", "appconfig"], function(Backbone, Config) {
	return Backbone.View.extend({
		el: "header",

		tabsData: Config.HEADER,

		events: {
			"click [data-url]": "onTabSelected",
			"click .logo-container": "onLogoClick",
			"click .schedule-appointment": "onGetInfoClick",
			"click .ham-berger": "showMenu",
			"click .header-overlay": "closeMenu",
			"click [data-id]": "showSubMenu",
			"mouseover [data-id]": "showSubMenu",
			"mouseout [data-id]": "hideSubMenu",
		},

		templateName: "templates/header.handlebars",

		initialize: function() {
			this.bindEvents()
			this.render()
		},

		bindEvents: function() {
			this.model.on("change:selectedTab", this.render, this)
		},

		getSelectedTab: function() {
			this.selectedIndex = +this.model.get("selectedTab")
		},

		render: function() {
			this.getSelectedTab()
			this.$el.html(
				window["JST"][this.templateName]({
					tabsData: this.tabsData,
					selectedIndex: this.selectedIndex,
				})
			)
		},

		onTabSelected: function(event) {
			event.stopPropagation()
			var dataUrl = $(event.currentTarget).attr("data-url")

			dataUrl &&
				window.routerInstance.navigate(dataUrl, {
					trigger: true,
				})
		},

		onLogoClick: function(event) {
			window.routerInstance.navigate("", {
				trigger: true,
			})
		},

		onGetInfoClick: function(event) {
			this.closeMenu()
			window.routerInstance.navigate("get-info", {
				trigger: true,
			})

			window.location.reload()
		},

		showMenu: function() {
			this.$el
				.find(".menu-tab")
				.removeClass("hide")
				.addClass("show")
			this.$el
				.find(".header-overlay")
				.removeClass("hide")
				.addClass("show")
		},

		closeMenu: function() {
			this.$el
				.find(".menu-tab")
				.removeClass("show")
				.addClass("hide")
			this.$el
				.find(".header-overlay")
				.removeClass("show")
				.addClass("hide")
		},

		showSubMenu: function(event) {
			var dataId = $(event.currentTarget).attr("data-id")
			this.$el
				.find("[data-id=" + dataId + "]")
				.find(".sub-menu")
				.css({
					display: "block",
				})
		},

		hideSubMenu: function(event) {
			var dataId = $(event.currentTarget).attr("data-id")
			this.$el
				.find("[data-id=" + dataId + "]")
				.find(".sub-menu")
				.css({
					display: "none",
				})
		},
	})
})
