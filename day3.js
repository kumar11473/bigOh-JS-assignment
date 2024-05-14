

        // you can add a scope in js enclosing something with '{}'
        //  both num are in different scope  => no error
// let num=3;
// {

//     let num=5; 
// }

// console.log(a)

// ---------------------------

// var a;
// console.log(a)  // can't access 'a' before initialization
// a=3;

// --------------------



                // closure
// example 1
function x(){
    let a=3;
    function y(){
        console.log(a)
    }
    a=10;  // this line will change the value of a while calling grab(), becoz in closure , referenced is binded with lexical scope , not the copy of data
    return y;
}

// after caliing x() , instead of destroying all the variable of x , js retained them ,  when we call grab(), the reference of variable a is still stored in grab function
// this is because of closure. Due to closure , function y keeps the reference of the variable a with itself
// let grab=x(); 
// console.log(grab)
// grab()



// example 2

// function z(){
//     let b=90
//     function x(){
//         let a=3;
//         function y(){
//             console.log(a,b)
//         }
//         a=10;  // this line will change the value of a while calling grab(), becoz in closure , referenced is binded with lexical scope , not the copy of data
//         // return y;
//         y()
//     }
//     return x;
// }

// let grab2 = z();
// grab2();


  // -----------------------callback

  // function serverRequest(str,getResults){

  //   setTimeout(() => {
  //       let query = str+"full ahiiii";
  //       getResults(query);
  //   }, 4000);
  //   console.log('below timeout function')
  // }
  
  // function getResults(data){
  //   console.log("data from server is : "+ data)
  // }
  // serverRequest("The glass is half ", getResults);




// ------------------------------- includes()



// let arr=[1,2,3,4,5]
// console.log(arr.includes(3))
// console.log(arr.includes(9))
// console.log(arr.includes(3,2)) // iterableobj.includes(searchItem, startIndex) // startIndex-> 0 based and included
// console.log(arr.includes(3,3))



                                // ----------------------- Object.keys()

  // const obj={
  //   key1:1,
  //   key2:2,
  //   key3:4
  // }

  // console.log(Object.keys(obj)) // [ 'key1', 'key2', 'key3' ]
  //   // for all primitive data type except string undefined and null , object.key() return []
  // console.log(Object.keys("laptop"))  // [ '0', '1', '2', '3', '4', '5' ]
  // console.log(Object.keys(100))   // []
  // console.log(Object.keys(null))   // error : can not convert null or undefined to object
  
  // Note :In ES5, passing a non-object to Object.keys() threw a TypeError.


// ---------------------------------------hasOwnProperty()


const obj={
    key1:1,
    key2:2,
    key3:{
      a:1,
      b:2
    }
  }

 

  if('a' in obj){
    console.log(true)
  }else console.log(false)
  // console.log(if(key in Object.keys(obj)))

 
