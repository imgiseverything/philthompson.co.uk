// Scroll user down the page
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
	
};