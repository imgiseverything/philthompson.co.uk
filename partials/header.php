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

  <?php // include('assets/css/style.css');
  ?>

  </style>
  <!-- Inline CSS as it's a `one-page` website and the CSS is only 4.5Kb-->
	<style>
	@charset "UTF-8";@font-face{font-family:MuseoSlab500;src:url(//philthompson.co.uk/assets/fonts/museo/Museo_Slab_500.woff2) format("woff2"),url(//philthompson.co.uk/assets/fonts/museo/Museo_Slab_500.woff) format("woff");font-weight:400;font-style:normal}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}a,abbr,acronym,applet,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,details,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,u,ul,video{border:0;font:inherit;margin:0;padding:0;vertical-align:baseline}.site-footer,article,aside,details,figcaption,figure,header,hgroup,menu,nav,section{display:block}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}:root{min-height:100%;overflow-y:scroll}body,html{height:100%}body{background:#fd2;color:#151515;margin:0 auto;width:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}::-moz-selection{background:#151515;color:#fd2}::selection{background:#151515;color:#fd2}img{height:auto;max-width:100%}iframe{max-width:100%}ol li,ul li{margin-left:1em;padding-bottom:.25em}blockquote{margin:1em 0;position:relative}blockquote:before{font-size:60px;left:-20px;position:absolute;top:-10px}@media (min-width:1024px){blockquote:before{content:"‘"}}@-webkit-keyframes fadeIn{to{opacity:1}}@keyframes fadeIn{to{opacity:1}}@-webkit-keyframes hvr-pop{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}}@keyframes hvr-pop{50%{-webkit-transform:scale(1.2);transform:scale(1.2)}}.amp,.ampersand{font-family:Baskerville,Georgia,serif;font-style:italic}a.icon:after{content:none}.form-field,.group{clear:both;float:left;position:relative;width:100%}.form-field{margin:0 0 20px}.column{float:left;position:relative;width:50%}.decoration{display:block;position:absolute}.inner{margin:0 auto;position:relative;width:90.625%}@media (min-width:480px){.inner{max-width:80%}}@media (min-width:768px){.inner{max-width:964px}}@media (min-width:1024px){.inner{width:100%}}@media (min-width:1280px){.inner{max-width:1024px}}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.ir{background-color:transparent;background-repeat:no-repeat;border:0;direction:ltr;display:block;overflow:hidden;text-align:left;text-indent:-999em;*line-height:0}.ir br{display:none}.hidden,.js .js-hidden,.no-js .no-js-hidden{display:none;visibility:hidden}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.block-list li{list-style:none;margin-left:0}.grid-list{margin-left:-20px}.grid-list li{float:left;list-style:none;margin:0 0 20px 20px}.progress-bar{background:0 0;border:0;border-radius:none;color:#151515;height:5px;left:0;position:fixed;top:0;width:100%;z-index:100}.progress-bar::-webkit-progress-bar{background:0 0}.progress-bar::-webkit-progress-value{background:#151515}.progress-bar::-moz-progress-bar{background:#151515}a{color:inherit;line-height:1;position:relative;text-decoration:none}a:after{background:rgba(21,21,21,.5);bottom:.1em;content:'';height:.05em;left:0;position:absolute;transition:all 300ms linear;width:100%}@media (min-width:1025px){a:after{background:rgba(21,21,21,.25)}}a:visited{color:rgba(21,21,21,.75)}@media (min-width:1025px){a:hover:after{background:rgba(21,21,21,.5);height:.065em}}a:active:after,a:focus:after{background:currentColor}body{font:14px MuseoSlab500,"Museo Slab",Museo,Georgia,sans-serif;line-height:1.85714}b,strong{font-family:MuseoSlab500,"Museo Slab",Museo,Georgia,sans-serif;font-weight:400}em,i{font-family:MuseoSlab500,"Museo Slab",Museo,Georgia,sans-serif;font-style:normal}.h{font-family:MuseoSlab500,"Museo Slab",Museo,Georgia,sans-serif;line-height:1.1;text-rendering:optimizeLegibility}.h1{font-size:28px;line-height:.975}.h2{font-size:24px}.h3{font-size:18px}.quotes blockquote{font-family:MuseoSlab500,"Museo Slab",Museo,Georgia,sans-serif;line-height:1.33}.quotes .quote__meta,.quotes cite{display:block;font-family:MuseoSlab500,"Museo Slab",Museo,Georgia,sans-serif;font-size:.9rem;margin-top:1em}ol,p,ul{margin-top:1em}.h{margin-top:2em}.section h1:first-of-type,.section h2:first-of-type{margin-top:0}@media (min-width:480px){.h1{font-size:36px;line-height:1.07143}.h2{font-size:28px}.h3{font-size:20px}}@media (min-width:600px){body{font-size:14px;line-height:1.6667}}@media (min-width:768px){body{font-size:28px}.h1{font-size:60px}.h2{font-size:48px}.h3{font-size:36px}}@media (min-width:1024px){body{font-size:36px}.h1{font-size:80px}.h2{font-size:48px}.h3{font-size:40px}}.section{height:auto;overflow:hidden;padding:2em 0;width:100%}.section:first-of-type{min-height:100vh}.section:first-of-type .inner{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-62.5%);-ms-transform:translate(-50%,-62.5%);transform:translate(-50%,-62.5%)}@media (min-width:480px){.section:first-of-type .inner{-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}}.section:after{-webkit-animation:fadeIn 1000ms linear forwards 1050ms;animation:fadeIn 1000ms linear forwards 1050ms;bottom:80px;font-size:10px;opacity:0;position:absolute;right:15px}@media (min-width:480px){.section:after{bottom:20px}}@media (min-width:768px){.section:after{bottom:40px;right:20px}}@media (min-width:1025px){.section:after{bottom:20px;content:'scroll \25BE'}}.section:first-of-type:after{content:'scroll \25BE'}.section:last-of-type:after{content:none}.section--alt{background:#151515;color:#fd2;margin-bottom:2.5em;margin-top:2em}@media (min-width:1025px){.section--alt{margin-bottom:2em;padding-left:0;padding-right:0;padding-top:2em}}.section--alt a{color:currentColor}.section--alt a:after{background:rgba(255,221,34,.5)}.section--alt a:visited{color:rgba(255,221,34,.8)}@media (min-width:1025px){.section--alt a:hover:after{background:rgba(255,221,34,.75)}}.section--alt .h::-moz-selection,.section--alt cite::-moz-selection,.section--alt p::-moz-selection{background:#fd2;color:#151515}.section--alt .h::selection,.section--alt cite::selection,.section--alt p::selection{background:#fd2;color:#151515}.js-slides{height:100%;position:relative}.js-slide{left:0;opacity:0;position:absolute;top:50px;width:100%}@media (min-width:768px){.js-slide{top:60px}}.js-slide.active{opacity:1;z-index:1000}@media (min-width:1025px){.js-slide.active{transition:all 1000ms linear}}.slides-nav{left:0;margin:.5em 0;padding:0;position:absolute;top:10px;z-index:1001}@media (min-width:768px){.slides-nav{top:0}}.slides-nav li{display:inline-block;margin:0;vertical-align:middle}.slides-nav li+li{margin-left:20px}@media (min-width:768px){.slides-nav li+li{margin-left:10px}}.slides-nav a{-webkit-backface-visibility:hidden;backface-visibility:hidden;background:#151515;border-radius:50%;border:2px solid #151515;display:block;height:30px;-webkit-tap-highlight-color:transparent;-webkit-transform:translateZ(0);transform:translateZ(0);transition:all,300ms,linear;width:30px}.slides-nav a:after{content:none}.slides-nav a.active{background:0 0;border-color:#151515}@media (min-width:1025px){.slides-nav a.active:hover{background:0 0}}@media (min-width:1025px){.slides-nav a{height:18px;width:18px}.slides-nav a:hover{-webkit-animation:hvr-pop 300ms linear 1 0ms;animation:hvr-pop 300ms linear 1 0ms;background-color:rgba(21,21,21,.75)}}.section--alt .slides-nav a{background-color:#fd2;border-color:#fd2}.section--alt .slides-nav a.active{background-color:transparent;border-color:#fd2}.client-logo-list{margin:34px 0 0 -1%;padding:0;text-align:justify}.client-logo-list__item{display:inline-block;list-style:none;margin:0 0 2em;padding:0 1%;transition:all 300ms ease-out;vertical-align:middle;width:49%}@media screen and (min-width:768px){.client-logo-list__item{margin-bottom:0;width:19%}}.client-logo-list__item a{display:block}.client-logo-list__item a::after{background:0 0}.client-logo-list__item svg{display:block;fill:currentColor;height:auto;margin:0 auto;max-width:100%}.client-logo-list__item:hover{color:rgba(21,21,21,.75)}.social-list{float:left;padding:0 0 20px;width:100%}@media (min-width:600px){.social-list{padding-bottom:60px}}.social-list__item{border:0;float:left;list-style:none;padding:0 5px 10px;text-align:center;width:25%}@media (min-width:480px){.social-list__item{width:20%}.social-list__item:nth-of-type(5n+1){clear:both}}.social-list__link{background:rgba(255,255,255,.1);display:block;padding:1.5em 0;-webkit-tap-highlight-color:transparent;transition:all 300ms ease-out 100ms}@media (min-width:1025px){.social-list__link:hover{background-color:rgba(255,255,255,.2);padding:1.35em 0 1.65em}}.social-list__link:active{background-color:rgba(255,255,255,.2);padding:1.35em 0 1.65em}.social-list__link::after{content:none}.social-list__svg{display:block;fill:#151515;height:26px;margin:0 auto;width:26px}@media (min-width:768px){.social-list__svg{height:42px;width:42px}}@media screen and (max-width:1024px){.desktop-only{display:none!important}}@media screen and (max-width:568px),screen and (min-device-width:480px) and (max-device-width:480px),screen and (min-device-width:480px) and (max-device-width:568px){.desktop-only,.mobile-hidden,.tablet-only{display:none!important}}@media screen and (min-device-width:768px) and (max-device-width:1024px){.desktop-only,.mobile-only,.tablet-hidden{display:none!important}}@media screen and (min-width:768px) and (max-width:1024px){.desktop-only,.mobile-only,.tablet-hidden{display:none!important}}@media (min-width:1024px){.desktop-hidden{display:none!important}}@media (min-width:1025px){.mobile-only,.tablet-only{display:none!important}}	</style>

  <?php

	// timestamp of when the Javascript was last updated.
	// we'll use this to cache bust the js files
	$updated_js = filemtime($_SERVER['DOCUMENT_ROOT'] . '/assets/js/philthompsoncouk.min.js');

	?>
  <script defer src="/assets/js/philthompsoncouk.min.<?php echo $updated_js; ?>.js"></script>
</head>

<body>
