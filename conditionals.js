const days = [1, 2, false, true, null, undefined, "text"];

console.log(days[2]);
days[1] = "not 2";
days.push("vacation");
console.log(days);

const player = {
  name: "six",
  age: 21,
};

console.log(player, console);
console.log((player.name = "Sixtine"));
console.log(player);
player.cool = "soon";
console.log(player, console);

function plus() {
  console.log(2 + 2);
}

plus();

function plusMore(potato, salad) {
  console.log(potato + salad);
}

plusMore(1, 11);

//potato는 정의되지 않았기 때문에 이 함수 바깥에서 쓸 수 없다.
function minusSix(potato) {
  console.log(potato - 5);
}

minusSix(10, 10, 12, 34, 4, 5, 6, 7);
//이 함수는 첫번쨰 argument만 받도록 정의되어 있기 때문에 첫번째 값만 받는다.

const calculator = {
  add: function (a, b) {
    console.log(a, b);
  },
};

calculator.add(5, 1);
console.log();
