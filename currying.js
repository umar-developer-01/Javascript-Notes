// 1 . 
//Currying is a functional programming technique used to transform a function that takes multiple arguments into a sequence of functions, each taking a single argument.

function curriedSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(curriedSum(1)(4)(8));

// 2. 

function sum(a,b,c){
    return a+b+c;
}

function subtract(a,b,c){
    return a-b-c;
}



function curry(func){
    return function (a){
        return function(b){
            return function(c){
                return func(a+b+c)
            }
        }
    }
}


const curriedSum = curry(sum);
const curriedSubtract = curry(subtract);

console.log(curriedSum(1)(4)(8));
console.log(curriedSubtract(1)(4)(8));


//3. 

function curry(func){
    return (a) => {
        return (b) => {
            return (c) => {
                return func(a+b+c)
            }
        }
    }
}

//4. Implicit returns
function curry(func){
    return (a) => (b) => (c) =>func(a+b+c)
}


//4. 

const calculatePrice = tax => discount => price => price + tax - discount;

const priceWithTax = calculatePrice(10); // tax is 10
const priceWithTaxAndDiscount = priceWithTax(5); // discount is 5
const finalPrice = priceWithTaxAndDiscount(100); // price is 100

console.log(finalPrice); // 105

// In this example:

// calculatePrice(10) creates a function that takes a discount.
// priceWithTax(5) creates a function that takes a price.
// priceWithTaxAndDiscount(100) calculates the final price.
// Currying simplifies function management and helps in creating more modular and reusable code.


//5.
// Configuring API Requests
// Currying can help build functions for API requests where certain parameters are often fixed.
const makeRequest = (method) => (url) => (headers) => (body) => {
    return fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
    }).then(response => response.json());
};

// Usage:
const postRequest = makeRequest('POST');
const sendPost = postRequest('https://api.example.com/data');
const requestWithHeaders = sendPost({ 'Content-Type': 'application/json' });
requestWithHeaders({ key: 'value' }).then(response => console.log(response));


// 6.
const power = (exponent) => (base) => Math.pow(base, exponent);

// Usage:
const square = power(2);
const cube = power(3);

console.log(square(4)); // 16 (4^2)
console.log(cube(2));   // 8  (2^3)