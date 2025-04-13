console.log("Hello TypeScripts");

function add(x, y) {
  console.log(x + y);
}

add(3, 4);
add("Suraj", "Kumar");

function toCreateUser(user) {
  console.log(user.firstName, user.lastName, user.age);
}

toCreateUser({
  firstName: "Suraj",
  lastName: "Kumar",
  age: 18,
});

// JavaScript - Loosely Typed Language - means type not defined

let x = 10
x = "Suraj"
 x = true

// Typescripts = Javascript + Types