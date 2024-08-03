// state -> pending , filfilled and rejected
// Promise constructor 
// resolve and reject parametres are both functions
// these are the functions that can be used to change the state
1. Resolved
const promise = new Promise((resolve,reject) =>{
    resolve(2);
})

console.log(promise);
Value => Promise { 2 }

2. Pending
const promise2 = new Promise((resolve,reject) =>{
    
})

console.log(promise2);
Value => Promise { <pending> }


3. Rejected
const promise3 = new Promise((resolve,reject) =>{
      reject(2);
})

console.log(promise2);
Value => Promise { <rejected> 2 }





4. Then
const promise = new Promise((resolve,reject) =>{
    resolve("this is good")
})

//promise => object has a function "then"

promise.then(value => console.log(value))

Once the promise will settle from pending "then" will be executed


5. Catch 
const promise = new Promise((resolve,reject) =>{
   reject(new Error("Something went Wrong"));
})

promise.then(value => console.log(value), error => console.log("Oh No" + error));

Output => Oh No:Something went Wrong.


6. let p = new Promise((resolve,reject) => {
   let a = 1+2;
   if(a === 2){
      resolve("Success");
   } else{
     reject("Failed")
   }
})

p.then((mesage) => {
   console.log("This is in the then" + message);
}).catch((message) => {
    console.log("this is the catch" + message)
})


7. 
   function watchTutorialPromise() {
     return new Promise((resolve,reject) => {
         if(userLeft){
            reject({
                name:"Work"
            })
         } else{
            resolve({
                name:"Kane"
            })
         }     
    })
    // promise ends here
  }

   watchTutorialPromise().then(() => {
     console.log("this is the message",message.name);
    }).catch((error) =>{
     console.log("this is the error",error.name);
   });

8.  Promise All
   
   const recordVideoOne =  new Promise((resolve,reject) =>{
      resolve("Video 1 Record"); 
   })

   const recordVideoTwo =  new Promise((resolve,reject) =>{
      resolve("Video 2 Record"); 
   })

   const recordVideoThree =  new Promise((resolve,reject) =>{
      resolve("Video 3 Record");
   })
  
   Promise.all([
       recordVideoOne,
       recordVideoTwo,
       recordVideoThree
   ]).then((message)=>{
     console.log(message);
  })

message is an array;

//First resolved promise will be returned
Promise.race([
       recordVideoOne,
       recordVideoTwo,
       recordVideoThree
   ]).then((message)=>{
     console.log(message);
  })
 //messsage is the first resolved promise







Promise All

const myPromise1  =  new Promise((resolve,reject) => {
   setTimeout(()=>{
      resolve("async task 1");
   },500)
});
const myPromise2  =  new Promise((resolve,reject) => {
   setTimeout(()=>{
      resolve("async task 2");
   },500)
});
const myPromise3  =  new Promise((resolve,reject) => {
   setTimeout(()=>{
      resolve("async task 3");
   },500)
});


const myPromises = [myPromise1,myPromise2,myPromise3];


Promise.all(myPromises)
   .then((response) => console.log(res))
   .catch((err) => console.log("Error!"));
  
If one promise fails, then it will come back to catch block



Promise All Settled

It does not has the ssensitivity , so if 1 fails , then it does not matter still we wil get the result in the then block


Promise.any 

The first promise to resolve successfully result will get out.

Promise.race 

Here the result will be the first promise result , whether it succedds or fails it does not matter.







 






























