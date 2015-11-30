<?php 
	
	/*
		philthompson.co.uk 404 page	
	*/
	
	$updated = '05022015'; // cache buster
	
	include('partials/header.php');	
?>

	<div class="group section">
		<div class="inner">
			<h1 class="h h1">Oh wow, this is awkward.</h1>
			<p>
			<?php 
				switch($_GET['error']):
				
					case '401':
					case '403':
						echo 'You are not authorised to see this content&hellip;';
						break;
				
					default:
					case '404':
						echo 'Whatever it was you were looking for, could not be found&hellip;';
						break;
						
					case '500':
						echo 'An unexpected server error occurred&hellip;';
						break;
						
				endswitch;
			?>
			maybe try the <a href="/">home page</a>.
			</p>
					
		</div>
	</div>
	
<?php include('partials/footer.php');
