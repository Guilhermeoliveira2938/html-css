// Seleciona o formulário da página
const formulario = document.querySelector('form');

// Aguarda o evento de envio do formulário
formulario.addEventListener('submit', function(evento) {
    // Impede o comportamento padrão (recarregar a página)
    evento.preventDefault();

    // Captura os valores digitados nos campos
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('Sobrenome').value.trim();

    // Validação: verifica se os campos estão vazios
    if (nome === '' || sobrenome === '') {
        alert('Por favor, preencha todos os campos!');
        return; // Para a execução aqui se tiver campo vazio
    }

    // Exibe uma mensagem de sucesso com os dados
    alert(`Cadastro realizado com sucesso!\nNome completo: ${nome} ${sobrenome}`);

    // Limpa os campos após o envio
    formulario.reset();
});