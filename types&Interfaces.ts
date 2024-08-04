// In TypeScript, both type and interface can be used to define the shape of an object or a structure,
// but there are some differences between them. 
// Here’s a comparison to help you understand when to use each:

interface User {
    name: string;
    age: number;
  }


type User = {
    name: string;
    age: number;
  };



// Interface:

// Can extend other interfaces.
// Classes can implement interfaces

interface Person {
    name: string;
  }
  
interface Employee extends Person {
    employeeId: number;
}
  
class Developer implements Employee {
    name: string;
    employeeId: number;
    constructor(name: string, employeeId: number) {
      this.name = name;
      this.employeeId = employeeId;
    }
  }
  

// Type:

// Can create intersections using &.

type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};

const developer: Employee = {
  name: "Alice",
  employeeId: 1234
};


// Union Types
// Type:

// Can define union types, which interfaces cannot do.

type Status = "success" | "error" | "loading";


// Interface: Preferred when defining the shape of objects, especially for object-oriented programming patterns where 
// classes implement interfaces.
// Type: Preferred for more complex type definitions like unions, intersections, or when dealing with complex function types.