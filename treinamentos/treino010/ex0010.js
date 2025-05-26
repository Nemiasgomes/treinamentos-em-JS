/*Triagem de idade

Enunciado:
Peça a idade do usuário e diga:

"Criança" se for menor que 12

"Adolescente" se for entre 12 e 17

"Adulto" se for 18 ou mais*/


var idade =   60 //Digite sua idade
    

if (idade  < 12) {
    console.log(` Sua idade é de ${idade} Você é uma criança`)
}
else if (idade >= 12 && idade <= 17 ){
    console.log(`Sua idade é de ${idade} Você é um Adolescente`)
}

else if (idade >= 18){
    console.log(`Sua idade é de ${idade} Você é um Adulto`)
}