
define('router', 

['backbone', 'error'] ,

function(Backbone, ErrorPage){

	window.contentInstance = null;

	var Router = Backbone.Router.extend({


		routes: {
				"": "home",
				"medical-cannabis/:subType" : "medInfo",
				"team/:subType" : "team",
				"patients/:subType" : "patients",
				"contact-us": "contactUs",
				"prescriptions/:subType" : "prescription",
				"research/:subType" : "research",
				"get-info" : "getInfo",
				"admin/dashboard" : "dashboard",
				"error" : "error"
		},
			
		home: function(){
			require(['homepage'], function(Homepage) {
				window.contentInstance = new Homepage({
					model : window.mainModel
				}); 
			})	 
		},

		team: function(subType) {
			require(['team'], function(Team) {
				window.contentInstance = new Team({
					model : window.mainModel,
					subType : subType
				}); 
			})
			
		},

		patients: function(subType) {
			require(['patients'],function(Patients) {
				window.contentInstance = new Patients({
					model : window.mainModel,
					subType : subType
				});
			});
		},

		prescription : function(subType) {
			require(['prescription'], function(Prescription){
				window.contentInstance = new Prescription({
					model : window.mainModel,
					subType : subType
				});
			})
			
		},

		research : function(subType) {
			require(['research'], function(Research){
				window.contentInstance = new Research({
					model : window.mainModel,
					subType : subType
				});
			})
			
		},

		medInfo : function(subType) {
			require(['medinfo'], function(MedInfo){
				window.contentInstance = new MedInfo({
					model : window.mainModel,
					subType : subType
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

		getInfo: function() {
			require(['getinfo'], function(GetInfo){
				window.contentInstance = new GetInfo();			
			})
		},

		dashboard: function() {
			require(['dashboard'], function(Dashboard){ 
				window.contentInstance = new Dashboard();
			})
		},

		error: function() {
			window.contentInstance = new ErrorPage();
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