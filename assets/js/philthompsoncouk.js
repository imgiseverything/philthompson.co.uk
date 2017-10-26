// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());;// Scroll user down the page
var smoothScroll = function(xCoordParam, scrollSpeed){
	
	"use strict";
		
	var xCoord = xCoordParam || 0;

	if(scrollSpeed > 1){
		jQuery('html, body').stop(true, true).animate({
			scrollTop: xCoord
		}, scrollSpeed);
	} else{
		jQuery(window).scrollTop(xCoord);
	}
	
};;function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};if(document.addEventListener){
	document.addEventListener("touchstart", function() { "use strict"; console.log(''); },false);
};/**
 *	Global scripting
 *	@author	Phil Thompson philthompson.co.uk / imgiseverything.co.uk
 */

/*jslint browser: true, devel: true, white: true */

/*global smoothScroll, window */


// Create a global object we can reference
window.PT = window.PT || {};

(function () {

	"use strict";

	window.PT = {

		config: {
			smoothScrollSpeed: 1500,
			breakpoints: {
				desktop: 1025,
				ipadLandscape: 1024,
				ipadPortrait: 768
			},
			classes: {
				active: 'active'
			}
		}
	};

}());;/**
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

}());;/**
 *	Slides/Carousel scripting
 *	@author	Phil Thompson
 */

/*jslint browser: true, devel: true, white: true */

/*global smoothScroll, window */


// Create a global object we can reference
window.PT = window.PT || {};

(function () {

	"use strict";

	window.PT.slides = {

		$container:	document.querySelector('.js-slides'),
		$slides: document.querySelectorAll('.js-slide'),
		config: window.PT.config,

		throttleSpeed: 300,

		init: function(){
			var self = this;

			if(self.$slides.length === 0){
				return;
			}

			self.buildNavigation();

		},

		// Create a clickable <ul> for the slides
		buildNavigation: function(){
			var self = this;
			var html = {
					container: '<nav class="slides-nav js-slides-nav">{{BODY}}</nav>',
					body: ''
		  };
			var classes = self.config.classes;
			var i;
			var slidesLength = self.$slides.length;
			var isActiveClass = '';
			var isAriaExpanded = '';

			for(i = 0; i < slidesLength; i++){
				isActiveClass = (i === 0) ? classes.active : '';
				isAriaExpanded =  (i === 0) ? 'true' : 'false';
				html.body += '<button type="button" class="ir js-slides-nav__link slides-nav__button ' + isActiveClass + '" aria-expanded="' + isAriaExpanded + '" aria-controls="slide' + (i + 1) + '" data-slide-id="' + (i + 1) + '">Show slide ' + (i + 1) + '</button>';
			}

			self.$container.innerHTML =  html.container.replace('{{BODY}}', html.body) + self.$container.innerHTML;

			// Now make them clickable
			self.navigate();
		},

		// Click a link and show the correct slide (use CSS to animate in the slide)
		navigate: function(){
			var self = this;
			var $nav = self.$container.querySelector('.slides-nav');
			var $activeLinks = {};
			var $activeNav;
			var $activeSlide;
			var classes = self.config.classes;

      self.$container.querySelectorAll('.js-slides-nav__link').forEach(function(element){
        element.addEventListener('click', function(e){
  				e.preventDefault();
  				$activeNav = e.currentTarget;
  				$activeSlide = self.$container.querySelector('[data-slide-number="' + $activeNav.getAttribute('data-slide-id') + '"]');

  				if($activeNav.classList.contains(classes.active) !== true){

  					// Remove active class from non-active slides
  					self.$container.querySelectorAll('.js-slide').forEach(function(element){
  					  element.setAttribute('aria-hidden', 'true');
    					element.classList.remove(classes.active);
    				});

            // Remove active class from non-active nav buttons
            $nav.querySelectorAll('.' + classes.active).forEach(function(element){
    					element.setAttribute('aria-expanded', 'false');
    					element.classList.remove(classes.active);
    				});

  					// Add active class to newly active slide
  					$activeNav.classList.add(classes.active);
  					$activeNav.setAttribute('aria-expanded', 'true');

  					$activeSlide.setAttribute('aria-hidden', 'false');

  					$activeSlide.classList.add(classes.active);
  				}

  			});
			});

		}
	};

	window.PT.slides.init();

}());