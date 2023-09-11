/*
Assignment 5: Algorithm (Advanced Optional)
Given an array of integers, return indices of the two numbers such that they add up to a
specific target. You may assume that each input would have exactly one solution, and you
may not use the same element twice.
*/

/**  以下是利用 object map 的解法 */
//   Time complexity = O(n)

function twoSum(nums, target) {

    const numMap = {};
    let indices = []    //  應該用const，array跟object只是不能重新賦值
    let found = false;  //  這邊用let應該是對的？

    nums.forEach( (value, index) => {

        let complement = target - value;    //  這邊用let應該也是對的？
        
        if (found){
            return;
        } else if (complement in numMap) {
            indices.push(numMap[complement], index);
            found = true;
        } else {
            numMap[value] = index;
        }
    })

    if (found){
        return indices;
    } else {
        throw Error("It is not possible to add up numbers in array to the target.");
    }
}

twoSum([2, 7, 11, 15], 9);
twoSum([0, 3, 3, 3], 6);
twoSum([-9, 6, 2, 0], -9);
twoSum([1, 2, 3, 4], 10);



/**  以下是暴力解法 */
//   Time complexity = O(n^2)

const twoSumBruteForce = (nums, target) => {

    let indices = [];
    let found = false;

    nums.forEach( (currentValue, index, array) => {
        array.forEach( (cur, ind) => {
            if ( index !== ind && (currentValue + cur === target) && found===false ) {
                indices.push(index, ind);
                found = true;
            }
        })
    })

    if (found){
        return indices;
    } else {
        throw Error("It is not possible to add up numbers in array to the target.");
    }
}

twoSumBruteForce([2, 7, 11, 15], 9);
twoSumBruteForce([0, 3, 3, 3], 6);
twoSumBruteForce([-9, 6, 2, 0], -9);
twoSumBruteForce([1, 2, 3, 4], 10);
