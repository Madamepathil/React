//primitives, number, string booleans
//more complex types: array, objects
//functions, parameters

//primitives
let age: number;
age = 12;

//more complex type

let hobbies: string[];
hobbies = ["sports"];

//Type inference
//du behöver inte specifiera vilken type en variabel ska ha. nedan får defautl string som type

let course = "1ddnandnad";
//course = 2; - detta funkar inte...

// union types - kan ta olika types en variabel ska ha, ex string & number
let course2: string | number = "sddsdksd";
course2 = 22;

//type aliases
type Person = {
  name: string;
  age: number;
};

//let people: Person;
let people: Person[];

//functions & type
function add(a: number, b: number) {
  return a + b;
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArr = ["1", "2", "3"];
const updatedArr = insertAtBeginning(demoArr, "s");
updatedArr[0].split("");
