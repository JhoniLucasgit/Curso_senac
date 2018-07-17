function piramide(numero){
    let resposta = '';
    if(!isNaN(numero)){
        if(numero <= 0){
            return "Erro: número negativo.";
        }else{
            for(let i=1; i <= numero; i++){ // contador de linhas   
                for(let j=1; j <= i; j++){ // contador de colunas
                    resposta += i + ' '; // coloca o valor de i pq não muda durante o for(j)
                }
                resposta += '\n'; // apos terminado a coluna(for(j)) quebra para ter uma nova linha(for(i))
            }
            return resposta; // retorna a piramide toda montada
        }
    }
    return "Erro: X não é um número.";
}
