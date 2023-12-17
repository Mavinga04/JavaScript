var AnoActual = 2024
var AnoNascimento = parseInt(prompt("Digite o Ano que Nasceu:"))

var Calcular = AnoActual - AnoNascimento;
if(Calcular<18){    
    document.write(Calcular + " - Menor de Idade")
}else{    
    document.write(Calcular + " - Maior de Idade")
}