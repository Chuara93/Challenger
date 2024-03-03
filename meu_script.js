function validarTexto() {
    var texto = document.getElementById("textoInput").value;
    var mensagemValidacao = document.getElementById("mensagemValidacao");

    // Verifica se o texto contém letras maiúsculas ou caracteres especiais
    if (/[A-Z]/.test(texto) || /[^A-Za-z0-9\s]/.test(texto)) {
        mensagemValidacao.textContent = "Somente letras minúsculas e números são permitidos.";
        return false;
    } else {
        mensagemValidacao.textContent = "";
        return true;
    }
}

var textareaCriptografado; // Variável global para armazenar a textarea criptografada

function criptografar() {
    if (validarTexto()) {
        var texto = document.getElementById("textoInput").value.toLowerCase(); 
        var alfabeto = "abcdefghijklmnopqrstuvwxyz";
        var textoCriptografado = "";
       
        for (var i = 0; i < texto.length; i++) {
            var char = texto[i];
            var posicao = alfabeto.indexOf(char) + 1; 
            textoCriptografado += posicao.toString() + " ";
        }

        // Se a textarea já existir, remova-a antes de criar uma nova
    
       

        textareaCriptografado = document.createElement("textarea");
        textareaCriptografado.value = textoCriptografado.trim();
       
        var divCriptografado = document.querySelector(".criptografado");
        if (divCriptografado) {
            divCriptografado.style.display = "none";
        }

        document.getElementById("textoDigitado").insertAdjacentElement("beforebegin", textareaCriptografado);

        var botaoCopiar = document.getElementById("copiarTexto");
        if (!botaoCopiar) {
            botaoCopiar = document.createElement("button");
            botaoCopiar.innerText = "Copiar";
            botaoCopiar.id = "copiarTexto";
            botaoCopiar.onclick = function() {
                var textoCopiado = textareaCriptografado.value;
                navigator.clipboard.writeText(textoCopiado).then(function() {
                    alert("Texto copiado para a área de transferência!");
                }, function(err) {
                    console.error('Falha ao copiar texto: ', err);
                });
            };
            document.getElementById("textoDigitado").insertAdjacentElement("beforeend", botaoCopiar);
        }
    }
}

function descriptografar() {
    if (textareaCriptografado) {
        textareaCriptografado.remove();
    }
    var texto = document.getElementById("textoInput").value;
    var textareaDescriptografado = document.createElement("textarea");
    textareaDescriptografado.value = texto;
    document.getElementById("textoDigitado").insertAdjacentElement("beforebegin", textareaDescriptografado);
}

function Copiar() {
    var textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

