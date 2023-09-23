/* Assignment 2: HTML DOM and AJAX

Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
response data in the page. You may render UI with any style.
function ajax(url) {
// your code here
}
function render(data) {
// your code here
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
render(data);
});
// you should get product information in JSON format and render data in the page

*/


function ajax(url) {
  return fetch(url)
    .then( response => response.json())
}

function render(data) {
  const dataStringify = data
    .map( ({name, price, description}) => `<h1>產品名稱： ${name}</h1><h2>價格： ${price}元</h2><h3>產品介紹： ${description}</h3><br>`)
    .reduce( (accu, curr) => accu+curr )
    
    document.querySelector('body').innerHTML = dataStringify;
  }
  
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then( (data) => {
  render(data) 
});