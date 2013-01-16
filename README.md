Touch/ClickFix
=============

A jQuery Plugin that "fixes" drop down menu taps on non-Apple touch screen devices

# How to use
Simply include jQuery and the jquery.touchclickfix.js file and call .touchClickFix() on the parent element of your drop down:

	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="/path/to/jquery.touchclickfix.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
				$('nav.my-awesome-menu').touchClickFix();
		});
	</script>

**Optional:** You can optionally include a regular jQuery CSS selector that is used to find the <a>'s of your menu

## Credit
I didn't think up this technique but merely created a jQuery plug-in version of the original script [found here] (http://snippets.webaware.com.au/snippets/make-css-drop-down-menus-work-on-touch-devices/)