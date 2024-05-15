/*
    Implement a calculator to perform the following operation
    1. Square, sqr Root
    2. Log, ln
    3. sin, tan, and cos
    4. X to the power Y
    5. Area of the circle.

    Note:
    handle cases for a negative number
    use proper variable declaration

*/
const op = ['square','sqrt','sin','cos','pow','area']

const operation = {
    'square': (a)=> a*a,
    'sqrt'  : (a)=> Math.sqrt(a),
    'sin'   : (a)=> Math.sin(a),
    'cos'   : (a)=> Math.cos(a),
    'pow'   : (a,b)=> Math.pow(a,b),
    'area'  : (a)=> Math.PI*a*a
}

function validator(funcName,args){
    for(let x of args){
        if(Number.isInteger(x)) return false;
    }

    if(funcName=='pow' && args.length!=2) return false; // only pow has 2 parameter

    // if((funcName == 'square' || funcName == 'sqrt' || funcName == 'sin' || funcName == 'cos' || funcName == 'area') && args.length!=1) return false;
    
    if((funcName!='pow') && (op.includes(func)) && args.length!=1) return false;  // same as above

    if((funcName=='sqrt' || funcName=='area') && args[0]<0) return false;

    return true;
}

function calculator(funcName,...args){   // as number of arguments is not fixed , use rest operator
    // console.log(args)
    let func=funcName.toLowerCase();

    if(validator(func,args)){
        if(func=='pow')
            console.log(operation[func](parseFloat(args[0]),parseFloat(args[1])));
        else
            console.log(operation[func](parseFloat(args[0])))
    }
    else{
        console.log("Input  function and/or arguments contain error ")
    }
    
}

calculator('square',3.6)
// calculator('pow',3,4)
// calculator('sqrT',-4);
// calculator('cos',0)


// done 



