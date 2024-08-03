// Scope => Variable
// Context => Objects

// let uses block scope and var uses function scope


let john = {
    firstName:"John",
    lastName:"Doe",
    driveCar () {
        function imAFunctionNotA(){
            console.log(this);
        }
        imAFunctionNotA();
        console.log(this.firstName + this.lastName + " is driving a car" );
    }
}

john.driveCar();

// this keyword is poitning toward john object.
// john.firstName  john.lastName

// this will point to the window object inside the imAFunctionNotA function

// the "this" keyword  points towards the object that is executing the current function
// driveCar is getting executed by john hence it is pointing towards john object
// while imAFunctionNotA is getting called by the global onject


// john object will use the breathe function
function breathe(){
    console.log(this.firstName + this.lastName + " just inhaled and exhaled" );  
}

breathe.call(john);

//In javascript a function is an object, and function has access to a method named call. 
// call will make the "this" keyword point to the john object placed inside the parenthesis