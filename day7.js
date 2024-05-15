// ------------------------------   JSON ----------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

const obj = {
    name:'john',
    age: 29,
    hobbies:['cricket','tt'],
}

const json={
    "name":'john',
    "age":29,
    "hobbies":["cricket","tt"],
}

const newJson ={"name":"john","age":29,"hobbies":["cricket","tt"]}
// console.log(newJson)    // { name: 'john', age: 29, hobbies: [ 'cricket', 'tt' ] } it is still in js object format

const parse = JSON.stringify(obj)  // convert js object to json string 
// console.log(parse)
// console.log(json)


// const parsedJson = JSON.parse(parse);
// console.log(parsedJson)
// delete parsedJson.name;    // works with js object and not with json
// console.log(parsedJson)



console.log( "parse")


const employee = {
    "name": "Rajveer",
    "department": {
        "name": "Engineering",
        "location": "India"
    },
    "projects": [
        { "name": "Project A", "status": "In Progress" },
        { "name": "Project B", "status": "Completed" }
    ]
};

console.log(typeof parse) // object

console.log(employee.department.name);  // Output: Engineering
console.log(employee["projects"][0].name);  // Output: Project A
