/**
 *	Global scripting
 *	@author	Phil Thompson philthompson.co.uk
 */

/** Create a global object we can reference */
window.PT = window.PT || {};

(function () {
	"use strict";

	window.PT = {
		config: {
			smoothScrollSpeed: 1500,
			breakpoints: {
				desktop: 1025,
				ipadLandscape: 1024,
				ipadPortrait: 768,
			},
			classes: {
				active: "active",
			},
		},
	};
})();
