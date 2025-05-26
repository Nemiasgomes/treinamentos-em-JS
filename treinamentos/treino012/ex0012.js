var agora = new Date()
var hora = agora.getHours()
if (hora <= 6 ) {
console.log("Madrugada")
}
else if (hora <= 12) {
    console.log("Manhã")
}
else if (hora <= 18)  {
    console.log("Tarde")
}
else {
console.log("Noite")
}
