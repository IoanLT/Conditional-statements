// Adding a comment

let num1 = 1;
let num2 = 7;
let num3 = 7;

if(num1 === num2 && num1 === num3 && num2 === num3){
  console.log('The three variables are the same');
}
else if(num1 === num2 || num1 === num3 || num2 === num3){
  console.log('Two of the variables are the same');
}
else {
  console.log('all variables are different');
}

