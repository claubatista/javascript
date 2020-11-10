/*
  Exercicio 3:
  Escreva uma função que verifique se o vetor de habilidades passado possui a 
  habilidade "Javascript"e retorna um booleano true/false caso exista ou não.
*/
function haveSkill(skills){
  if(skills.indexOf("Javascript") !== -1){
    return true;
  }else{
    return false;
  };
}

var skills = ["React", "React Native", "Node", "Javascript"];
console.log(haveSkill(skills));
