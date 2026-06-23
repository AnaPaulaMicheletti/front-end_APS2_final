var titulo = document.querySelector(".titulo");


//var paciente = document.querySelector("#primeiro_paciente");
var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){ //let ou var, da na mesma
    const paciente = pacientes[i];
    console.log(paciente);

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = validaPeso(peso);
var alturaEhValido = validaAltura(altura);

    //if(peso <= 0 || peso > 635)
    if(!pesoEhValido){
        console.log("Peso inválido!");
        //pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    //if(altura <= 0 || altura > 2.72)
    if(!alturaEhValido){
        console.log("Altura invalida!");
        //alturaEhValido = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if(!pesoEhValido && !alturaEhValido){
        tdImc.textContent = "Peso e Altura invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValido){
        //var imc = peso / Math.pow(altura, 2);
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso > 0 && peso <= 635){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura <= 2.72) {
        return true;
    }else{
        return false;
    }
}

//var botaoAdicionar = document.querySelector("#adicionar-paciente");
//botaoAdicionar.addEventListener("click", function (event){ //adiciona a 
//    event.preventDefault();
//    console.log("Fui clicado!");
//})

//var imc = peso / Math.pow(altura, 2);

//tdImc.textContent = imc.toFixed(2);

//console.log(paciente);