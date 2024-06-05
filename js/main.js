$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

});

 // Função para validar o formulário
 function validateForm() {
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;

	if (email.trim() === '' || message.trim() === '') {
		alert('Por favor, preencha todos os campos do formulário.');
		return false;
	}

	return true;
}

// Adiciona um event listener para o envio do formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
	if (!validateForm()) {
		e.preventDefault(); // Impede o envio do formulário se a validação falhar
		return;
	}

	// Exibe a mensagem de sucesso em um alerta
	alert('Recebemos seu email. Entraremos em contato em breve.');

	// Limpa o formulário (opcional)
	document.getElementById('contact-form').reset();

	// Impede o envio do formulário
	e.preventDefault();
});