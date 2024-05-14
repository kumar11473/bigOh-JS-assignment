        // variable length argument

const operators=['+','-','*','/']
const obj={
    '+':(...args)=>{
        let sum=0
        for(let x of args) sum+=x
        return sum
    },
    '-':(...args)=>{
        let sum=args[0]
        for(let i = 1;i<args.length;i++) sum-=args[i]
        return sum
    },
    '*':(...args)=>{
        let sum=1
        for(let x of args) sum*=x
        return sum
    },
}


console.log(obj['+'](2,3,4))
      
for( let [key,value] of obj){
    
}