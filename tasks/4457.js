                // deepClone an object
const obj1={
    key1:5,
    key2:{
        a:2,
        b:4
    }

}

const obj2={
    key1:5,
    key2:{
        a:2,
        b:[1,2,3]
    }

}


const ankit = {
    'ankit':'saini',
    'age':'20',
     item:{
        'ankit':'saini',
        'age':'20'
     },
     d:[2,3,{4:"ankit",5:"saini"}]
}


const isObject = (obj) =>{
    return (obj != null && typeof obj === 'object')
}

const isArray= (obj) =>{
 return Array.isArray(obj);
}

function deepCopy(obj){
    let tempObj;
    if(isArray(obj) == true){
        tempObj = [];
    }
    else{
        tempObj = {};
    }
    for(let key of Object.keys(obj)){
        if(isObject(obj[key])){
            tempObj[key] = deepCopy(obj[key])
        }
        else{
            tempObj[key]=obj[key];
        }
    }
    return tempObj
} 

const shallowCopiedObject = deepCopy(ankit);


shallowCopiedObject.item.age=30

// console.log('------------------')
// shallowCopiedObject.key1=10
// obj.key2.b[2]=199

// console.log(obj2)
// shallowCopiedObject.key2.b[2]=100;


console.log(ankit)
// console.log(shallowCopiedObject);
const obj22 = ankit;
obj22.item.ankit = 'st';
console.log(obj22);


