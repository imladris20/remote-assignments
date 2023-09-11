/* Assignment 3: Function, Array, and Object
Complete the function below to calculate the total price of all products after applying a
discount.
*/

const calculate = (data) => {

    let originTotal = 0;    /* 這個如果用const 就會沒辦法更動數值，對吧 */

    data.products.forEach( currentValue => {
        originTotal += currentValue.price;
    } )

    return originTotal*(1-data.discount);

}
const discountedPrice = calculate({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});
console.log(discountedPrice); // show the total price of all products after applying a discount

/* 另外練習用array.reduce 的第二種解法

const calculate = (data) => {
    let prices = [];    // 這個如果用const的話，應該還是可以push對吧？

    data.products.forEach( currentValue => {
        prices.push(currentValue.price);
    })

    return data.discount * (prices.reduce((accu, cur) => {
        return accu+cur;
    }, 0))
}
*/