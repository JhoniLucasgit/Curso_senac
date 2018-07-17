function piramide(numero){
    let resposta = '';
    if(!isNaN(numero)){
        if(numero <= 0){
            return 'Erro: número negativo.';
        }else{
            for(let i=1; i <= numero; i++){ //contador das linhas
                for(let j=1; j <= i; j++){ // contador de colunas
                    resposta += j + ' ';// coloca o valor de j pq muda o valor dentro do for(j)
                }       
                resposta += '\n'; // vai carregar toda a linha e vai dar um \n para quebrar a linha
            }
            return resposta; // retorna a piramide toda montada
        }
        
    }
    return 'Erro: X não é um número.';
}