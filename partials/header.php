<!DOCTYPE html>
<html class="no-js" lang="en-GB">

<head>
  <meta charset="utf-8">
  <title>London Lead Front-end Developer / Web Accessibility Consultant - Phil Thompson</title>
  <script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,
    'js');
  </script>
  <meta name="viewport" content="initial-scale=1">
  <!-- Inline CSS as it's a `one-page` website and the CSS is only 4.5Kb-->
  <style>
  /**
		 * Variables
		 */
  :root {
    accent-color: #151515;
    --color-yellow: #fd2;
    --color-yellow-rgb: 255, 221, 34;
    --color-black: #151515;
    --color-black-rgb: 21, 21, 21;
    --color-white: #fff;
    --color-white-rgb: 255, 255, 255;

    --color-body-background: var(--color-yellow);
    --color-body-background-rgb: var(--color-yellow-rgb);
    --color-body-text: var(--color-black);
    --color-body-text-rgb: var(--color-black-rgb);

    --color-highlight: var(--color-white);
    --color-highlight-rgb: var(--color-white-rgb);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-body-background: var(--color-black);
      --color-body-background-rgb: var(--color-black-rgb);
      --color-body-text: var(--color-yellow);
      --color-body-text-rgb: var(--color-yellow-rgb);
    }
  }

  <?php include('assets/css/style.css');
  ?>
  </style>
  <?php if(strpos($_SERVER['HTTP_HOST'], '.co.uk') !== false): ?>
  <script>
  (function(b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
      function() {
        (b[l].q = b[l].q || []).push(arguments)
      });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
  }(window, document, 'script', 'ga'));
  ga('create', 'UA-418350-4');
  ga('send', 'pageview');
  </script>
  <?php endif; ?>
  <?php

	// timestamp of when the Javascript was last updated.
	// we'll use this to cache bust the js files
	$updated_js = filemtime($_SERVER['DOCUMENT_ROOT'] . '/assets/js/philthompsoncouk.min.js');

	?>
  <script defer src="/assets/js/philthompsoncouk.min.<?php echo $updated_js; ?>.js"></script>
</head>

<body>