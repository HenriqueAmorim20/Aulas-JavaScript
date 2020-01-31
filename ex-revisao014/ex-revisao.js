var hora = (new Date).getHours()
document.querySelector("div#msg").innerHTML=`Agora são <strong>${hora}</strong> horas.`
if(hora<6){
    document.querySelector('img#imagem').src="noite.png"
    document.body.style.background = "gray"
}else if(hora<12){
    document.querySelector('img#imagem').src="manha.png"
    document.body.style.background = "orange"
}else if(hora <18){
    document.querySelector('img#imagem').src="tarde.png"
    document.body.style.background = "yellow"
}else if(hora<24){
    document.querySelector('img#imagem').src="noite.png"
    document.body.style.background = "gray"
}
