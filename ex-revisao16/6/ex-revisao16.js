function contar(){
     var inicio = document.querySelector("input#inum")
     var fim =document.querySelector("input#ifim")
     var passo = document.querySelector("input#ipasso")
     var res = document.querySelector("p#res")
    if (inicio.value.length == 0 || fim.value.length ==0){
        window.alert("ERRO")
    }else{
        if(passo.value.length == 0){
            window.alert("O passo será considerado como 1")
            passo.value = 1
        }
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML='Contando... '
        if(i<=f){
            for(var c =i;c<=f; c+=p){
                res.innerHTML += ` ${c}&#10145 `
            }
        }else{
            for(var c=i; c>=f; c-=p){
                res.innerHTML += ` ${c}&#10145 `
            }
        }
        
        res.innerHTML += '&#127988' 
    }  
}