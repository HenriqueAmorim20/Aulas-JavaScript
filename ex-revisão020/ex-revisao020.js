var tab = document.querySelector("select#tabela");
var res = document.querySelector("div#msg");
var array = [];
function adicionar() {
  if (document.querySelector("input#num").value.length == 0) {
    window.alert("Por favor, insira um número!");
  } else {
    if (
      Number(document.querySelector("input#num").value) > 0 &&
      Number(document.querySelector("input#num").value) < 100
    ) {
      if (
        array.indexOf(Number(document.querySelector("input#num").value)) != -1
      ) {
        window.alert("Esse número já está na lista, tente novamente");
      } else {
        array.push(Number(document.querySelector("input#num").value));
        var item = document.createElement("option");
        item.text = `valor ${array[array.length - 1]} adicionado`;
        tab.appendChild(item);
      }
    } else {
      window.alert("Número invalido, tente outra vez.");
    }
  }
  document.querySelector("input#num").value = "";
  document.querySelector("input#num").focus();
  document.querySelector("div#msg").innerHTML = "";
}
function finalizar() {
  if (array.length == 0) {
    document.querySelector("div#msg").innerHTML =
      "Impossível finalizar, lista vazia.<br><br>";
  } else {
    var res = document.querySelector("div#msg");
    res.innerHTML = `Ao todo, temos ${array.length} números cadastrados.<br><br>`;
    array.sort();
    res.innerHTML += `O menor valor informado foi o ${array[0]}.<br><br>`;
    var soma = 0;
    for (c in array) soma += array[c];
    var media = soma / array.length;
    res.innerHTML += `Somando todos os valores temos ${soma}.<br><br>`;
    res.innerHTML += `A média dos valores digitados é ${media}.<br><br>`;
    soma = 0;
  }
}
function resetar() {
  document.querySelector("div#msg").innerHTML = "Adicione os números";
  while (document.querySelector("select#tabela").options.length != 0) {
    document.querySelector("select#tabela").options[0] = null;
  }
  array = [];
  document.querySelector("input#num").focus();
}
