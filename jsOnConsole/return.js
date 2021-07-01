const age = 96;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  powerOf: function (a, b) {
    return a ** b;
    // console.log(Math.pow(a, b));
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.powerOf(divideResult, minusResult);

const day = parseInt(prompt("what day is it today?"));

// console.log(typeof day, typeof parseInt("day"));

console.log(isNaN(day));

if (isNaN(day)) {
  console.log("please write a number");
} else {
  console.log("thank you for writing today.");
}
