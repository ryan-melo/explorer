let alunos = [
  {nome: "João", p1: 3, p2: 8, average: 0, passou: ""}, 
  {nome: "Maria", p1: 4, p2: 2, average: 0, passou: ""},
  {nome: "Carlos", p1: 0, p2: 4, average: 0, passou: ""},
  {nome: "Ana", p1: 8, p2: 8, average: 0, passou: ""},
  {nome: "Paulo", p1: 6, p2: 9, average: 0, passou: ""},
  {nome: "Julia", p1: 7, p2: 6, average: 0, passou: ""},
]

for (let i of alunos) {
  i.average = (i.p1 + i.p2) / 2
  
  if (i.average >= 7) {
    i.passou = "Aprovado(a)"
  } else {
    i.passou = "Reprovado(a)"
  }
}

for (let i of alunos) {
  alert(`${i.nome} foi ${i.passou}! \nCom média final igual a ${i.average}`)
}