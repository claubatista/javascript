/*
  Exercicio 4:
  Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é.
*/

function experience(anos){
  if(anos <= 2){
    console.log("beginner")
  }else if(anos <= 4){
    console.log("intermediate")
  }else if(anos <= 6){
    console.log("advanced")
  }else{
    console.log("jedi master")
  }
}

var yearsOfStudy = 9

experience(yearsOfStudy)
