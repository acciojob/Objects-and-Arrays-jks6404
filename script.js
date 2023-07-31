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

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
