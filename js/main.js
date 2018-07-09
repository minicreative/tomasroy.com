// Variables ===================================================================

// Initialization ==============================================================

// Run functions when document is ready
$(document).ready(function () {
	setRandomCornerImage();
	initializeGoogleAnalytics();
	handleURLParameters();
});

// Functions ===================================================================

var setRandomCornerImage = function () {
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

var handleURLParameters = function () {
	var URLParameters = getURLParameters();
	if (URLParameters.tag) filterByTag(URLParameters.tag);
};

var getURLParameters = function () {
	var paramString = window.location.href.slice( window.location.href.indexOf( '?' ) + 1 );
	var paramArray = paramString.split("&");
	var parameters = {};
	for (var i in paramArray) {
		var parameter = paramArray[i];
		var parts = parameter.split("=");
		parameters[parts[0]] = parts[1];
	}
	return parameters;
}

var filterByTag = function (tag) {
	$(".tagged").each(function () {
		var item = $(this);
		if (!item.hasClass(tag)) item.css("display", "none");
	});
	$(".tags").each(function () {
		$(this).find("span").each(function () {
			var span = $(this);
			if (span.hasClass(tag)) span.addClass("active");
		})
	});
};

// Plugins ======================================================================

/* PrognRoll | https://mburakerman.github.io/prognroll/ | @mburakerman | License: MIT */
$.fn.prognroll = function(options) {

	var settings = $.extend({
		height: 5, //Progress bar height
		color: "#50bcb6", //Progress bar background color
		custom: false //If you make it true, you can add your custom div and see it's scroll progress on the page.
	}, options);

	return this.each(function() {
		if ($(this).data('prognroll')) {
			return false;
		}
		$(this).data('prognroll', true);

		var $span = $("<span>", {
			class: "bar"
		});
		$("body").prepend($span);

		$span.css({
			position: "fixed",
			top: 0,
			left: 0,
			width: 0,
			height: settings.height,
			backgroundColor: settings.color,
			zIndex: 9999999
		});

		if (settings.custom === false) {

			$(window).scroll(function(e) {
				e.preventDefault();
				var windowScrollTop = $(window).scrollTop();
				var windowHeight = $(window).outerHeight();
				var bodyHeight = $(document).height();

				var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

				$(".bar").css("width", total + "%");
			});

		} else {

			$(this).scroll(function(e) {
				e.preventDefault();
				var customScrollTop = $(this).scrollTop();
				var customHeight = $(this).outerHeight();
				var customScrollHeight = $(this).prop("scrollHeight");

				var total = (customScrollTop / (customScrollHeight - customHeight)) * 100;

				$(".bar").css("width", total + "%");
			});

		}

		/* Get scroll position on on page load */
		$(window).on('hashchange', function(e) {
			e.preventDefault();
			console.log($(window).scrollTop());
		});
		$(window).trigger('hashchange');

		var windowScrollTop = $(window).scrollTop();
		var windowHeight = $(window).outerHeight();
		var bodyHeight = $("body").outerHeight();

		var total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

		$(".bar").css("width", total + "%");
		/* Get scroll position on on page load */

	});
};