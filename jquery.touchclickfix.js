/*!	
* jQuery Touch/Click "Fix"
* Based on {@http://snippets.webaware.com.au/snippets/make-css-drop-down-menus-work-on-touch-devices/}
*
* Copyright 2013, MotionTwist http://motiontwist.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*/
(function($){
	$.fn.touchClickFix = function(sel){
		//Assign default selector, if none is provided
		sel = (typeof optionalArg === 'undefined') ? 'li > a:not(:only-child)' : sel;
		
		//First we check if this is a touch device. The iDevice part is due to fact that iOS 5+ automatically does the same as this plugin
		if (("ontouchstart" in window) && !(/iPad|iPod|iPhone/.test(navigator.platform) && "matchMedia" in window)){
			var $anchors = this.find(sel);
		    $anchors.on({
				click: function(e){
					if($(this).prop('dataNoClick')){
			            e.preventDefault();
			        }
				},
				touchstart: function(e){
					var noClick = !$(this).prop('dataNoClick');
					$anchors.prop('dataNoClick', false);
					$(this).prop('dataNoClick', noClick);
					this.focus();
				}  
		    }).prop('dataNoClick', false);
		}
	};
})(jQuery);