function verificar() {
    var sexo = document.getElementsByName("nSexo")
    var idade = (new Date()).getFullYear() - (document.querySelector("input#idade")).value
    //Cria um elemento novo na página que nesse caso é uma imagem
    var img = document.createElement('img')
    var res =  document.querySelector("div#msg")
    // Forma de atribuir qualquer tipo de atributo a um elemento criado dinamicamente, nesse caso foi atribuido um id de nome foto
    img.setAttribute('id','foto')
    if (idade < 0 || idade > 120) {
        window.alert("Verifique os dados e tente novamente!")
    }
    else {
        if (sexo[0].checked) {
            if (idade < 10) {
                res.innerHTML = `Detectamos um bebe com ${idade} ano(s).`
                // Forma de atribuir qualquer tipo de atributo a um elemento criado dinamicamente, nesse caso foi atribuido uma source da imagem foto-bebe-m.png
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 20 && idade > 9) {
                res.innerHTML = `Detectamos um jovem com ${idade} ano(s).`
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50 && idade > 19) {
                res.innerHTML = `Detectamos um homem com ${idade} ano(s).`
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                res.innerHTML = `Detectamos um idoso com ${idade} ano(s).`
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            if (idade < 10) {
                res.innerHTML = `Detectamos uma bebe com ${idade} ano(s).`
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 20 && idade > 9) {
                res.innerHTML = `Detectamos uma jovem com ${idade} ano(s).`
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50 && idade > 19) {
                res.innerHTML = `Detectamos uma mulher com ${idade} ano(s).`
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                res.innerHTML = `Detectamos uma idosa com ${idade} ano(s).`
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        // Forma de mostrar um elemento criado dinamicamente no arquivo html, nesse caso mostra-se o elementro img na div res
        res.appendChild(img)
    }
}
/* OBS IMPORTANTE: Nesse exercicio é possível adicionar as imagens utilizando apenas o js, ou seja, o js cria um tag img no arquivo html e por isso não a a necessidade de existir uma tag img no arquivo html do seu site! Forma de fazer ou também utilizando outro jeito, que seria declar a tag no html e ir fazendo as alterações no arquivo js recuperando essa tag po queryselector*/