// Array para armazenar as mensagens
var listaMensagens = [];

// Função para adicionar uma nova mensagem ao array
function adicionarMensagem(apelido, mensagem) {
    listaMensagens.push({
        "apelido": apelido,
        "mensagem": mensagem
    });
}

// Função para formatar as mensagens em HTML
function formatarMensagens() {
    var html = "";
    for (var i = 0; i < listaMensagens.length; i++) {
        var mensagem = listaMensagens[i];
        html += '<div class="chat-message">';
        html += '<span class="chat-message-apelido">' + mensagem.apelido + '</span>';
        html += '<span class="chat-message-item">' + mensagem.mensagem + '</span>';
        html += '</div>';
    }
    return html;
}

// Função para atualizar o conteúdo da div #chat-messages
function atualizarHTML() {
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = formatarMensagens();
}

// Função executada ao pressionar o botão #message-commit
function commitMessageClickHandler() {
    var input = document.getElementById("message-input");
    
    if (input.value.trim().length == 0)
    {
        
        input.focus ();
        return
    }
    
    adicionarMensagem(' ', input.value);
    atualizarHTML();
    document.getElementById("message-commit").value= '';

// Adicionar um event listener para o botão #message-commit
var messageCommitButton = document.getElementById("message-commit");
messageCommitButton.addEventListener("click", commitMessageClickHandler);
}

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------
