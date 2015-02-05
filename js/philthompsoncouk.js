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
	
};;/**
 *	Global scripting
 *	@author	Phil Thompson philthompson.co.uk / imgiseverything.co.uk
 */

/*jslint browser: true, devel: true, white: true, todo: true */

/*global smoothScroll: true */


// Create a global object we can reference
window.PT = window.PT || {};

(function ($) {

	"use strict";

	window.PT = {

		config: {
			smoothScrollSpeed: 1500,
			breakpoints: {
				desktop: 1025,
				ipadLandscape: 1204,
				ipadPortrait: 768
			},
			classes: {
				active: 'active'
			}
		},
		
		// Functions to run onload - note we don't need $(document).ready(); because we include this script before </body>
		init: function(){
			
			var self = this;
			self.toggle.init();
			self.pageLinks.init();
			self.socialShare();
						
			self.fullHeightSections.init();
		},
		
		fullHeightSections: {
		
			$sections: $('.section'),
			winHeight: parseInt($(window).height(), 10),

			init: function(){
				var self = this;
				self.$sections = $('.section');
				
				self.setHeight(self.winHeight);
				
				$(window).resize(function(){
					self.setHeight(parseInt($(window).height(), 10));
				});
				
			},
			
			setHeight: function(winHeight){
				var self = this,
					$sections = self.$sections,
					$section = {},
					winWidth = parseInt($(window).width(), 10);
					
				// On desktop, set the height of each section to be one screen
				// On smaller screens we want them the height they are
				if(winWidth >= window.PT.config.breakpoints.desktop){
					$sections.css('height', winHeight).css('min-height', '');
				} else{
					//$sections.css('min-height', winHeight).css('height', '');
					$sections.css('height', '');
				}	
				
				// But if a section is longer than the window height - then justr left it be
				$sections.each(function(){	
					$section = $(this);
					if(parseInt($section.height(), 10) > winHeight){
						$section.css('min-height', '');
					}
				});
				
				// First section is always full height
				$sections.eq(0).css('height', winHeight);
				
				
			}
			
		},
		
		// Allow an element to be shown/hidden with the click of a button
		// Note: we're just gonna toggle classes with JS and we'll use CSS to display/animate stuff
		toggle: {
			
			$buttons: $('a[data-toggle]'),
			animationEnd: 'webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',
			transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
		
			init: function(){
			
				var self = this,
					$buttons = self.$buttons,
					$button,
					toggleClass;
					
				if($buttons.length === 0){
					return;
				}
				
				$buttons.each(function(){
					$(this).find('.b').attr('data-inactive-wording', $(this).text());
				});
					
				$(document).on('click', 'a[data-toggle]', function(e){
					e.preventDefault();
					
					//location.hash = '#' + this.href.split('#')[1];
					
					$button = $(this);
					toggleClass = $button.data('toggle-active-class');
					if($('body').hasClass(toggleClass) && ($button.hasClass('button--see-more') || $button.hasClass('button--see-less'))){
						setTimeout(function(){
							$('body').removeClass(toggleClass);	
						}, window.PT.config.smoothScrollSpeed);
					} else{
						$('body').toggleClass(toggleClass);	
					}
					self.wording($button, toggleClass);
				});
			
			},
			
			// Change the wording on the toggle button to indicate that it's active
			wording: function($button, toggleClass){
			
				var wording = {
					active: $button.find('.b').data('active-wording'),
					inactive: $button.find('.b').data('inactive-wording')
				};
				
				if(wording.active === undefined || wording.active.length === 0){
					return;
				}

				if($('body').hasClass(toggleClass)){
					$button.find('.b').text(wording.active).attr('data-hover', wording.active);
				} else{
					$button.find('.b').text(wording.inactive).attr('data-hover', wording.inactive);
				}
				
			}
			
		},
		
		// Smoothly scroll to page (#) links
		pageLinks: {

			elementOffset: 25,
			config: window.PT.config,
			
			init: function(){
		
				var self = this;
					
				$(document).on('click', 'a', function(e){
					if($('#' + $(this)[0].href.split('#')[1]).length > 0 && $(this).hasClass('no-scroll') !== true){
						e.preventDefault();
						self.scroll($('#' + $(this)[0].href.split('#')[1]), $(this));
					}
				});

			},
			
			scroll: function($element, $button){
				var self = this,
					elementOffset = ($button.data('scroll-offset') !== undefined) ? parseInt($button.data('scroll-offset'), 10) : self.elementOffset;
				smoothScroll($element.offset().top - elementOffset, window.PT.config.smoothScrollSpeed);
			}

		},
		
		// Open social share (e.g. Twitter/Facebook) links in a new small window
		socialShare: function(){
		
			var newWindow,
				url,
				height = 340,
				width = 675,
				left = (screen.width/2)-(width/2),
				top = (screen.height/2)-(height/2);

			$('a[data-share]').click(function(e){
				e.preventDefault();
				
				url = $(this).attr('href');
				newWindow = window.open(url, 'Share', 'height=' + height + ',width=' + width + ',top=' + top + ',left=' + left);
				if(window.focus){
					newWindow.focus();
				}	
			});
		}

	};
	
	window.PT.init();

}(jQuery));;/**
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
		
		$container:	$('[data-slides]'),
		$slides: 	$('[data-slide]'),
		config: 	window.PT.config,
		
		resize: {
			timer: null,
			delay: 300
		},
		
		init: function(){
			var self = this;
			if(self.$slides.length === 0){
				return;
			}
			
			self.buildNavigation();
			self.navigate();
			self.height();

			
			// After a window resize, reset the height of the menu. 
			// Only do it after a timeout so it's not called too often
			$(window).resize(function(){
				clearTimeout(self.resize.timer);
				self.resize.timer = setTimeout(function(){ 
					self.height();
				}, self.resize.delay);
			});
			
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
				$next = $('[data-slide-nav]').eq(0);
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