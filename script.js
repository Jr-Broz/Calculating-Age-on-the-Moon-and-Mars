 function Moon(){    

let calculatingYear = 365/27;

let howOldRu = +prompt("How old are you?");

let ageOnMoon = (howOldRu * calculatingYear);

   ageOnMoon.toFixed(3);
alert("You are Currently " + ageOnMoon.toFixed(3) + " Years Old on the Moon");
 }
 function Mars(){

  let age = +prompt("How old Are You?");
  let calculatingAge = (age / 1.88)
  alert("Your are Currently: " + calculatingAge + " Years Old on Mars");
 }

