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

		/**
		 * @var {object}
		 * Parent config object
		 */
		config: window.PT.config,

		/**
		 * @var {object}
		 * The progress bar DOM element
		 */
		progressBar: document.querySelector('.js-progress-bar'),

		/**
		 * @var {int}
		 * Every N milliseconds we will need to throttle one of our functions
		 */
		throttleSpeed: 300,

		/**
		 * animate
		 *
		 * @return {void}
		 */
		animate: function(){
			var self = window.PT.progress;
			// Offset(Scrolled position) from top of document
			var topParent =(document.documentElement || document.body.parentNode || document.body);
			var scrollOffset = (window.pageYOffset !== undefined) ? window.pageYOffset : topParent.scrollTop;
			// Document height
			var documentHeight = document.documentElement.scrollHeight;
			// Viewport (screen) height
			var viewportHeight = document.documentElement.clientHeight;
			var scrollPercent = (scrollOffset / (documentHeight - viewportHeight) ) * 100;

			self.progressBar.setAttribute('value', scrollPercent);
		},

		/**
		 * init
		 * Function to run onload and call other functions
		 *
		 * @return {void}
		 */
		init: function(){
			var self = window.PT.progress;

			if(self.progressBar === undefined || self.progressBar === null){
				return;
			}

			// On the scroll event we apply our animation BUT we throttle this
			// call otherwise it could be too slow/kill the browser
			if(window.addEventListener){
				window.addEventListener('scroll', throttle(function () {
					self.animate();
				}, self.throttleSpeed), false);
			}
		}
	};

	window.PT.progress.init();

}());
