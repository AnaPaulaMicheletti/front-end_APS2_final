/*var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event){ //dblclick, executa com 2 cliques
    event.target.parentNode.classList.add("fadeOut"); //remove apos dois cliques
                                                      //fadeOut, cria opacidade na hora de apagar

    setTimeout(() =>{
        event.target.parentNode.remove(); //remove a linha
    }, 500); //adiciona um intervalo detempo antes de executar a açao
}) */

function adicionaBotaoRemover(linha) {
    var td = document.createElement("td");
    var botao = document.createElement("button");

    botao.textContent = "Remover";
    botao.classList.add("botao-remover");

    botao.addEventListener("click", function () {
        linha.classList.add("fadeOut");

        setTimeout(() => {
            linha.remove();
        }, 500);
    });

    td.appendChild(botao);
    linha.appendChild(td);
}

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(adicionaBotaoRemover);