// callback Hell

const multiply2 = (num,cb) => {
   setTimeout(()=>{
     cb(undefined,num*2);
   },400);
}


const multiply = (num) => {
    multiply2(num,(err,res2)=>{
         if(!err){
            multiply2(res2, (err,res3) =>{
                if(!err){
                   multiply2(res3, (err,res4) =>{
                      console.log(res4);
                   })
                }else {
                    console.log("Error in the second call");
                }
            })
         }else{
            console.log("Error in the first call");
         }
    })
} 


// Promises

const multiply2Promise = (num) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(num * 2);
        },400)
    })
}

multiply2Promise(data).then((data)=>{
    multiply2Promise(data).then((data)=>{
        multiply2Promise(data).then((data)=>{
            console.log("data",data);
        })
    });
}).catch(err => console.log("err",err));




