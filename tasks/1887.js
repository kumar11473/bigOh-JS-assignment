            // Generate query string url
const obj={
    "keyOne": "value One",
    "keyTwo": "value Two",
    // "keyThree": "value Three",
}

let url="https://localhost:4000"

        
// for(let i in obj){
//     console.log(i,obj[i]);  // keyOne value One 
// }


let flag=false;
for(let [key,value] of Object.entries(obj)){    // [key,value] ->it is an array or what??
    if(flag){
        url=url+"&"+key+"="+value;
    }
    else{
        url=url+"?"+key+"="+value;
        flag=true;
    }
}

console.log(url);


//pure function