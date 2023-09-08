/*
Assignment 5: Algorithm (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a
specific target. You may assume that each input would have exactly one solution, and you
may not use the same element twice.
function twoSum(nums, target) {
// your code here
} 

For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0] + nums[1] is 9
*/

/* 以下是暴力解法 */
/* time complexity = o^n */

const twoSum = (nums, target) => {

    let indice = [];
    let found = false;

    nums.forEach((currentValue, index, array) => {
        array.forEach( (cur, ind) => {
            if (currentValue + cur === target && found===false ){
                indice.push(index, ind);
                // console.log(indice);
                found = true;
            }
        })
    })
    return indice;
}

twoSum([2, 7, 11, 15], 9);

console.log(twoSum([2, 7, 11, 15], 9));
