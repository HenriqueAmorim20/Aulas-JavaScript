
//Array em JS
var a = [2,3,4]
for(var c=0;c<a.length;c++){
    console.log(`Posição ${c}, valor: ${a[c]}`)
}
console.log(`-------------------`)

//Bota um elemento no final do array
a.push(1)

for(var c=0;c<a.length;c++){
    console.log(`Posição ${c}, valor: ${a[c]}`)
}
console.log(`-------------------`)

//Ordena o array em ordem crescente
a.sort()

for(var c=0;c<a.length;c++){
    console.log(`Posição ${c}, valor: ${a[c]}`)
}
console.log(`-------------------`)

//Inverte o array
a.reverse()

//Forma mais compacta do laço for para objects e arrays, é preciso apenas um contador e o array como parâmetro
for(var c in a){
    console.log(`Posição ${c}, valor: ${a[c]}`)
}
console.log(`-------------------`)

//Esse método retorna o índice no vetor do elemento entre parentesis, caso o elemento não esteja contido no vetor, retorna-se -1
let p = a.indexOf(10)
if(p!=-1){
console.log(`O valor 3 está na posição ${p}.`)
}else console.log("Valor não encontrado.")
