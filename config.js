
require.config({

	waitSeconds : 30,

	paths : {
		jquery : '/node_modules/jquery/dist/jquery.min',
		backbone : '/node_modules/backbone/backbone-min',
		underscore  : '/node_modules/underscore/underscore-min',

		appconfig : 'appconfig',
		utils : 'js/utils',
		carousel : 'js/carousel',

		mainmodel : 'js/models/main',

		getinfo : 'js/views/getinfo',

		templates : 'templates',
		main : 'js/views/main',
		router : 'js/router',
		header : 'js/views/header',
		footer : 'js/views/footer',
		homepage : 'js/views/homepage',
		medinfo : 'js/views/medinfo',
		patients : 'js/views/patients',
		team : 'js/views/team',
		research : 'js/views/research',
		contactus : 'js/views/contactus',
		error: 'js/views/error',
		prescription : 'js/views/prescription',
		dashboard : 'js/views/dashboard',
		reviews: 'js/views/reviews'


	},

	shim: {
		backbone: {
			deps: ["jquery", "underscore"]
		}
	}

});

require(['main'] , function(mainInstance) {
	console.log('App is bootstrapped');
});