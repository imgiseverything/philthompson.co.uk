/**
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