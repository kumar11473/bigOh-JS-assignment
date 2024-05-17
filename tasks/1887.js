            // Generate query string url





    const key_value_obj={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
}

let url="https://localhost:4000"

        
// for(let i in obj){
//     console.log(i,obj[i]);  // keyOne value One 
// }


// let flag=false;
// // use inbuild methods,map,join,Object
// for(let [key,value] of Object.entries(obj)){    // [key,value] ->it is an array or what??
//     if(flag){
//         url=url+"&"+key+"="+value;
//     }
//     else{
//         url=url+"?"+key+"="+value;
//         flag=true;
//     }
// }

function queryParaConverter(url,obj){
    url+='?'
    const keyArray = Object.keys(obj)
    let n=keyArray.length-1
    return  keyArray.reduce((prevVal,initial)=> prevVal +initial+"="+ obj[initial]+ ( keyArray[n]!== initial ? '&':'') ,url)
}


console.log(queryParaConverter(url,key_value_obj));


//pure function


