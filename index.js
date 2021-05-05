var shadeA = function (){
  console.log("Your production in Shade A 510 litres per day")
}
shadeA();
var shadeB = function (){
  console.log("Your production in Shade B 308 litres per day")
}
shadeB();
var shadeC = function (){
  console.log("Your production in Shade C 486 litres per day")
}
shadeC();
var shadeD = function (){
  console.log("Your production in Shade D 572 litres per day")
}
shadeD();


var totalProduction = function (){
  console.log("Your total poduction is 1876 litres per day");
}
totalProduction();


var weeklyIncome = incomeOverTime(84420, 7); 

function incomeOverTime(a, b) {
  return a * b;   
} ; 

console.log ("Your weekly income is " + weeklyIncome );