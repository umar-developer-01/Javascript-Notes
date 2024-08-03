//1.

class Person {
    //instance properties
    isHuman = true;
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log("Hello this is" + this.name);
    }
    
}

const conner = new Person("Conner");
const celement = new Person("Celement");


conner.speak();
conner.isHuman = false;



// 2. Maing Property of the Class

class Person {
    // class Property by using static
    static isHuman = true;
    constructor(name) {
        this.name = name;
    }
    // Greet is now the function of the class by using static
    static greet(){
        console.log("Hello");
    }
    speak() {
        console.log("Hello this is" + this.name);
    }
    
}

console.log(Person.isHuman);
console.log(Person.greet());


//3 . Inheritance

class Child extends Person {
   // age is a private Field
    #age; 
   constructor(name,age){
     // super is going to call the contructor of the class we are inheriting from
     super(name);
     this.#age = age;
   }
}

const child = new Child("John",10);
child.speak();

// child is the instance of Person
console.log(child instanceof Person);
// Output: true;

console.log(Person instanceof Function);
// Output: true;

