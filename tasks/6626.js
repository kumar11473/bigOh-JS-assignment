
        //number of ways

                // recursion
// function numberOfWays(i,tempSum,sum,arr){
    
//     if(tempSum == sum) return 1;
//     if(i==arr.length) return 0;

//     return numberOfWays(i+1,tempSum+arr[i],sum,arr)+  numberOfWays(i+1,tempSum-arr[i],sum,arr)+
//     numberOfWays(i+1,tempSum,sum,arr)
// }


                                // memoization
const shift=2000   // value of shift should be equal to value of target sum so that we can have index [-targetSum,+targetSum]
function numberOfWaysMemo(i,tempSum,sum,arr,dp){
    
    if(tempSum == sum) return 1;
    if(i==arr.length) return 0;
   
    if(dp[i][tempSum+ shift] !== 1e9) return  dp[i][tempSum+shift]
    
    return dp[i][tempSum + shift]= numberOfWaysMemo(i+1,tempSum+arr[i],sum,arr,dp)+  numberOfWaysMemo(i+1,tempSum-arr[i],sum,arr,dp)+
    numberOfWaysMemo(i+1,tempSum,sum,arr,dp)
}



let arr=[-1, 9, 8, -3, 4]
// let arr= [1,1,1,1,1]
let sum =5


let rows=15  // as n has maximum value of 15
let cols=2000 // let maximum target sum is 2000

let dp= []
for (let i = 0; i < rows; i++) {
    dp[i] = [];
    for (let j = 0; j < cols+shift; j++) {
        dp[i][j] = 1e9;
    }
}

// console.log(numberOfWays(0,0,sum, arr));
console.log(numberOfWaysMemo(0,0,sum,arr,dp))
// console.log(dp)