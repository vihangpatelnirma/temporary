
define('utils', [], function() {
	
	var obj = {

		loadCSS : function(url) {

			var link = document.createElement("link");
		    link.type = "text/css";
		    link.rel = "stylesheet";
		    link.href = url;
		    document.getElementsByTagName("head")[0].appendChild(link);

		}
	};

 	window.utils = obj;	

 	return obj;

})