/**
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
				ipadLandscape: 1024,
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

}(jQuery));