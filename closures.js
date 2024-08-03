let globalNum = 5;

function localNum(){
   const localNum = 1;
   console.log(globalNum  + localNum);
}
globalNum = 6;
localNum();


// Lexical Scoping which simply means that function have access to their parents scope


// Closure 
// There is access in a function to the outer scope within the inner function 
// And this is created when the function is declared and not when the function is called

function example(){
     const num = 5;

     function logNum(){
        console.log(num);
     }
     logNum()
}

example();
//Output : 5


function example(){
    const num = 5;

    return function (){
       console.log(num);
    }
}

const innerFunction = example();

innerFunction();
//Output: 5
//In other languages "num" would have been garbage collected but here in javascript, 
//this anonyms function creates a closure and it keeps access to its parents scope 
// the const num is going to exists as long as this anonyms function exists


function makeFunction() {
    let privateNum = 0;
    function privateIncrement(){
        privateNum++;
    }

    return {
        logNum:() => console.log(privateNum),
        increment:() =>{
           privateIncrement();
           console.log("Incremented");
        } 
    }
}

const { logNum , increment } = makeFunction();
const { logNum:logNum2 , increment:increment2 } = makeFunction();

logNum();
increment();
logNum();

logNum2();


//privateNum and privateIncrement that are part of this closure become local to the environment created at the exceution 
// time of the makeFunctions()


// lognum and logNum2 are different, the reason is that logNum and logNum2 were created in different calls to the makeFunctions function
// logNum and logNum2 have different parent environment



for (let i =0 ; i < 3; i++) {
   console.log(i)
}

Output: 0,1,2,


for (let i =0 ; i < 3; i++) {
    setTimeout(()=>{
        // this function is creatinga closure
        console.log(i);
    },500);
 }
 
 Output: 0,1,2;


 for (var i =0 ; i < 3; i++) {
    setTimeout(()=>{
        // this function is creating a closure
        console.log(i);
    },500);
 }
 
 Output: 3,3,3


 // let is block scoped
 // it creates a new version of the variable with the each iteration of the loop


// var is function scoped 
// We are using the same var variable i in each iteration , there is no way to create a new verions var i for individual iteration of the loop
// Even if we have 3 different closures each poiting to the same i variable



 
 