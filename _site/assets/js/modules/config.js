/**
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

}());