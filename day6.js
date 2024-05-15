 // -----------------asynchronous programming----------------------------------

 /*
  Synchronous programming - complete one task before moving on to the next, it can be problamatic when certain 
task take much time to execute

Here's how asynchronous programming works within a single-threaded environment:

->Event Loop: JavaScript environments, such as web browsers or Node.js, utilize an event 
loop to manage asynchronous operations. The event loop continuously checks for tasks to execute from a task queue.

->Non-blocking I/O: When an asynchronous operation is initiated, such as fetching data from a server or
 reading a file, it doesn't block the main thread. Instead, the operation is delegated to the browser's or Node.js's 
 internal APIs, which handle the operation asynchronously. This allows the main thread to continue executing other tasks 
 without waiting for the asynchronous operation to complete.

->Callback Queue: Once an asynchronous operation completes, its corresponding callback function is 
placed in the callback queue. The event loop then picks up these callback functions from the queue and
 executes them in the order they were added.

->Execution Context: Each callback function executes within its own execution context, which includes the function's scope chain,
 variable environment, and this binding. This ensures that each callback function runs with the correct context and doesn't 
 interfere with the execution of other code.

->Microtask Queue: In addition to the callback queue, modern JavaScript environments also have a microtask queue.
 Microtasks are higher-priority tasks that are executed before the next tick of the event loop. Promises and async/await are
  examples of constructs that use microtasks.

*/

// function someLongRunningFunction() {
//     let start = Date.now();
//     while (Date.now() - start < 5000) {
//         // do nothing
//         // console.log("running")
//     }
//     return "Hello";
// }

// console.log('Starting...');

// let result = someLongRunningFunction();
// console.log(result);

// console.log('...Finishing');



//-------------

// does passing a callback to any function make it async function?
// here func is asynchronous or only setTimeout is ?
// saty -13500
// a nag -9k

/*

function func(callback){
    console.log("inside async begin") //2
    setTimeout(()=>{
        console.log("inside set time out"); //7
        callback("inside settimeout , final line") // 8
    },3000)
    console.log("inside async end")//3
    
    callback("callback called again") //4
    
}


function callback(str){
    console.log(str)
}

console.log('before asyn func called')  //1
func(callback)
console.log('after async called') //6

*/

//-----------------------------------Promise ------------------------------

/*
->A promise in JavaScript is a placeholder for a future value or action. By creating a promise,
 you are essentially telling the JavaScript engine to "promise" to perform a specific action and 
 notify you once it is completed or fails.

->To create a promise, you'll create a new instance of the Promise object by calling the Promise constructor.

->The constructor takes a single argument: a function called executor. The "executor" function is called immediately when the promise 
is created, and it takes two arguments: a resolve function and a reject function.
 */

// const myPromise = new Promise((resolve,reject)=>{

//     resolve('data from resolve status');
//     console.log("b/w resolve and reject");
//     // reject("error message send kr du")
// })

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log("inside catch", err)
// }).finally((data)=>{
//     console.log("inside final" ,data )
// })

/*
promise chaining -> output of one then() is used as input of other then()
-> The linking of the promises is achieved using the then() method. This method uses a callback function 
as an argument and returns a new promise. 
The new promise is then resolved with the value returned by the callback function.


-> It's important to keep in mind that .then methods are executed asynchronously and in order, each one waiting for 
the previous one to be resolved, 
and that the returned value of each .then will be passed as an argument to the next one.


 Promise.all()


*/


// ----------------------------------------- Async / await -------------------------------

/*

->async is a keyword that is used to declare a function as asynchronous.
->await is a keyword that is used inside an async function to pause the execution of the function until a promise is resolved.

    // ----------------------------- try ...catch ------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
try...catch
try...finally
try...catch...finally


Unlike other constructs such as if or for, the try, catch, and finally blocks must be blocks, instead of single statements.
-> in catch () You can use a destructuring pattern to assign multiple identifiers at once.

*/


// try {
//     // error like typeError and EvalError has property name and message 

//     throw new ('hj')
//   } catch ({ name, message }) {
//     console.log(name); // "TypeError"
//     console.log(message); // "oops"
//   }
  


// If you don't need the exception value, you can omit it along with the enclosing parentheses.

// function isValidJSON(text) {
//   try {
//     console.log("inside try")
//     // JSON.parse(text);
//     return 'true';
//   } catch {
//     return false;
//   }finally{
//     console.log("inside finally")
//   }
// }



// console.log(isValidJSON("sushhhh"))
// inside try
// inside finally
// true

// finally always executes after try or catch block executes 


// ----------------- nested try catch block

// if error is catched in nest catch() block the main catch block will not execute.
// Any given exception will be caught only once by the nearest enclosing catch block unless it is rethrown

// If the finally block returns a value, this value becomes the return value of the entire try-catch-finally statement, 
// regardless of any return statements in the try and catch blocks.
//  This includes exceptions thrown inside of the catch block

// try{

//     try {
//         console.log("inside try block")
//         throw 'error aa gya'
//     } catch (error) {
//         console.log('inside nested catch')
//         console.log(error)
//     }

// }catch(err){
//     console.log('inside main cathch')
//     console.log(err)    
// }

// output:
// inside try block
// inside nested catch
// error aa gya

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData(){
    
    const response = await fetch(URL);
    const data =  await response.json();
    console.log("first")
    console.log(data)
    console.log("second")
}


// console.log()
fetchData();



