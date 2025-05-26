/*SISTEMA PARA VOTOS
MENOS DE 16 ANOS NÁO PODEM VOTAR
16 E 17 ANOS VOTO OPICONAL
18 Á 69 ANO VOTO OBRIGATÓRIO
70 OU MAIS OPCIONAL
*/

let idade =  134
// digite sua idade


if (idade < 16) {
    console.log(`Sua idade não permitido votar`)
}

    else if (idade >= 16 && idade <= 17 ) {
      
    console.log(`voto opcional`)
}

        else if (idade >= 18 && idade <= 69) {

            console.log(`Seu voto é obrigatório`)
}
            else if (idade >= 70) {
    console.log(`Voto opcional`)
}
