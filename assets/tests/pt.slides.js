describe("pt.slides", function() {

	var	$slides = jQuery('<div class="group quotes js-slides">' +
	'<div class="quote active js-slide" data-slide-number="1"></div>' +
	'<div class="quote js-slide" data-slide-number="2"></div>' +
	'</div>'),
			$nav = null,
			$navLinks;

	// Add HTML to body and run slides script (to create carousel)
	beforeAll(function() {
    $slides.appendTo('body');
    window.PT.slides.init();
    $nav = jQuery('.slides-nav');
  });

	// Remove the slides HTML after the tests end
  afterAll(function() {
    $slides.remove();
  });

	// Carousel Nav should be built
	it("should be an object", function() {
    expect(typeof $nav).toBe('object');
  });

  // There should be X carousel Nav buttons for X slides. 5 slides = 5 buttons etc
  it("should be the same as number of slides", function() {
    var slidesLength = $slides.find('js-slide').length;
    var buttonsLength = $nav.find('.slides-nav__link').length;
    expect(buttonsLength).toBe(slidesLength);
  });
});
