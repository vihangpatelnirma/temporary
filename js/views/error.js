
define('error', 
	['backbone'],
	function(Backbone) {

		utils.loadCSS('/styles/error.css');

		return Backbone.View.extend({

			el : '#main-content',

			templateName : 'templates/error.handlebars',

			initialize : function() {

				this.render();
			},

			render : function() {
				this.$el.html(window.JST[this.templateName]());		
			}
		})

	});