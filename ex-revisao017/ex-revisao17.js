function tabuada(){
   var num = Number( document.querySelector('input#num').value)
   var tab = document.querySelector('select#tabuada')

   if( document.querySelector('input#num').value.length == 0){
       window.alert('Por favor insira um número!')
   }else{
       tab.innerHTML=''
       var c=1
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
   }
}