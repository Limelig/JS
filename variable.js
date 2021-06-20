
//1. Use Strict
// added in ES 5
// use this for Valina Javascript!
'use strict';


//2. Variable
//let (added in ES6)
let globalName = 'global name';
{
    
    let name1 = 'Lime';
    console.log(name1);
    name1 = 'Hi';
    console.log(name1);

}

// console.log(name1);
// console.log(globalName);

//var (don't ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope

{ 
    age = 4;
    var age;
}
console.log(age);

//3. Contants
//favor immutable