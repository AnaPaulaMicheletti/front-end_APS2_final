var botaoAdicionar= document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function (){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/mattewpereire/pacientes-api/refs/heads/pacientes.json");

    xhr.addEventListener("load", function (){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON. parse(resposta);
            console.log(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
    })
    xhr.send();
})