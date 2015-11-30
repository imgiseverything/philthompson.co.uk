/**
 *	Slides/Carousel scripting
 *	@author	Phil Thompson
 */

/*jslint browser: true, devel: true, white: true, todo: true */

/*global smoothScroll: true */


// Create a global object we can reference
window.PT = window.PT || {};

(function ($) {

	"use strict";

	window.PT.slides = {
		
		$container:	$('.js-slides'),
		$slides: 	$('.js-slide'),
		config: 	window.PT.config,
		
		throttleSpeed: 300,
		
		init: function(){
			var self = this;
			
			if(self.$slides.length === 0){
				return;
			}
			
			self.buildNavigation();
			self.navigate();
			self.height();

			
			// After a window resize, reset the height of the slides. 
			// Use a throttle so it's not called too often
			if(window.addEventListener){
				window.addEventListener('resize', throttle(function (event) {
					self.height();
				}, self.throttleSpeed), false);
			}
			
		},
		
		// Create a clickable <ul> for the slides
		buildNavigation: function(){
			var self = this,
				html = {
					container: '<ul class="slides-nav js-slides-nav">{{BODY}}</ul>',
					body: ''
				},
				classes = self.config.classes,
				i,
				slidesLength = self.$slides.length,
				isActiveClass = '';
			
			for(i = 0; i < slidesLength; i++){
				isActiveClass = (i === 1) ? classes.active : '';
				html.body += '<li><a href="#" class="ir js-slides-nav__link ' + isActiveClass + '" data-slide-id="' + (i + 1) + '">Show slide ' + (i + 1) + '</a></li>';
			}
			
			self.$container.append(html.container.replace('{{BODY}}', html.body));			
			
			// Begin auto slide
			//self.autoInit();
		},
		
		// Click a link and show the correct slide (use CSS to animate in the slide)
		navigate: function(){
			var self = this,
				$nav = $('.slides-nav'),
				$activeNav,
				classes = self.config.classes;
			
			$(document).on('click', '.js-slides-nav__link', function(e){
				e.preventDefault();
				$activeNav = $(this);
				if($activeNav.hasClass(classes.active) !== true){
					// Remove active class from non-active sldies
					self.$container.find('.' + classes.active).removeClass(classes.active);
					$nav.find('.' + classes.active).removeClass(classes.active);
					// Add active class to newly active slide
					$activeNav.addClass(classes.active);
					$('[data-slide-number="' + $activeNav.attr('data-slide-id') + '"]').addClass(classes.active);
				}								
			});
		},
		
		// Init the auto clicking of the slides
		autoInit: function(){
			var self = this;
			self.config.delay = 5000;
			self.hoverPause();	
			self.auto();
		},
		
		// When user hovers over the slides pause them (as they will likely be looking to click (or read) something on them)
		hoverPause: function(){
			var self = this;
				
			self.$container.hover(function(){
				clearInterval(self.slideInterval);
			}, function(){
				self.auto();
			});
		},
		// Every x seconds click the next slide
		auto: function(){
			var self = this;
			self.slideInterval = setInterval(
				function(){
					self.next();
				}, self.config.delay
			);		
		},
		
		// Show the next slide (work out which is next and click the relevant nav link)
		next: function(){
			var self = this,
				$nav = $('.slides-nav'),
				classes = self.config.classes,
				$activeNav = $nav.find('.' + classes.active),
				$next = $activeNav.closest('li').next().find('a');
				
			if($next.length === 0){
				$next = $('.js-slides-nav__link').eq(0);
			}
			
			$next.click();
		},		
		
		
		// Ensure slides always take up the space they need
		height: function(){
			var self = this,
				height = 0,
				highest = 0,
				winHeight = parseInt($(window).height(), 10);
				
			self.$slides.each(function(){
				height = parseInt($(this).outerHeight(), 10);
				//console.log(height);
				if(height > highest){
					highest = height;
				}
			});
			
			highest = highest * 1.5;
			
			self.$container.closest('.inner').css('min-height', highest + 'px');
				
		}
				
	};
	
	window.PT.slides.init();

}(jQuery));