
let arr=[1,,3,4,5]
// console.log(arr['2'])  // 3   index value can be string format also 
// console.log(arr['02'])  // undefined


const filledArray = new Array(5).fill(0);
// console.log(filledArray)

// const obj = {
//     a:1,
//     b:2,
//     c:3
// }

// console.log(obj.join())

                                 //------------- splice ---------------
// use to modify the same array, splice(from where deletion should begin, no. of items you want to delete, new element with which you wnat to replace deleted item)
// return an array which contain deleted item
// modify the same array inplace
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


const sliceArr= arr.slice()

// console.log(sliceArr)

const month=['john','ray','jack','tom'];
// month.splice(0,2,'ben')  // [ 'ben', 'jack', 'tom' ] delete 2 elements from 0 index and replace it with 'ben'
//  month.splice(2,1,'johnson');  // [ 'john', 'ray', 'johnson', 'tom' ]

// month.splice();  // given array remains as it is (return empty array)


// month.splice(2);   // remove all the elements from mentioned index (including)

// let deletedItemArray = month.splice() 
// console.log(deletedItemArray)
// console.log(month)  

// console.log(month.splice(0,2,'asdf','fffff','assee','eetewe')) // here from 0 2 elements are deleted and in place of that 4 elements inserted
console.log(month)

// ------------------------------------------------ slice()-------------------------

// slice()
// slice(start)
// slice(start, end)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice())



// ---------------------------------------indexOf---------------------------------

// indexOf() uses strict equality
// indexOf(searchElement)
// indexOf(searchElement, fromIndex) // if fromIndex > arr.length => return -1

// console.log(month.indexOf('ray',2))  -1

// const Component= ()=>{

// const [var,setVar] = useState();


//     useEffect(()=>{
//         console.log('mounting')
//     },[])

//     return (<></>)
// }


const obj ={
    num1:0,
    num2:1,
    num3:2
}


// let sum=0
// for(let [key,value] of Object.entries(obj)){
//     console.log([k])
//     sum+=value
// }
 const value =[['num1',1] ,['num2',2], ['num3',3]]

// let arr2=[1,2,3,4]

// reduce((sum,curr,i,arr2)=>{
//     console.log(i)
//     ar.push(sum)
//     return sum+curr
// })

// console.log(ans)
// console.log(ar)

let arr2=[1,20,3,48]

// arr2.unshift([1,2,5]) // push from front
// arr.shift() // pop from front

// console.log(arr2)

// arr2.forEach((element, ind,self)=>{
//     console.log(arr2)
//     console.log(self)
//     console.log("-----------------------")
//     // console.log(element, i)
// })

