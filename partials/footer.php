<progress class="progress-bar js-progress-bar" value="0" max="100"></progress>

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/assets/js/vendor/jquery-2.1.3.min.js"><\/script>')</script>
<?php 
	// In production use a minified JS file
	if(strpos($_SERVER['HTTP_HOST'], '.co.uk') !== false): 
?>
	<script src="/assets/js/philthompsoncouk.<?php echo $updated; ?>.min.js" async></script>
<?php else: ?>
	<script src="/assets/js/philthompsoncouk.js" async></script>
<?php endif; ?>
</body>
</html>