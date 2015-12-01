<progress class="progress-bar js-progress-bar" value="0" max="100"></progress>

<script>
	// Request and load scripts after page load (IE9+)
	function loadPTScripts(){

		// jQuery
		var scriptjQuery = document.createElement('script'),
				scriptPT = document.createElement('script'),
				scriptSVG4everybody = document.createElement('script');

		scriptjQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
		document.body.appendChild(scriptjQuery);

		// Load scripts reliant on jQuery
		scriptjQuery.onload = function(){
			scriptPT.src = '/assets/js/philthompsoncouk.<?php echo $updated; ?>.min.js';
			document.body.appendChild(scriptPT);
		}

		// SVG4everybody - get IE9-11 to allow external SVG sprites
		scriptSVG4everybody.src = '/assets/js/vendor/svg4everybody.js';
		document.body.appendChild(scriptSVG4everybody);
		scriptSVG4everybody.onload = function(){
			svg4everybody(); // run it now or whenever you are ready	
		}
	}

	if(window.addEventListener){
		window.addEventListener('load', loadPTScripts, false);
	}
</script>
</body>
</html>
