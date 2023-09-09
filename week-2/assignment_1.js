/* Assignment 1: Function and Array
Complete the function below to find the max number of the passing array of numbers.
Reminder: you can't use built-in Math.max() or sort() to complete this assignment.
*/

const max = (numbersArray) => {
    
    numbersArray.forEach( currentValue => {
        if (currentValue > numbersArray[0]) {
            numbersArray[0] = currentValue;
        }
    })
    return numbersArray[0]; 
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));