
//Ao igualar um parâmetro a zero, siginica que ele passa a ser opcional, ou seja, caso ele algum desses parâmetros opcionais não sejam passados na chamada da função, a variável correspondente a ele recebe automaticamente o valor 0.
function soma(n1=0,n2=0){
    return n1+n2
}

console.log(soma(3)+"\n----------------")


//Em JS é possível que uma variável receba uma função, na prática é dar a função o nome da variável, e assim chama-la pela variável
var res = function(x){
    return x*=x
}

console.log(res(2)+"\n----------------")


//Forma recursiva de calcular o fatorial de um número
function fatorial(n){
    if(n==1){
        return 1;
    }else{
        return n*fatorial(n-1)
    }
}

console.log(`O fatorial de 5 é igual a ${fatorial(5)}.`+"\n----------------")
