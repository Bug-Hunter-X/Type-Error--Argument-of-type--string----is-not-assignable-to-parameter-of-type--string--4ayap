function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane", "Doe"];
let userSingle = "Jane Doe";

console.log(greeter(userSingle)); //Correct usage
console.log(greeterArray(user)); //Correct usage with array