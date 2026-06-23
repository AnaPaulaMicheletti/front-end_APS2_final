var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    //obtem informaçoes do formuladio do paciente do form
    /*
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    */
    //fim
    var paciente = obtemPacienteDoFormulario(form);

    //console.log("Meu nome é " + nome +" peso: " + peso + " altura: " + altura + " gordura: " + gordura)
    //serve para ver se o codigo esta funcionando quando insere no box e aperta o botao


    //cria a tr e a td do paciente
    /*
    var pacienteTr = document.createElement("tr"); //cria para por dentro da tr

    var nomeTd = document.createElement("td"); //cria para por dentro da td
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome; //
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calculaImc(paciente.peso, paciente.altura); //para calcular imc (puxa do codigo anterior ja calculado)
    //fim


    //adiciona paciente na tabela
    pacienteTr.appendChild(nomeTd); //vai por dentro da tr .appendChild()
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    */

    //var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibeErros(erros);

        return;
    }

    //var tabela = document.querySelector("#tabela-pacientes"); //seleciona a tabela
    adicionaPacienteNaTabela(paciente);

    var msgErro = document.querySelector("#mensagem-erro");
    msgErro.innerHTML = "";

    //tabela.appendChild(pacienteTr); //vai chamar os tr para dentro da tabela
    //fim

    form.reset(); //.reset serve para limpar o campo
})

//cria os objetos (ex: nome)
function obtemPacienteDoFormulario(form){//tem todos os valores juntos e devolve na var chamada la em cima
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    /*
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calculaImc(paciente.peso, paciente.altura);
    */

    /*
    nomeTd = montaTd(paciente.nome, "info-nome");
    pesoTd = montaTd(paciente.peso, "info-peso");
    alturaTd = montaTd(paciente.altura, "info-altura");
    gorduraTd = montaTd(paciente.gordura, "info-gordura");
    imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    */
    
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome nao pode ser em branco!"); //para emitir alerta de erro
    }

    if (paciente.peso.length == 0){
        erros.push("O peso nao pode ser em branco!"); 
    }

    if (paciente.altura.length == 0){
        erros.push("A altura nao pode ser em branco!"); 
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura nao pode ser em branco!"); 
    }

    if (!validaPeso (paciente.peso)){
        erros.push("Peso invalido!"); 
    }

    if (!validaAltura (paciente.altura)){
        erros.push("Altura invalida!"); 
    }

    return erros;
}

function exibeErros(erros){
    var ul = document.querySelector("#mensagem-erro");
        ul.innerHTML = ""; //toda vez q inserir uma informação, vai apagar um alerta

        erros.forEach(erro =>{
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}