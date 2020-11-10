/*
  Exercicio 1:
  Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é.
*/
function showsAddress(address){
  return (
    "The user lives in " + 
    address.city + "/" + address.country +
    ", in the distric " + address.district +
    ", on the street " + address.street +
    " in the number "  + address.number +
    "."
  );
}

var address = {
  street: "Sonnenallee",
  number: 206,
  district: "Neukolln",
  city: "Berlin",
  country: "Germany"
};

var resp = showsAddress(address);
console.log(resp);
