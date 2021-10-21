<progress aria-hidden="true" class="progress-bar js-progress-bar" value="0" max="100"></progress>

<?php

	$updated_js = filemtime($_SERVER['DOCUMENT_ROOT'] . '/assets/js/philthompsoncouk.min.js');

?>
<script>
// Request and load scripts after page load (IE9+)
function loadPTScripts() {
  // jQuery
  var scriptPT = document.createElement('script');
  var scriptSVG4everybody = document.createElement('script');
  // Load main script
  scriptPT.src = '/assets/js/philthompsoncouk.min.<?php echo $updated_js; ?>.js';
  document.body.appendChild(scriptPT);
  // SVG4everybody - get IE9-11 to allow external SVG sprites
  scriptSVG4everybody.src = '/assets/js/vendor/svg4everybody.js';
  document.body.appendChild(scriptSVG4everybody);
  scriptSVG4everybody.onload = function() {
    svg4everybody(); // run it now or whenever you are ready
  }
}
if (window.addEventListener) {
  window.addEventListener('load', loadPTScripts, false);
}
</script>
</body>

</html>