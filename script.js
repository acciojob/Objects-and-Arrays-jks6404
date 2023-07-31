const players = ["John", "Bob", "Alice", "Poppy"];

const person = {   //this is a object
  name: "John Doe",
  age: 80,
};
let team = players; //this is var
//here spread operator has been used to copy variable team
let team1 = [...players];

let cap1 = {...person};
//  make sure the name of variables is exactly same as mentioned in the problem statement

console.log(players)
console.log(team1)
console.log(person)
console.log(cap1)
console.log(team)
