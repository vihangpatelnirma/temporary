
define('team', 
['backbone','templates/reviews'],
function(Backbone) {

	utils.loadCSS('/styles/reviews.css');

	return Backbone.View.extend({

		el : '#main-content',

		tabIndex : 1,

		templateName : 'templates/reviews.handlebars',

		initialize : function() {

			this.model.set('selectedTab', this.tabIndex);
			this.render();
		},

		render : function() {
			this.$el.html(window.JST[this.templateName]());		
		}
	})

});