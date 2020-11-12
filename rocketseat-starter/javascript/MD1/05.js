/*
  Exercicio 5
*/
  var users = 
  [  
    { name: "Diego",    
      skills: ["Javascript", "ReactJS", "Redux"]  
    },  
    {   
      name: "Gabriel",   
      skills: ["VueJS", "Ruby on Rails", "Elixir"]  
    }
  ];

  function showsSkills(arguments){
    for (let argument of arguments) {
      console.log(argument.name + ' possui habilidades em: ' + argument.skills.join(' '));
    }    
  }

  console.log(showsSkills(users));
