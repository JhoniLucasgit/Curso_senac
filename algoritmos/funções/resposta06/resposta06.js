function conversor(hora_informada){
    let hora_temp = hora_informada.split("");

    if(hora_temp.length == 4){
        hora_temp.unshift("0");        
    }

    let hora = hora_temp[0]+""+hora_temp[1];
    let minuto = hora_temp[3]+""+hora_temp[4];

    if(hora == 24){ 
        hora = "00";
        minuto += " A.M.";
    } else if(parseInt(hora) > 12 && parseInt(hora) <= 23){
        hora -= 12;
        minuto += " P.M.";
    } else {
        minuto += " A.M.";
    }

    
    return hora+":"+minuto;
}