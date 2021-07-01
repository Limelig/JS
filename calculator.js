const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
    // console.log(Math.pow(a, b));
  },
};

calculator.add(1, 2);
calculator.minus(4, 2);
calculator.multiply(3, 2);
calculator.divide(12, 3);
calculator.powerOf(2, 5);
