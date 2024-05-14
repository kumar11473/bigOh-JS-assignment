                                    // Json Manipulation Ques-1
const source =
[
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ]

  ///////--------------------------

  
  // below code  can manipulate the source.json with different number property also.
  
  
  const result = {}
  
  for(const obj of source){

    if( !(obj.batch_id in result)){
        result[obj.batch_id]=[] 
        
    }
    let temp={}
        let key_array=Object.keys(obj)
        for(let i=1;i<key_array.length;i++){ 
            let key=key_array[i];   
            temp[key]=obj[key];
        }         
        result[obj.batch_id].push(temp)
  }
    
  console.log(JSON.stringify(result))


  // Review points
  //   1.) optimise 
  // 2.) naming   -> done




  // below code only manipulate the given source.json syntax
//   for(let obj of source){
//         let temp={};

//         temp.name=obj.name;    // in "temp.name" name is hardcoded  if you want property as per given json , use-> temp[variable]=obj[variable] where temp is new temporary object and obj is object of given source.json
//         temp.contact=obj.contact;
  
//         result[obj.batch_id].push(temp)

//   }
