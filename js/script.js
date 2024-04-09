function salvar() {
    let form = document.getElementById("form-cadastro")
    let nome = form.nome .value
    let especie = form.especie .value
    let altura = form.altura .value
    
    if (nome.trim() == "") {
        alert("Preencha o nome da planta")
        return false
    }
    if (especie.trim() == "") {
        alert("Preencha a espécie da planta")
        return false
    }
    if (altura.trim() == "") {
        
    }
    alert("Planta cadastrada com sucesso!")
}

function validarNumero(input) {
    
    if (isNaN(input.value.trim())) {
        
        input.value = '';
    }
}