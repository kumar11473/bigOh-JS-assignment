
function minReverse(exp){

    let stack = [];
    for(let char of exp){
        if(stack.length==0) 
            stack.push(char)
        else if(stack[stack.length-1] === '{' && char==='}')
            stack.pop();
        else
            stack.push(char)
    }
    if(stack.length&1) // if odd number of braces left in the stack => not possible to balance
            return -1;

    let open=0,close=0;
    while(stack.length) {
        if(stack[stack.length-1]==='{') open++;
        else close++;
        stack.pop();
    }       
    // console.log(Math.floor(open/2),open%2 , Math.floor(close/2) , close%2)

    return (Math.floor(open/2)+open%2 + Math.floor(close/2) + close%2);
}


    // optimised S.C= O(1);
function minRev(exp){
    let i=0;
    let open=0,close=0;

    while(i<exp.length){
       if(open>0 && exp[i]==='}')
            open--;
        else if(exp[i]=='{') open++;
        else close++;
        i++; 
    }
    
    console.log(open,close)
    if((open+close)&1) return -1;

    return (Math.floor(open/2)+open%2 + Math.floor(close/2) + close%2); 
}



let exp3='{{{{}}'
let exp ='}}}}}}{}{}}}{{}}}}{}}{{{}{}{}{}}{{{{}}}{}}'
let exp2 ='}}}}}}}}}}}{'



console.log(minRev(exp3))