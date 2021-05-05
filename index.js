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




var yearlyIncome = incomeOverTime(84420, 364); 

function incomeOverTime(a, b) {
  return a * b;   
} ; 

console.log ("Your yearly income is " + yearlyIncome );



var leapYearIncome ={
  January : 30*45*1876,
  February : 29*45*1876,
  March : 31*45*1876,
  April : 30*45*1876,
  May : 31*45*1876,
  June : 30*45*1876,
  July : 31*45*1876,
  August : 31*45*1876,
  September : 30*45*1876,
  October : 31*45*1876,
  November : 30*45*1876,
  December :31*45*1876,
};

console.log (leapYearIncome );



var changeInPriceYearlyIncome = incomeOverTime(91924, 364); 

function incomeOverTime(a, b) {
  return a * b;   
} ; 

console.log ("Your yearly income is " + changeInPriceYearlyIncome );



var changeInPriceIncomeLeapYear={
  January : 30*49*1876,
  February : 29*49*1876,
  March : 31*49*1876,
  April : 30*49*1876,
  May : 31*49*1876,
  June : 30*49*1876,
  July : 31*49*1876,
  August : 31*49*1876,
  September : 30*49*1876,
  October : 31*49*1876,
  November : 30*49*1876,
  December :31*49*1876,
};

console.log (changeInPriceIncomeLeapYear);