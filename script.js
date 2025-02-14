// Função para exibir e animar a resposta
function mostrarResposta(tipo) {
    let resposta = '';
    
    switch(tipo) {
        case 'erro415':
            resposta = "Processo realizado com sucesso. Por favor, teste o botão 'ENTRAR'. Caso o erro persista, entre em contato novamente.";
            break;
        case 'erro414':
            resposta = "Processo realizado com sucesso. Por favor, teste o botão 'PRIMEIRO ACESSO'. Caso o erro persista, entre em contato com o suporte.";
            break;
        case 'rgDesatualizado':
            resposta = "Erro causado por documento desatualizado. Para prosseguir, é necessário apresentar um RG atualizado. Seguimos critérios rigorosos para garantir a segurança de seus dados conforme a política de segurança ASSAÍ.";
            break;
        case 'contestacaoSaldo':
            resposta = "Para esta solicitação, entre em contato com o RH e abra um chamado com o time de CSA - TI. Caso já tenha feito esse processo, entre em contato com o canal de ética.";
            break;
        case 'rgSelfie':
            resposta = "Envie uma foto legível do RG (frente e verso) e uma selfie segurando o crachá ao lado do rosto. Após, retorne com os anexos para atendimento.";
            break;
        case 'rgFrontalVerso':
            resposta = "Envie fotos legíveis do RG (frente e verso). Após, retorne com os anexos para atendimento.";
            break;
        case 'selfieCracha':
            resposta = "Envie uma selfie com o crachá ao lado do rosto. Após, retorne com o anexo para atendimento.";
            break;
        default:
            resposta = "Desculpe, não conseguimos identificar sua solicitação. Por favor, forneça mais informações.";
            break;
    }
    
    // Exibe a resposta e aplica o efeito de animação
    var respostaDiv = document.getElementById("resposta");
    respostaDiv.style.display = "block";  // Torna a div visível
    respostaDiv.textContent = resposta;  // Adiciona o texto à div

    // Inicia a animação para deslizar a div da esquerda para o centro
    setTimeout(function() {
        respostaDiv.style.left = "0";  // Desliza a div para a posição original
    }, 10);  // Pequeno atraso para permitir o início da animação
}
