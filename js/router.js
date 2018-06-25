
define('router', 

['backbone', 'error'] ,

function(Backbone, ErrorPage){

	window.contentInstance = null;

	var Router = Backbone.Router.extend({


		routes: {
				"": "home",			
				"contact-us": "contactUs",
				"error" : "error"
		},
			
		home: function(){
			require(['homepage'], function(Homepage) {
				window.contentInstance = new Homepage({
					model : window.mainModel
				}); 
			})	 
		},

		contactUs: function(){
			require(['contactus'], function(ContactUs){
				window.contentInstance = new ContactUs({
					model : window.mainModel
				});
			})
			
		},

		execute : function(callback, args, name) {
			$("body").animate({
				scrollTop : 0
			});
			ga('send', 'pageview', location.pathname);
			if (callback) callback.apply(this, args); //this must be called to pass to next route
		}
		
	});

	return Router;

});