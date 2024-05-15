


// let a=null;
// let b={
//   x:3,
//   y:4
// }
// let x=['a',5];
// console.log()

// ['number','boolean','string','Symbol']

const PRECENDENCE   = {
  '^' : 5,
  '/' : 4,
  '*' : 3,
  '+' : 2,
  '-' : 1
}

// console.log(PRECENDENCE.hasOwnProperty('-'));

const CLOSE_BRACKET = [']','}',')']

// console.log(CLOSE_BRACKET.includes('+'))

// console.log(Number.isInteger(parseInt('d')))



const rows = 3;
const cols = 4;

// Initialize the 2D array with -1 values
let array2D = Array.from({ length: rows }, () => Array(cols).fill(-1));

// Print the initialized 2D array
// console.log(array2D);

// let a =1e9;
// console.log(a)

// const obj = {
//   a:1,b:2,c:3

// }

// const obj = [5,2,3]
// for(let ind in obj){
//   console.log(ind)
// }


// console.log(fun(3))
// function fun(a){ return a+2;}


// console.log(a)
// var a=2; var a ; a=2



//------------------------------------------------------------------------

// let x = [
// ["name",23],['sushnn',3],['john',33]
// ]

// let maxi=-1
// x.forEach((ele)=>{

//   maxi=Math.max(maxi,ele[1])
  
// })

// console.log(maxi)

const arr = [1,2,3,4,5]
// const arr = 

// let sum =arr.reduce((prev,curr,i)=>{
//   console.log(i)
//     return (prev+curr)
// },[0])

// console.log(sum)
// let arrr=[5]
// const cat =  arrr+1; 
// console.log(cat)  // 51  (array + interge == concatanated string)


/// --------------------- excercise

const data = [
  {
    id:1,
    name:'john'
  },
  {
    id:2,
    name:'roy'
  },
  {
    id:7,
    name:'jack'
  },
  {
    id:3,
    name:'tom'
  },
  {
    id:9,
    name:'tony'
  }
]

const newData = data.map((obj)=>{
  if(obj.id>5){
    obj.dob='1/12/2002'
    return obj;
  }
  return obj
})


console.log(newData)
