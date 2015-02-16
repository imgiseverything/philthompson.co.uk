/**
 *	Progress bar on scroll scripting
 *	@author	Phil Thompson
 */

/*jslint browser: true, devel: true, white: true, todo: true */

/*global smoothScroll: true */


// Create a global object we can reference
window.PT = window.PT || {};

(function ($) {

	"use strict";

	window.PT.progress = {
		
		config: window.PT.config,
		
		$progress: $('[data-js-progress-bar]'),
		throttleSpeed: 100, // in ms
		
		init: function(){
			
			var self = this;
			
			if(self.$progress.length === 0){
				return;	
			}	
			
			$(window).scroll(
				throttle(function (event) {
					self.animate();
				}, self.throttleSpeed)
			);
			
		},
		
		animate: function(){
			var self = this,
				s = $(window).scrollTop(),
		        d = $(document).height(),
		        c = $(window).height(),
		        scrollPercent = (s / (d-c)) * 100;
		
		   self.$progress.attr('value', scrollPercent);
		}
		
		
				
	};
	
	window.PT.progress.init();

}(jQuery));