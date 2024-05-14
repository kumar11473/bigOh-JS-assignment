
let str='123456789'
let ar=[]


            // is ojbects are non-iterable??
// let str1={
//     a:34,
//     b:87,
//     c:90
// }


// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }


// for(let x of str){   // x contain the elements of the iterable object
//     ar.push(x)
//     // console.log(...x)
// }

// for(let x in str){   // x contain the indexes of iterable ojbects (array,list,map,string , map)
//     ar.push(x)
// }


// console.log(ar)  // ['1','2','3','4','5','6','7','8','9']
// console.log(...ar)  // 1 2 3 4 5 6 7 8 9


let add = (a,b)=>{
    let c=a+b;
    
}


console.log(add(3,4444))



// ---------------NOTES----------------------

/*
note that the order of iteration is not guaranteed, as JavaScript objects are inherently 
unordered collections of key-value pairs. 
If you need guaranteed order, consider using arrays instead.

*/