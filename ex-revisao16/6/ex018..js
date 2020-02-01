
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

for(var c=0;c<a.length;c++){
    console.log(`Posição ${c}, valor: ${a[c]}`)
}
console.log(`-------------------`)

