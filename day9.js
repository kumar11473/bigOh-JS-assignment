// ------------------- settimeout 
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#param1

/*
setTimeout does not guarantee exact timing. The delay is a minimum time to wait before executing the code, 
but actual execution may be delayed by other tasks in the event loop.

*/

// const greet = (arg1,arg2)=>{
//     // console.log("inside greet function ")
//     console.log(arg1,arg2)
// }

// let arg1='tom'
// let arg2='hardy'
// //setTimeout(greet(arg1,arg2), 1000);   //  error : The "callback" argument must be of type function. Received undefined
//  const timeoutId= setTimeout(greet, 1000,arg1,arg2); // tom hardy
// console.log(timeoutId)
// console.log(setTimeout(()=>{console.log("inside second timeout")},2000))

// the timeoutId : in Node.js, this value is an object, while in a browser, it is a numeric ID.

// -> The timeout can also fire later than expected if the page (or the OS/browser) is busy with other tasks.
//  One important case to note is that the function or code snippet 
// cannot be executed until the thread that called setTimeout() has terminated. For example:


// function foo() {
//   console.log("foo has been called");
// }
// setTimeout(foo,1);
// console.log("After setTimeout");


/*
After setTimeout
foo has been called

This is because even though setTimeout was called with a delay of zero, 
it's placed on a queue and scheduled to run at the next opportunity; not immediately. 
Currently-executing code must complete before functions on the queue are executed,
 thus the resulting execution order may not be as expected.
*/



function callback(thisArg){
    console.log('inside callback of set time out  ')
    console.log(thisArg)
}

function timeoutCaller(){
   
    console.log('inside the timeout calller  function calling settimeout  ')

    // console.log(this)
    setTimeout(callback,2000,this);
}


timeoutCaller();

// to read
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#callbacks