// Obtém a referência para o formulário com o ID 'valid-form'
const form = document.getElementById('valid-form');

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function(e){
    // Impede o comportamento padrão de envio do formulário
    e.preventDefault();

    // Obtém os valores dos campos de input e converte para números
    const numberOneA = Number(document.getElementById('number1').value);
    const numberTwoB= Number(document.getElementById('number2').value);
    // Inicializa uma variável para armazenar se o formulário é válido ou não
    let formEValido = false;
    // Cria mensagens de sucesso e erro interpolando os valores de A e B
    const mensagemSucesso = `O valor de B(<b>${numberTwoB}</b>) é maior que o valor de A (<b>${numberOneA}</b>)`;
    const mensagemError = `O valor de B(<b>${numberTwoB}</b>) é menor que o valor de A (<b>${numberOneA}</b>)`;

    // Define uma função para verificar se numberOneA é menor que numberTwoB
    function validNumber(numberOneA, numberTwoB){
        return numberOneA < numberTwoB;
    }
    // Obtém referências para os elementos que exibirão as mensagens
    const containerMessagemSucesso = document.querySelector('.success-message');
    const containerMessagemError = document.querySelector('.error-message');
    
    // Verifica se o formulário é válido chamando a função validNumber
    formEValid = validNumber(numberOneA, numberTwoB);

    // Exibe a mensagem apropriada com base no resultado da verificação
    if (formEValid){
        containerMessagemSucesso.innerHTML = mensagemSucesso;
        containerMessagemSucesso.style.display = 'block';
        containerMessagemError.style.display = 'none';
    }
    else{
        containerMessagemError.innerHTML = mensagemError;
        containerMessagemError.style.display = 'block';
        containerMessagemSucesso.style.display = 'none';
    }
});