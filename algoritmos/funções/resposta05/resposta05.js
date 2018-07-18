function soma_imposto(valor_produto, taxa_imposto){
    let valor = valor_produto;
    let taxa = taxa_imposto;

    let preco_final = valor + valor*taxa;
    return preco_final;
}