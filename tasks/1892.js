
// const OPERATOR      = ['^','/','*','+','-']   // upper_snake_case for writing constant values
const OPEN_BRACKET  = ['[','{','(']
const CLOSE_BRACKET = [']','}',')']
// making a precedence object helps to check a char is operator or not and also the precendence value from same object.
const PRECENDENCE   = {
    '^' : 3,
    '/' : 2,
    '*' : 2,
    '+' : 1,
    '-' : 1,
    '[' : 0,     
    '(' : 0,
    '{' : 0
}

const operation={
    '+' : (a,b) => a+b,
    '-' : (a,b) => a-b,
    '*' : (a,b) => a*b,
    '/' : (a,b) => a/b,
    '^' : (a,b) => Math.pow(a,b)
}
// as before pushing a operator we check precedence , thats why precedence of closing bracket is set to minimum so that we just push the character

let result    = []

function infixToPostfix(exp){
    let stack = []

    for(let i=0; i<exp.length;i++){
        let char = exp[i]
        // console.log(Number.isInteger(parseInt(char)))
        if(Number.isInteger(parseInt(char))){
         
            result.push(char)
        }
        else if( OPEN_BRACKET.includes(char) ){
            stack.push(char)
        }else if(CLOSE_BRACKET.includes(char)){

            while(!( OPEN_BRACKET.includes(stack[stack.length-1]))){
                result.push(stack[stack.length-1])
                stack.pop()
            }
            
            stack.pop()
        }else {
            while(stack.length != 0 && PRECENDENCE[char]< PRECENDENCE[stack[stack.length-1]]){
                result.push(stack[stack.length-1])
                stack.pop()
            }
            stack.push(char)
        }
    }

    while(stack.length!= 0){
        result.push(stack[stack.length-1]);
        stack.pop();
    }
}

function evaluatePostfix(result){
    let stack =[]
    for(let i=0;i<result.length;i++){
        let char = result[i]
      
        if(Number.isInteger(parseInt(char))){
            stack.push(parseInt(char))
        }else{
            let val1=stack[stack.length-1]
            stack.pop()
            let val2=stack[stack.length-1]
            stack.pop()

            stack.push(operation[char](val2,val1))
        }
    }
    return stack[stack.length-1];
}

// infixToPostfix('(6+7*8)')

// infixToPostfix('1+2*3+4')
infixToPostfix('(6+2*3)/2')  // add a validator for input string
console.log(result)

console.log(evaluatePostfix(result))



