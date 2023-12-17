function adicionar(){
    var NovoElemento = document.createElement("li")
    var texto = document.querySelector("#v").value
    var lista = document.querySelector("#lista")

    NovoElemento.innerHTML = texto

    lista.appendChild(NovoElemento)


}