
                                // task #1892 and 1891
const ps = require('prompt-sync');
const prompt = ps();


function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function celsius2kel(cel){
    return parseFloat(cel)+274.14
}
function circleArea(rad){
    return 3.14*rad*rad;
}
function squareArea(len){
    return len*len;
}


function calculator(func,...args){

//  Using the `name` property: Define a function and then use `console.log(functionName.name)` to get the name of the function
    
    console.log("function name is " ,func.name)  
    // console.log(typeof func.name)

        if(func.name=='celsius2kel' && args.length==1){
            return celsius2kel(args)
        }else if(func.name=='squareArea' && args.length==1){
            return squareArea(args);
        }else if(func.name=='circleArea' && args.length==1 ){
            return circleArea(args);
        }else if(args.length==3 && (args[2]=='+' || args[2]=='-'||args[2]=='*'|| args[2]=='/')){
            return func(parseFloat(args[0]),parseFloat(args[1]));
        }else{
            console.log("Passed function and number of parameter doesn't matches");
        }
}

console.log(calculator(celsius2kel,0))
console.log(calculator(squareArea,1,2))
console.log(calculator(sum,7,8,'+'));


/*
*/




        // start
// let a = parseFloat(prompt("enter first operand "))
// let b = parseInt(prompt("enter second operand "))

// let c = prompt("enter operator ")


// switch (c) {
//     case '+':
//         console.log(calculator(sum,a,b))
//         break;
//     case '-':
//         console.log(calculator(subtract,a,b))
//         break;
//     case '*':
//         console.log(calculator(multiply,a,b))
//         break;
//     case '/':
//         console.log(calculator(divide,a,b))
//         break;        
//     default:
//         break;
// }


