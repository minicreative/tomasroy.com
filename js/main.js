// Variables ===================================================================

// Initialization ==============================================================

// Run functions when document is ready
$(document).ready(function () {
	setCornerImage();
	initializeGoogleAnalytics();
});

// Run function again on load & resize
$(window).on('resize', function () {
	
});

var setCornerImage = function () {
	var i = Math.floor(Math.random() * Math.floor(5));
	var cornerClass = "image-"+i;
	$("#corner").addClass(cornerClass);
};

var initializeGoogleAnalytics = function () {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-10868878-53');
};