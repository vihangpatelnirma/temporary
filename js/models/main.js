

define('mainmodel', ['backbone'] ,
	 function(Backbone) {

		var MainModel = Backbone.Model.extend({
			
			defaults : {
				selectedTab : 0
			},

			initialize : function() {

				
			}

		});

		return MainModel;
});