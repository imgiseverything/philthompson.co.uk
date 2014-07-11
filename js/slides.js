/**
 *	Slides/Carousel scripting
 *	@author	Phil Thompson
 */

/*jslint browser: true, devel: true, white: true, todo: true */

/*global requestAnimationFrame: true, Modernizr: true, smoothScroll: true */


// Create a global object we can reference
window.PT = window.PT || {};

(function ($) {

	"use strict";

	window.PT.slides = {
		
		$container:	$('[data-slides]'),
		$slides: 	$('[data-slide]'),
		config: 	window.PT.config,
		
		init: function(){
			var self = this;
			if(self.$slides.length === 0){
				return;
			}
			
			self.buildNavigation();
			self.navigate();
			
		},
		
		// Create a clickable <ul> for the slides
		buildNavigation: function(){
			var self = this,
				html = {
					container: '<ul class="slides-nav">{{BODY}}</ul>',
					body: ''
				},
				classes = self.config.classes,
				i,
				slidesLength = self.$slides.length;
			
			for(i = 0; i < slidesLength; i++){
				html.body += '<li><a href="#" data-slide-nav data-slide-id="' + (i + 1) + '" class="ir">Show slide ' + (i + 1) + '</a></li>';
			}
			
			self.$container.append(html.container.replace('{{BODY}}', html.body));			
			$('[data-slide-nav]').eq(0).addClass(classes.active);
			
			// Begin auto slide
			self.autoInit();
		},
		
		// Click a link and show the correct slide (use CSS to animate in the slide)
		navigate: function(){
			var self = this,
				$nav = $('.slides-nav'),
				$activeNav,
				classes = self.config.classes;
			
			$('[data-slide-nav]').click(function(e){
				e.preventDefault();
				$activeNav = $(this);
				if($activeNav.hasClass(classes.active) !== true){
					// Rmeove active class from non-active sldies
					self.$container.find('.' + classes.active).removeClass(classes.active);
					$nav.find('.' + classes.active).removeClass(classes.active);
					// Add active class to newly active slide
					$activeNav.addClass(classes.active);
					$('[data-slide-number="' + $activeNav.attr('data-slide-id') + '"]').addClass(classes.active);
				}								
			});
		},
		
		// Init the auto clicking of the sldies
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
				$next = $('[data-slide-nav]').eq(0);
			}
			
			$next.click();
		}		
				
	};
	
	window.PT.slides.init();

}(jQuery));