
//1. Inside an Object
// this keyword refers to an object which is executing the current piece of the code 
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  person.greet(); // "Hello, my name is Alice and I am 25 years old."

 //In this example, this inside the greet method refers to the person object.

//2. consoling this
  
console.log(this); 
// In a browser, it logs the Window object


//3. 
function showThis() {
   console.log(this);
}
  
showThis(); 
// In a browser, it logs the Window object


// 4. this in an Event Handler

{/* <button id="myButton">Click me</button>

<script>
  document.getElementById("myButton").addEventListener("click", function() {
    console.log(this); // Logs the button element
  });
</script> */}


// 5. this in an Arrow Function

const person = {
    name: "Alice",
    age: 25,
    greet: function() {
      const innerFunction = () => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      };
      innerFunction();
    }
  };
  
  person.greet(); // "Hello, my name is Alice and I am 25 years old."

  //In an arrow function, this retains the value of the enclosing lexical context's this. Here, it still refers to the person object.

// 6. this in a Constructor Function

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const alice = new Person("Alice", 25);
  
  console.log(alice.name); // "Alice"
  console.log(alice.age);  // 25

//In a constructor function, this refers to the newly created object.