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

// Formulário de contato com envio direto para e-mail (sem abrir cliente)
document.addEventListener("DOMContentLoaded", function(){
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('contactFeedback');
  var submitBtn = form ? form.querySelector('button[type=\"submit\"]') : null;
  var endpoint = 'https://formsubmit.co/ajax/julianoqm@gmail.com';
  if(!form) return;

  form.addEventListener('submit', function(event){
    event.preventDefault();
    feedback.textContent = '';
    feedback.style.color = '#0b4f1d';

    var nome = form.nome.value.trim();
    var email = form.email.value.trim();
    var assunto = form.assunto.value.trim();
    var mensagem = form.mensagem.value.trim();

    if(!nome || !email || !assunto || !mensagem){
      feedback.textContent = 'Preencha todos os campos para enviar sua mensagem.';
      feedback.style.color = '#b00020';
      return;
    }

    if(submitBtn){
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }

    var payload = {
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem,
      _subject: 'Contato Carbono 2019 - ' + assunto
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(function(response){
      if(!response.ok){
        throw new Error('Erro ao enviar mensagem. Tente novamente.');
      }
      return response.json();
    }).then(function(){
      feedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
      feedback.style.color = '#0b4f1d';
      form.reset();
    }).catch(function(){
      feedback.textContent = 'Não foi possível enviar agora. Verifique sua conexão e tente novamente.';
      feedback.style.color = '#b00020';
    }).finally(function(){
      if(submitBtn){
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensagem';
      }
    });
  });
});
