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

// Formulário de contato com envio via mailto
document.addEventListener("DOMContentLoaded", function(){
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('contactFeedback');
  if(!form) return;

  form.addEventListener('submit', function(event){
    event.preventDefault();
    feedback.textContent = '';

    var nome = form.nome.value.trim();
    var email = form.email.value.trim();
    var assunto = form.assunto.value.trim();
    var mensagem = form.mensagem.value.trim();

    if(!nome || !email || !assunto || !mensagem){
      feedback.textContent = 'Preencha todos os campos para enviar sua mensagem.';
      feedback.style.color = '#b00020';
      return;
    }

    var body = [
      'Nova mensagem do site Carbono 2019:',
      '',
      'Nome: ' + nome,
      'E-mail: ' + email,
      'Assunto: ' + assunto,
      '',
      'Mensagem:',
      mensagem
    ].join('\\n');

    var mailtoLink = 'mailto:julianoqm@gmail.com'
      + '?subject=' + encodeURIComponent('Contato - Carbono 2019: ' + assunto)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink;
    feedback.textContent = 'Abrindo seu cliente de e-mail para finalizar o envio.';
    feedback.style.color = '#0b4f1d';
    form.reset();
  });
});
