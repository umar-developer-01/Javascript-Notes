

const object = {
    message:"Hello World!",
    logsMessage(){
       console.log(this.message);
    }
}


setTimeout(object.logsMessage,1000);


// Output: undefined

//object.logsMessage();


//setTimeout(()=>object.logsMessage(),1000);
// Hello World