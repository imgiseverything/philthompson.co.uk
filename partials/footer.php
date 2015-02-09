</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/vendor/jquery-2.1.3.min.js"><\/script>')</script>
<?php 
	// In production use a minified JS file
	if(strpos($_SERVER['HTTP_HOST'], '.co.uk') !== false): 
?>
	<script src="/js/philthompsoncouk.<?php echo $updated; ?>.min.js" async></script>
<?php else: ?>
	<script src="/js/philthompsoncouk.js" async></script>
<?php endif; ?>
</body>
</html>