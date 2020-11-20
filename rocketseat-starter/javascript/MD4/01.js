/*
  Exercicio 1:
  Crie uma função que recebe a idade de um usuário e retorna uma 
  Promise que depois de 2segundos retornará se usuário é maior ou 
  não que 18 anos. Se o usuário ter mais que 18 anos deidade o 
  resultado deve cair no .then, caso contrário, no .catch
*/

function checkAge(age) {
  return new Promise(function(resolve, reject){
    if(age >= 18){
      setTimeout(function(){resolve()}, 2*1000);
    }else{
      setTimeout(function(){reject()}, 2*1000)
    }
  });
}

checkAge(20)  
  .then(function() {   
    console.log("overage");  
  })
  .catch(function() {  
    console.log("less than 18");  
  });
