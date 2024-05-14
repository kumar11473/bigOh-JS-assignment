
const operators=['+','-','*','/']
const obj={
    '+':(a,b)=>(a+b),
    '-':(a,b)=>(a-b),
    '*':(a,b)=>(a*b),
    '/':(a,b)=>(a/b)
}

function validator(operand1,operand2,operator){
    if(!operators.includes(operator)) return true;  // if operator doesn't exits in operator array
    
    if(isNaN(operand1) || isNaN(operand2)) return true;

    if((operator=='/') && (operand2==0)) return true;
   
    return false;
}


function calculator(operand1,operand2,operator){
    
    if(validator(operand1,operand2,operator))
        console.log("Input data have errors")
    else
        console.log(obj[operator](parseFloat(operand1),parseFloat(operand2)))
    // try {
    //     
    // } catch (error) {
    //     console.log("erro",error)
    // }
    
}

calculator('8',2,'+');