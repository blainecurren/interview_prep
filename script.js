/* Q1 - What is function declaration? aka function definition / statement

function square(num) {
  return num * num;
}

// Q2 - What is function expression? - When you store a function inside a variable

const square = function (num) {
  // <- Anonymous function
  return num * num;
};

console.log(square(5));

// Q3 - what are first class functions? -
// Functions that can be treated as variables, functions can be passed into another function and be used,
// manipulated, and returned from those functions.

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("Square is" + fn(5));
}

displaySquare(square);

// Q4 - What is IIFE? - Immediately Involved Function Expression

(function square(num) {
  console.log(num * num);
})(5) // <- 5 is an argument that can be passed right away as well as calling the function right away

// Q5 - IIFE - Output Based Question?

(function (x) {
    return (function (y) { // <- function will search the inner 
      console.log(x); // <- scope of the function for x,
    })(2); // <- when it doesn't find it, it will then look into the
  } // <- parent scope, where x exists, which is set to 1
)(1);

// The ability of a function to access variables and functions that 
// are lexically outside of its scope are called closures.

// Q6 - Function Scope

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Blaine";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // Returns "Blaine scored 5"

// Q7 - Function Scope - Output Based Question

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

// Q8 - Function Hoisting - Functions are hoisted completely meaning this function will 
//  run if the function call is before the declaration - Inside of the function is the function scope

function functionName() {
    console.log("workattech");
}

functionName();

// Q9 - Function Hoisting - Output Based Question
// Hoisting is a 2 step process - It first initialized the complete code(global scope,) 
// then local scope
// If there is a local scope variable, the function will not check global scope

var x = 21;

var fun = function() {
    console.log(x)
    var x = 20;
};

fun();

// Q10 - Params vs Arguments - When calling the function, the value passed in the parenthesis is the argument, when the value is within the parenthesis in the declaration, it is then a parameter

function square(num ) { // <- Params
    console.log(num * num);
}

square(5);  // <- Argument

// Spread Operator vs Rest Operator

function multiply(...nums) { // <- Rest Operator
console.log(nums[0] * nums[1]);
} 

var arr = [5, 6]

multiply(...arr); //<- Spread Operator

// Q11 - Params vs Arguments - Output Based Question
// When using Spread / Rest Operators, they should always be last 

const fn = (a, x, y, ...numbers) => { // a, x, y = 5,6,3 ...numbers = 7,8,9
    console.log(x, y, ...numbers);
};

fn(5,6,3,7,8,9)

//Q12 - Callback Function - A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);

  // Predefined Function example i.e., setTimeout, map, filter, reduce, etc...

  document.addEventListener("click", function (params) {

  })

  // Q13 - Arrow Functions 

  const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
  };

  // Arrow Function vs Regular Function

  // 1st Difference - Syntax
  function square(num) {
    return num * num;
  }

  const square = (num) => {
    return num * num
  }

  // 2nd Difference - Implicit 'return' keyword

  // 3rd Difference - arguments - You cant have the aruments keyword inside an arrow function

  // 4th Difference - 'this' keyword
  let user = { // <- object declartion 
  username: "Blaine",
  rc1: () => {
    console.log('Subscribe to ' + this.username); // <- returns undefined because 'this' refers to global scope
  },
  rc2() { 
    console.log("Subscribe to " + this.username) // <- returns Subscribe to Blaine because 'this' refers to the object
  },
};

user.rc1();
user.rc2();




// Closures in Javascript
// Lexical Scope - A variable defined outside a function can be accessible inside another function defined after a variable declaration, but not the opposite. 

var username = "Blaine";

// Global scope
function local() {
    // local scope
    console.log(username);
}

local();

// Incorrect Way 

function local() {
    var username = "blaine";
}

console.log(username)

local();

//global scope
function subscribe() {
    var name = 'Blaine';
    // inner scope 2
    function displayName() { // <- displayName is the closure
        // inner scope
        alert(name);
    }
    displayName();
}

subscribe();

// Closures - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// In JavaScript, every time you create a new function it binds itself to its lexical scope of its parents

// Closures make it possible for a function to have private variables, they are used to control what is, and isn't, in the scope of a particular function, along with which variables are shared between sibling functions within the same containing scope.

function makeFunc() {
    var name = "Mozilla";
    function displayName() { // <- displayName is the closure
        console.log("name")
    } 
    return displayName;
}

var myFunc = makeFunc();
myFunc(); // <- creating a new function by setting the variable returned from makeFunc to the new function myFunc

function makeFunc() {
    var name = "Mozilla";
    function displayName(num) { 
        console.log(name, num)
    } 
    return displayName;
}

makeFunc()(5); // <- returns the display name and then calls the display name

//Closure Scope Chain - Every closure has three scopes: 
// 1 - Local scope (Own scope)
// 2 - Enclosing scope (can be block, function, or module scope)
// 3 - Global scope

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // logs 20 (a = 1 b = 2 c = 3 d = 4)

// Q1 - What will be logged in the console?

let count = 0;
(function printCount() {
    if (count === 0) {
        let count = 1;
        console.log(count);// shadowing // count = 1
    }
    console.log(count); // count = 0
})();

// Q2 - Write a function that would allow you to do this

function createBase(num) {
    return function (innerNum) {
        console.log(innerNum + num);
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

// Q3 - Time Optimization
 
// slow function
function find(index) {
    let a = [];
    for (let i = 0; i < 10000000; i++) {
        a[i] = i * i;
    }

    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time('12');
find(12);
console.timeEnd('12');

// function sped up with closure
function find() {
    let a = [];
    for (let i = 0; i < 10000000; i++) {
        a[i] = i * i;
    }

    return function (index) {
        console.log(a[index]);
    }
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time('12');
closure(12);
console.timeEnd('12');

// Q4 - Block scope and setTimeout

function a() {
    for (var i = 0; i < 3; i++) { // <- var does not have block scope it has function scope
        setTimeout(function log() {
            console.log(i); // what is logged>
        }, i * 1000);
    }
}

a();

// since setTimeout only runs after the full function has executed, the first iteration of i is not counted since var does not have block scope
// change var to let (let has block scope) to include the first iteration of i

// The interviewer may not let you use let

for (var i = 0; i < 3; i++) {
    function inner(i) { // <- i is now a local variable accessed inside the function instead of the outer scope
        setTimeout(function log() {
            console.log(i); 
        }, i * 1000);
    }

    inner(i);
}

// Placing setTimeout within a closure is allocating a new memory space for i every time the loop runs 

// Q5 - How would you use a closure to create a private counter?


function counter() {
  var _counter = 0 ; 

  function add(increment) {
    return _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add, 
    retrieve,
  }
}

const c = counter();
c.add(5);
c.add(10);

// Q6 - What is a module pattern?
// Public function CAN access private function, which makes them handy for helper functions. 
// Example: If you're supposed to make an api call inside of this module, but you dont want the user to access it directly. 

var Module = (function () { // <- Code is not accessible outside this module namespace
  function privateMethod() {
    // do something
    console.log('private')
  }

  return {
    publicMethod: function () {
      // can call privateMethod
      console.log('public')
    },
  };
})();

Module.publicMethod(); // <- This will get called
Module.privateMethod(); // <- This will give an error

// Q7 - Make this run only once

let view; // declared outside of function
function likeTheVideo() {
  view = "Roadside Coder"; // <- Initialized inside of function
  console.log('Subscribe to', view);
}

likeTheVideo();

let view; 
function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already subscribed to")
    } else {
      view = "Roadside Coder";
      console.log('Subscribe to', view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();

isSubscribed(); // <- This will return Subscribe to
isSubscribed(); // <- This will return already subscribed
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();

// Q8 - Once Polyfill

function once(func, context) {
  let ran;

  return function() {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log('hello', a, b));

hello(1,2); // <- function will only be returned once
hello(1,2);
hello(1,2);
hello(1,2);

// Q9 - Memoize Polyfill <- Go back over 58:11

// Q10 - Difference between closure and scope
// Closure - Whenever you create a function within another function, the inner function is the closure
// A scope defines what variable you have access to

// -- Currying --
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
// f(a,b) to this f(a)(b) <- currying 
// Curry'd function are created by chaining closures by immediately returning their inner functions simultaneously.

// Currying in JS
// Example f(a,b) into f(a)(b)

function f(a) {
  return function(b) {
   return `${a} ${b}`;
  };
}

console.log(f(5)(6));

// Why should you use currying? - To create higher order functions

// Q1 - sum(2)(6)(1)

// without currying 
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 6, 1));

// with currying
function sum(a) {
  return function(b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(sum(2)(6)(1));

// Q2 - 
  evaluate('sum')(4)(2) => 6
  evaluate('multiply')(4)(2) => 8
  evaluate('divide')(4)(2) => 2
  evaluate('subtract')(4)(2) => 2


function evaluate(operation) {
  return function (a) {
return function (b) {
  if(operation === "sum") return a + b;
  else if (operation === "multiply") return a * b;
  else if (operation === "divide") return a / b; 
  else if (operation === "subtract") return a - b; 
  else return 'Invalid Operation'
    }
  }
}

console.log(evaluate("sum")(4)(2))

// Q3 - Infinite Currying

function add(a) {
  return function (b) {
    if (b) return add (a+b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)())

// Var vs Let vs Const
// Scope - a certain region of a program where a defined variable exists and can be recognized - global, block, 
// Var = functional scope 
// Let / Const = block scope (can only be accessed within the code block)

// Variable shadowing - Var can be shadowed by let but not vice versa, this is illegal shadowing
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi"; // <- within this block, (a) will shadow the other (a) variable and will return Hi instead of hello
    console.log(a);
  }

  console.log(a); // <- this will return Hello
}

// Declaration 
//Var can be declared multiple times within the same scope, let / const cannot

// Const variable MUST be initialized with a value (const a = 5;)

// Re-initialization
// var and let can be updated, const cannot

var a = 5;
a = 6; 

let a = 5;
a = 6;

const a = 5;
a = 6; // This will not work

Hoisting

There are 2 phases to executing JS code Creation / Execution

Creation
 1. Creates a global / window object
 2. Sets up a memory heap for storing variable and function references
 3. Initializes those functions / variables declarations as undefined

Execution - Executes line by line assigning the values to variables, then executes the function calls.
  - for every new function created js engine creates a new execution context altogether

Hoisting - During the creation phase, JS engine moves your variable declarations and function declarations to the top of your code.

Temporal Dead Zone -  The time between the declaration and the initialization of let / const variables - variables are in the scope but have yet to be declared

Example: What will this function return?

function abc() { 
  console.log(a);

  var a = 10;
}

abc();

This will return undefined because the console.log comes before the variable initialization


map, filter, reduce

What is map()? A method used to create a new array out of an old array by applying a function to each element of the first array

Ex: 
const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {

  return num * 3;
});

console.log(multiplyThree); -> returns a new array

What is filter()? A method that takes each element of an array and applies a conditional returns true, the element gets pushed into the output array and vice versa

Ex:

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num) => {
return num > 2;
});

console.log(moreThanTwo); -> only returns elements that are more than two

What is reduce();? Reduces an array of values down to just one value

const nums = [1,2,3,4];

const sum = nums.reduce((acc, curr, i, arr) => { -> Accumulator(acc) is the result of the previous computation. (if there is no current value set, then it will be the first index of the array)
  return acc + curr;
}, 0);

console.log(sum); -> logs 10

Polyfill for map()

Ex:

Array.map((num, i, arr) => {})

Array.protoype.myMap = function (cb) {
  let temp  = [];
  for ( let i = 0; i < this.Length; i++) { -> 'this' refers to the parent array
      temp.push(cb(this[i],i, this)) -> pushing the computation of cb

      return temp;
  };

  const nums = [1, 2, 3, 4];

  const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 3;
  });

  console.log(multiplyThree);
}
*/

