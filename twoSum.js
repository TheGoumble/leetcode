// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/

var twoSum = function (nums, target) {
  
    // Loop throught the index
  for (let i = 0; i < nums.length; i++) {

    //now check if the index can be sum with the other index with a loop 
    for(let x = 0; x < nums.length - i; x++){
        if(num[i]+num[x] === target){
            let x = [i, x]
            return x
        }
    }
  }
}


