 // Inicializar EmailJS com seu User ID
 emailjs.init('H4jqUlv1L0yzZ-Pu-');

 // Referência ao formulário
 const form = document.getElementById('contactForm');

 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Impede o envio padrão do formulário

     // Enviar e-mail usando EmailJS
     emailjs.sendForm('service_sig93pf', 'template_kku4mu8', form)
         .then(function(response) {
             console.log('Sucesso:', response);
             document.getElementById('status').textContent = 'Mensagem enviada com sucesso!';
         }, function(error) {
             console.error('Erro:', error);
             document.getElementById('status').textContent = 'Erro ao enviar a mensagem. Tente novamente.';
         });
 });