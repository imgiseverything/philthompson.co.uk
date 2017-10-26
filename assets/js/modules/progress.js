/**
 *	Progress bar on scroll scripting
 *	@author	Phil Thompson
 */

/*jslint browser: true, devel: true, white: true */

// Create a global object we can reference
window.PT = window.PT || {};

(function () {

	"use strict";

	window.PT.progress = {

		config: window.PT.config,

		$progress: document.querySelector('.js-progress-bar'),
		throttleSpeed: 150, // in ms

		init: function(){

			var self = this;

			if(self.$progress === undefined || self.$progress === null){
				return;
			}

			if(window.addEventListener){
				window.addEventListener('scroll', throttle(function (event) {
					self.animate();
				}, self.throttleSpeed), false);
			}
		},

		animate: function(){

			var self = this,
					// Offset(Scrolled position) from top of document
					scrollOffset = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
					// Document height
		      documentHeight = document.documentElement.scrollHeight,
	        // Viewport (screen) height
	        viewportHeight = document.documentElement.clientHeight,
	        scrollPercent = (scrollOffset / (documentHeight - viewportHeight) ) * 100;

			self.$progress.setAttribute('value', scrollPercent);
		}
	};

	window.PT.progress.init();

}());