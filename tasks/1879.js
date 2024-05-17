// json manipulation 2

const source={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
      }
    }
  }     

  const source2={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
    },
    "keyFive":"value Five"
  } 

  
const result ={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree":"value Three",
    "keyFour.keyA": true,
    "keyFour.keyB": false,
    "keyFour.keyC.keyCOne": "key C one value",
    "keyFour.keyC.keyCTwo": "key C two value",
    "keyFour.keyC.keyCThree": 1234 
  }
const arrayData =[1,2,3,4,5]

const TYPES = ['integer','boolean','string','null','undefined','Symbol']

const validator = (data)=>{
  return (TYPES.includes(data))
}

const isObject = (obj,type)=>{
  // validator functions, fn(data,'type')=> true/false ['object','',..........].includes(typeof object);
    return (obj!= null && typeof obj=== type)
}

  function jsonManipulation2(obj,type){
    
    const tempObj={}
    for(let key of Object.keys(obj)){

        if(!isObject(obj[key],type)){
          tempObj[`${key}`]=obj[key];
        }
        else{
              let tempObj2=jsonManipulation2(obj[key],type)
              for(let subKey of Object.keys(tempObj2)){
                tempObj[`${key}.${subKey}`]=tempObj2[subKey];
              }
        }
    }
    return tempObj
  }




  let newJSON;
  if(validator(source)){
    newJSON ='json manipulation doesn\'t work on  primitive data types'
  }else{
    newJSON = jsonManipulation2(source,'object');
  }

  console.log(JSON.stringify(newJSON));

