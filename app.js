// const a = 5;
// const b = 2;
// let myName = "Six";

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName);

// myName = "Sixtine";
// console.log("your new name is " + myName);

// const amIDoze = true;
const amIDoze = null;
let someThing;
console.log(amIDoze);
console.log(someThing);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

nonsense = [1, 2, "hello", false, null, true, undefined, "Six"];

console.log(daysOfWeek);

// const playerName = "sixtine";
// const playerPoints = 111111;
// const playerPretty = true;
// const playerDoze = "it is.";

// const player = ["nico", 1212, true, "it is?"];

const player = {
  name: "six",
  points: 10,
  doze: true,
};

console.log(player);
player.doze = false;
console.log(player);
player.lastname = "chapelle";
console.log(player);

function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + ", and I'm " + age);
}

sayHello("nico", 10);
sayHello("alicia", 18);
sayHello("cain", 40);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 30);
divide(99, 3);

const player1 = {
  name: "six",
  sayHello: function (otherPersonsName) {
    console.log("Hi " + otherPersonsName + ", nice to meet you!");
  },
};

console.log(player1.name);
player1.sayHello("ryne");
