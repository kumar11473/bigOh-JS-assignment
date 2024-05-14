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
const isObject = (obj)=>{
    return (obj !== null && typeof obj === 'object')
}

  function jsonManipulation2(obj){
    const tempObj={}

    for(key of Object.keys(obj)){
        if(isObject(obj[key])){
                    // not completed
        }
    }

    return tempObj
  }


  const newJSON = jsonManipulation2(source);

  console.log(newJSON);

