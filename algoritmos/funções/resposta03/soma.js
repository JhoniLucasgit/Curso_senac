function soma(valor1, valor2, valor3){
    if(!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)){
        let soma = valor1+valor2+valor3;
        return soma;
    }
    return "Erro: valor informado não é um número.";
}