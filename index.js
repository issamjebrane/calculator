const add = (a,b)=>{
    return a + b 
}

 const subtract = (a,b)=>{
    return a-b
}

 const divide = (a,b)=>{
   return b == 0 ?  'divisor must not equal 0' : a/b
}

 const multiply = (a,b)=>{
    return a*b
}

const calculatrice =(num1,num2,operator)=>{
var result
switch(operator){
    case "addition":
    result = add(num1, num2);
    break;

    case "subtraction":
    result = subtract(num1, num2);
    break;

    case "multiplication":
    result = multiply(num1, num2);
    break;

    case "division":
    result = divide(num1, num2);
    break;

    default:
    result = "Sorry, please enter a valid operator!"
}
    return result
}

module.exports = calculatrice