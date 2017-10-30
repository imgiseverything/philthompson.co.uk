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

		/**
		 * @param {object}
		 * Parent config object
		 */
		config: window.PT.config,

		/**
		 * @param {object}
		 * Parent/containing DOM element of the slides
		 */
		container:	document.querySelector('.js-slides'),

		/**
		 * @param {array}
		 * DOM Element - each individual slide
		 */
		slides: document.querySelectorAll('.js-slide'),

		/**
		 * navigate
		 * Click a link and show the correct slide (use CSS to animate in the slide)
		 *
		 * @return {void}
		 */
		navigate: function(){
			var self = window.PT.slides;
			var $nav = self.container.querySelector('.slides-nav');
			var $activeNav;
			var $activeSlide;
			var classes = self.config.classes;

			self.container.querySelectorAll('.js-slides-nav__link').forEach(function(element){
				element.addEventListener('click', function(e){
					e.preventDefault();
					$activeNav = e.currentTarget;
					$activeSlide = self.container.querySelector('[data-slide-number="' + $activeNav.getAttribute('data-slide-id') + '"]');

					if($activeNav.classList.contains(classes.active) !== true){

						// Remove active class from non-active slides
						self.container.querySelectorAll('.js-slide').forEach(function(element){
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
		},

		/**
		 * buildNavigation
		 * Create a clickable <ul> for the slides
		 *
		 * @return {void}
		 */
		buildNavigation: function(){
			var self = window.PT.slides;
			var html = {
				container: '<nav class="slides-nav js-slides-nav">{{BODY}}</nav>',
				body: ''
			};
			var classes = self.config.classes;
			var isActiveClass = '';
			var isAriaExpanded = '';

			self.slides.forEach(function(ignore, index){
				isActiveClass = (index === 0) ? classes.active : '';
				isAriaExpanded = (index === 0) ? 'true' : 'false';
				html.body += '<button type="button" class="ir js-slides-nav__link slides-nav__button ' + isActiveClass + '" aria-expanded="' + isAriaExpanded + '" aria-controls="slide' + (index + 1) + '" data-slide-id="' + (index + 1) + '">Show slide ' + (index + 1) + '</button>';
			});

			self.container.innerHTML = html.container.replace('{{BODY}}', html.body) + self.container.innerHTML;

			// Now make them clickable
			self.navigate();
		},

		/**
		 * init
		 * Function to run onload and call other functions
		 *
		 * @return {void}
		 */
		init: function(){
			var self = window.PT.slides;

			if(self.slides.length === 0){
				return;
			}

			self.buildNavigation();
		}
	};

	window.PT.slides.init();

}());
