$(function() {
  $('a').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
    // Outras Animações
    // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce
  });
});

 jQuery(document).ready(function($) {

 	var controleNav = false;
	$(document).scroll(function(e) {
 		var scrollTop = $(document).scrollTop();

		if (scrollTop > $('.navbar').height()) {
 			if (controleNav == false) {
 				$('.navbar').addClass('navbar2');
 				$('.navbar').hide();
 				$('.navbar').fadeIn('slow');
 				controleNav = true;
 			}
 		}else{
			if (controleNav == true) {
 				$('.navbar').removeClass('navbar2');
 				$('.navbar').hide();
				$('.navbar').fadeIn('slow');
				controleNav = false;
 			}
		}
 	});
 });

document.addEventListener("DOMContentLoaded", function(){
   var links = document.querySelectorAll(".navbar-nav li a:not([href='#'])");
   for(var x=0; x<links.length; x++){
      links[x].onclick = function(){
         document.querySelector("button.navbar-toggler").click();
      }
   }
});

