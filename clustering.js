const cluster = require('cluster');

// first time it will be master mode
if (cluster.isMaster){
    // forking will cause the index.js file to be executed again but in child mdoe 
    cluster.fork();
} else {
    // In the child mode it is going to act as a normal server

    const express = require("express");
    const app = express();

    function doWork(duration) {
       const start = Date.now();
       while (Date.now() - start < duration){

       }
    }

    app.get('/',(req,res)=>{
        doWork(5000);
        res.send("Hi there");
    });
    app.listen(3000);
}