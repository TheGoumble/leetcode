// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
/*
@param {number[]} nums
@param {number} target
@return {number[]}
*/

// var twoSum = function (nums, target) {
//   // Loop throught the index

//   for (let a = 0; a < nums.length; a++) {
//     //now check if the index can be sum with the other index with a loop

//     for (let b = 0; b < nums.length; b++) {
//       //condition to check if the current numbers equal target

//       if (b != a && nums[a] + nums[b] === target ) {
//         return [a, b]
//        }
//     }
//   }
// }

let twoSum = (nums, target) => {
  let storageHash = {}
  let number = []
  let i = 0
  for (i in nums) {
    let addend = target - nums[i]

    if (addend in storageHash) {
      number.push(nums.indexOf(addend), i)
    }
    storageHash[nums[i]] = i
  }
  return number
}

let number = [5, 4, 4, 3]
console.log(twoSum([2, 5, 7, 11, 15], 9))
