
define('contactus', 
	['backbone', 'templates/contactus'],
	function(Backbone) {
 
		utils.loadCSS('/styles/contactus.css');

		return Backbone.View.extend({

			el : '#main-content',

			tabIndex : 6,

			templateName : 'templates/contactus.handlebars',

			initialize : function() {

				this.model.set('selectedTab', this.tabIndex);				
				this.render();
			},			

			render : function() {
				// render template
				this.$el.html(window.JST[this.templateName]());		
			}
		})

	});