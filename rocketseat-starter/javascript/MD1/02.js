/*
  Exercicio 2:
  Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
*/
function even(x, y){
  for(var i = x; i <= y; i++){
    if(i % 2 === 0){
     console.log(i)
    }
  }
} 

even(2, 46)
