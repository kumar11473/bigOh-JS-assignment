

const obj1={
    foo:5,
    bar:{
        a:2,
        b:7
    }
}

const obj2={
    foo:5,
    bar:{
        a:2,
        b:3
    }
}

const isObject = (obj) =>{
    return (obj != null && typeof obj === 'object')
}

function assertObjectEqual(obj1,obj2){

    let obj1_keys = Object.keys(obj1)
    let obj2_keys = Object.keys(obj2)

    if(obj1_keys.length !== obj2_keys.length) return false;

    for(let key of obj1_keys){
        let value1=obj1[key]
        let value2=obj2[key]

        const is_Both_Objects=(isObject(value1) && isObject(value2))

        if(!is_Both_Objects && (value1!==value2)) return false;
        if(is_Both_Objects && (!assertObjectEqual(value1,value2))) return false;


    }
    return true;

}

console.log(assertObjectEqual(obj1,obj2));












// const primitive_type=['number','boolean','string','Symbol']

// function assertObjectEqual(obj3,obj4){

//     if((typeof obj3)===(typeof obj4) && (obj3 in primitive_type) && obj3===obj4) return true;

//     for(let [key,value] of Object.entries(obj3)){
       
//         if((key in Object.keys(obj4)) && (value==obj4[key]))
//             return assertObjectEqual([key,value],[key,value])
//     }
//     return false;

// }



// if(assertObjectEqual(obj3,obj4)){
//     console.log("Passed")
// }else{
//     console.log("Failed " + "Expected "+ JSON.stringify(obj3)+ " , but got "+JSON.stringify(obj4));
// }

