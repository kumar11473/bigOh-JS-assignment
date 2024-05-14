
// ------------------------ destructuring assisgnment -------------------------------

// .se bachne k liye kaam ata hai
// const arr= [10, 20,{x: 30, y: 40,z: 50}]

// const [a=4,b,c]=arr
// console.log(a,b,c)

// const [a, b, ...{x,y,z}] = arr   // 10 20 undefined undefined undefined

// const [a, b, {x,y,z}] = arr   // 10 20 30 40 50

// console.log(a,b,x,y,z)

// let p,q,r ;
// [p,q,r]= arr
// console.log(p,q,r)

const obj ={a:10,b:20,c:30};

// const { a: a1, b: b1 } = obj;        /// <----------------------

// const {a:a1,b:b1,...rest}= obj   // 10 20 10 20 { c: 30 }
// console.log(a,b,a1,b1, rest)

const arr= [10, 20,{x: 30, y: 40,z: 50}]

// let a,b,push,pop
// [a, b, ...{ pop, push }] = arr;      // <--------------- doubt

// console.log(a,b,push,pop)

// const o = { p: 42, q: true };
// const { p: foo, q: bar } = o;

// console.log(foo); // 42
// console.log(bar); // true


            //   destructuring in function parameter
// function userDisplayName({ displayName: dname }) {
//     return dname;
//   }
//   let user ={
//     displayName:"sushantt"
//   }
//   console.log(userDisplayName(user));




// function whois({ displayName:nme, fullName: { firstName: name } }) {
//     return `${nme} is ${name}`;
//   }

//   let user={
//     displayName:"sushat",
//     fullName:{
//         firstName:"kumar "
//     }
//   }
  
//   console.log(whois(user));  sushat is kumar


function drawChart({cords={x:0,y:0},size=1}){

    console.log(cords,size)
}


  let para ={
   cords:{x:10,y:20},
    size: 35
  }
  const {cords}=para
//   console.log(cords)
//   drawChart(para);



  // --- important descructuring 

  const metadata = {
    title: "Scratchpad",
    translations: [
      {
        locale: "de",
        localizationTags: [],
        lastEdit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
      },
    ],
    url: "/en-US/docs/Tools/Scratchpad",
  };
  

  const {
    title: englishTitle, // this enlishTitle take the value of corresponding title from the metadata object
    translations: [
      {
        title: localeTitle, // rename
      },
    ],
  } = metadata;
  
//   console.log(englishTitle); // "Scratchpad" 
//   console.log(localeTitle); // "JavaScript-Umgebung"
 
  // note : if we desctructor like title:englishTitle(here englisTitle is a varible) then corresponding value is assigned to englishTitle variable and
  //     if we desctructor only by writing title then corresponding value is assigned to title

//   console.log(title) // <-------------------- why title is not accessing here but in line 78 chords are acceessible
  



//   -----------------
// const { a } = undefined; // TypeError: Cannot destructure property 'a' of 'undefined' as it is undefined.
// const { b } = null; // TypeError: Cannot destructure property 'b' of 'null' as it is null.
// let arr2=[undefined]

// const {a}=arr2
// console.log(a) // undefined 

// note: if undefined is inside a object or array then no erro but if we try to destructure a undefined then error occur


let arr3=[1,2,3]

// let {a,b,c}=arr3  undefined undefined undefined
let [a,b,c,length]=arr3
// console.log(a,b,c,length)





// -------------------------------------  Rest and spread operator  ----------------------------
function func(a){
    console.log("inside 1 para func")
    console.log(a)
}

function func(a,b,...args){
    "use strict"    //SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
    console.log("inside 3 para func")
    console.log(a,b,args);
}


// whichever func is written in lowest part will be called upon calling func() with any number of parameter
func(1,2,{a:2,b:3}) // 1 2 [ { a: 2, b: 3 } ]
func(1,2,[1,2,3])  //   1 2 [ [ 1, 2, 3 ] ]
// output : inside 3 para func 1 undefined [] 
//  because The reason for the “undefined” in the output is: In JavaScript,
//  if two functions are defined with
//  the same name then the last defined function will overwrite the former function. 

