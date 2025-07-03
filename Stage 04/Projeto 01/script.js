function operacoes() {

alert("Vamos começar!")
let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))

while (n2 == 0) {
  alert("O segundo número não pode ser 0!!!")
  n2 = Number(prompt("Digite o segundo número novamente:"))
}

let sum = n1 + n2;
let subtraction = n1 - n2;
let multiplication = n1 * n2;
let division = n1 / n2;
let resto = n1 % n2;

let imparOuPar = () => {
  if (sum % 2 === 0) {
    alert(`A soma entre ${n1} + ${n2} = ${sum}, que é um número Par!`)
  } else {
    alert(`A soma entre ${n1} + ${n2} = ${sum}, que é um número Ímpar!`)
  }
}
let oqSao = () => {
  if (n1 === n2) {
    alert(`${n1} e ${n2} são iguais!`)
  } else {
    alert(`${n1} e ${n2} são diferentes!`)
  }
}

alert(`A soma entre ${n1} + ${n2} = ${sum}`)
alert(`A subtração entre ${n1} - ${n2} = ${subtraction}`)
alert(`A multiplicação entre ${n1} * ${n2} = ${multiplication}`)
alert(`A divisão entre ${n1} / ${n2} = ${division}`)
alert(`O resto entre ${n1} / ${n2} = ${resto}`)
oqSao()
imparOuPar()


}

operacoes()