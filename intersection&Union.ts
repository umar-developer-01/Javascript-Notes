// Intersection Types (&)
// Intersection types combine multiple types into one. 
// The resulting type has all the properties of the intersected types. 
// An intersection type requires the combined type to satisfy all the constraints of its constituent types.


type Person = {
    name: string;
    age: number;
  };
  
type Employee = {
    employeeId: number;
    department: string;
  };
  
  // Intersection of Person and Employee
type EmployeeDetails = Person & Employee;
  
const employee: EmployeeDetails = {
    name: "Alice",
    age: 30,
    employeeId: 1234,
    department: "Engineering"
  };
  
// Union Types (|)
// Union types allow a value to be one of several types.
// A union type means that a value can be of any one of the types listed in the union.

type SuccessResponse = {
    status: "success";
    data: any;
  };
  
type ErrorResponse = {
    status: "error";
    error: string;
  };
  
// Union of SuccessResponse and ErrorResponse
type ApiResponse = SuccessResponse | ErrorResponse;
  
const response1: ApiResponse = {
    status: "success",
    data: { id: 1, name: "Alice" }
  };
  
const response2: ApiResponse = {
    status: "error",
    error: "Something went wrong"
  };
  