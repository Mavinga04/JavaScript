var Nome = prompt('Digite o Nome')
var Altura = parseFloat(prompt('Digite o Altura'))
var Peso = parseFloat(prompt('Digite seu Peso'))

var Calmc = Peso/(Altura*Altura);

if(Nome !=='' && Altura !=='' && Peso !==''){
    if(Calmc<18.5){
        alert(Nome + ', Seu IMC está baixo')
    }else if(Calmc<25){
        alert(Nome + ', Seu IMC está muito bom')
    }else if(Calmc<30){
        alert(Nome + ', Seu IMC está Levemente acima')
    }else if(Calmc<35){
        alert(Nome + ', Obesidade I')
    }else if(Calmc<40){
        alert(Nome + ', Obesidade II')
    }else{
        alert(Nome + ', Obesidade III')
    }
}else{
    alert('Valore Não preenchidos')
}


