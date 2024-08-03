//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// createMultiplier is a Higher Order Function here the create Multipler is returning a function
// We can also assign a function to a variable

//1.
function higherOrder(fn) {
    fn();
  }
     
higherOrder(function() { console.log("Hello world") });  


//2
 
document.addEventListener("click",ourAmazingFunction);

function ourAmazingFunction(){
    alert("Thank You for clicking me.")
}



//3.
function createMultiplier(multiplier){
    return function(x){
        return x * multiplier;
    }
}


let doubleMe = createMultiplier(2);
let tripleMe  = createMultiplier(3);
let quadrupleMe = createMultiplier(4);


document.write(doubleMe(5));
document.write(tripleMe(7));
document.write(quadrupleMe(8));









