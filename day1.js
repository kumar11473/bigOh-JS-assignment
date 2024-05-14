// console.log(Number.MIN_VALUE)



// console.log(obj);

                        // name property collison

    // let user={
    //     name:'sushant',
    //     [Symbol('age')]:23
    // }

    // console.log(user)
    // user.age=0;
    // console.log(user)


                        // creating unique key property (almost same thing as name property collion)
/*
let key= Symbol('key');
let obj ={};
obj[key]="assd";

console.log(obj)
obj.key='ertt';
console.log(obj)

obj[key]="assdff" // value of the symbol changed
console.log(obj)

*/


                                                // arrays and objects are always passed as reference
/*

function a(arr){
    arr[0]= 10;
}
let ar=[1,2,3]
console.log(ar);
a(ar)
console.log(ar)

output: 
[ 1, 2, 3 ]
[ 10, 2, 3 ]

*/

                                            //let var const


/*
var greeter = "hey hi";
function newFunction() {
    
    if(true){
        var hello="greet";  // var have function scope
    }
    console.log(hello)
}

newFunction()

*/


        // let and var 

function let_func(){
    let str='hiiiii';

    if(true){
        let str='noooo';
        console.log(str)
    }

    console.log(str);
}

function Var_func(){
    var str='hiiiii';

    if(true){
        var str='noooo';
        console.log(str)
    }

    console.log(str);
}


let_func();




const obj={
    name:"kumar",
    age:122
}

        // we can't do this
   
    //     obj={
    //     name:"john",
    //     age:123
    // }

    // but we can do this

obj.name='john'




                //  == and === 

// let a=2;
// a=4;
// let b=true;

// if(a===b) console.log("equal")
//     else console.log("not equal")


/*
let firstName = Symbol("firstName");
let lastName = Symbol("firstName");

const person = {};

// Assigning a value to a property using Symbol as the key
person[firstName] = "John";
person[lastName] = "John"

console.log(person[firstName]); // Output: "John"

*/



/*

function updateComponents(routes, subscription) {
  const updatedRoutes = [];

  for (const route of routes) {
    const subMod = subscription.find(sub => sub.name === route.name);

    if (!subMod || (subMod && !subMod.isSub)) {
      // Module not subscribed or not present in subscription
      if (route.comp) {
        route.comp = 'UN';
      } else if (route.subComp) {
        for (const subComp of route.subComp) {
          subComp.comp = 'UN';
        }
      }
    }

    if (route.subComp) {
      // Recursively update sub-components
      route.subComp = updateComponents(route.subComp, subMod ? subMod.subMod : []);
    }

    updatedRoutes.push(route);
  }

  return updatedRoutes;
}

// Update components based on subscription
const updatedRoutes = updateComponents(routes, subscription);
console.log(updatedRoutes);


 while((stack.length != 0 && (PRECENDENCE[char]< PRECENDENCE[stack[stack.length-1]]) )
             || (stack.length!= 0 && PRECENDENCE[char] == PRECENDENCE[stack[stack.length-1]])){
                result.push(stack[stack.length-1])
                stack.pop()
            }
            stack.push(char)


*/