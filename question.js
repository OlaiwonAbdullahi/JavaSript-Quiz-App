const questions = [
  {
    question: "What is the difference between `var`, `let`, and `const`?",
    correctAnswer:
      "`var` is function-scoped, `let` and `const` are block-scoped, with `const` used for constants.",
    wrongOptions: [
      "`var` and `let` are block-scoped, `const` is function-scoped.",
      "`var` is block-scoped, `let` is function-scoped, `const` can be reassigned.",
      "`let` is function-scoped, `var` and `const` are block-scoped.",
    ],
  },
  {
    question: "How does JavaScript handle asynchronous operations?",
    correctAnswer: "JavaScript uses callbacks, promises, and async/await.",
    wrongOptions: [
      "JavaScript handles all operations synchronously.",
      "Asynchronous operations are handled using only callbacks.",
      "JavaScript doesn't support asynchronous operations.",
    ],
  },
  {
    question: "What is a closure in JavaScript?",
    correctAnswer:
      "A closure is a function that can access variables from its outer function even after the outer function has returned.",
    wrongOptions: [
      "A closure is a function that is executed immediately.",
      "A closure is a function that only runs once.",
      "A closure is a function that cannot access variables from its outer function.",
    ],
  },
  {
    question: "Explain the concept of hoisting in JavaScript.",
    correctAnswer:
      "Hoisting is the process where variable and function declarations are moved to the top of their scope before code execution.",
    wrongOptions: [
      "Hoisting refers to the way JavaScript manages asynchronous operations.",
      "Hoisting is a method for optimizing performance.",
      "Hoisting is when a variable can be used only after it is declared.",
    ],
  },
  {
    question: "What are JavaScript Promises?",
    correctAnswer:
      "Promises represent the eventual completion or failure of an asynchronous operation.",
    wrongOptions: [
      "Promises are used to handle synchronous operations.",
      "Promises are a way to declare variables in JavaScript.",
      "Promises are functions that return multiple values.",
    ],
  },
  {
    question: "What does the `this` keyword refer to in JavaScript?",
    correctAnswer:
      "`this` refers to the context in which a function is invoked.",
    wrongOptions: [
      "`this` always refers to the global object.",
      "`this` refers to the current function name.",
      "`this` is a placeholder for an object property.",
    ],
  },
  {
    question: "What is the difference between `==` and `===`?",
    correctAnswer:
      "`==` checks for value equality with type coercion, while `===` checks for both value and type equality without coercion.",
    wrongOptions: [
      "`==` checks for value and type equality, `===` checks for reference equality.",
      "`==` checks for reference equality, `===` checks for value equality with type coercion.",
      "`==` and `===` are interchangeable in JavaScript.",
    ],
  },
  {
    question: "What is an arrow function in JavaScript?",
    correctAnswer:
      "An arrow function is a concise syntax for writing functions, and it does not have its own `this` context.",
    wrongOptions: [
      "An arrow function is a regular function with a different name.",
      "An arrow function can only be used for asynchronous operations.",
      "An arrow function is a function that always returns `undefined`.",
    ],
  },
  {
    question: "How does event delegation work in JavaScript?",
    correctAnswer:
      "Event delegation involves using a single event listener on a parent element to handle events on its child elements.",
    wrongOptions: [
      "Event delegation is when events are passed down from child to parent elements.",
      "Event delegation requires adding listeners to every child element individually.",
      "Event delegation is a method to stop events from propagating.",
    ],
  },
  {
    question: "What is the prototype chain in JavaScript?",
    correctAnswer:
      "The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects.",
    wrongOptions: [
      "The prototype chain is a method for handling asynchronous code.",
      "The prototype chain is a built-in JavaScript function for chaining events.",
      "The prototype chain is a way to create private variables in JavaScript.",
    ],
  },
  {
    question: "What are IIFEs (Immediately Invoked Function Expressions)?",
    correctAnswer:
      "IIFEs are functions that are executed immediately after being defined.",
    wrongOptions: [
      "IIFEs are functions that run automatically when a page loads.",
      "IIFEs are functions that are declared without a name.",
      "IIFEs are functions that can only be invoked once.",
    ],
  },
  {
    question:
      "What is the difference between `call()`, `apply()`, and `bind()`?",
    correctAnswer:
      "`call()` and `apply()` invoke a function with a specific `this` context, while `bind()` returns a new function with a bound `this` context.",
    wrongOptions: [
      "`call()`, `apply()`, and `bind()` are used to create new objects.",
      "`call()` and `apply()` bind functions, `bind()` executes them.",
      "`call()` and `bind()` are identical, `apply()` is different.",
    ],
  },
  {
    question: "What is the Event Loop in JavaScript?",
    correctAnswer:
      "The Event Loop handles the execution of code, managing the call stack and the message queue.",
    wrongOptions: [
      "The Event Loop is a method for optimizing DOM manipulations.",
      "The Event Loop is used to manage synchronous code execution.",
      "The Event Loop is a function that repeats code indefinitely.",
    ],
  },
  {
    question: "What is the difference between `null` and `undefined`?",
    correctAnswer:
      "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value representing no value or object.",
    wrongOptions: [
      "`undefined` is a valid value, while `null` is not.",
      "`null` and `undefined` are identical in JavaScript.",
      "`undefined` is used for objects, while `null` is used for numbers.",
    ],
  },
  {
    question: "What is a JavaScript generator?",
    correctAnswer:
      "A generator is a function that can be paused and resumed, allowing you to yield multiple values over time.",
    wrongOptions: [
      "A generator is a function that returns a random number.",
      "A generator is a function that runs only once.",
      "A generator is a method for creating arrays.",
    ],
  },
  {
    question: "How does JavaScript handle inheritance?",
    correctAnswer:
      "JavaScript uses prototype-based inheritance, where objects inherit properties and methods from other objects via the prototype chain.",
    wrongOptions: [
      "JavaScript uses class-based inheritance like Java and C#.",
      "JavaScript does not support inheritance.",
      "JavaScript uses function-based inheritance.",
    ],
  },
  {
    question: "What is a JavaScript Symbol?",
    correctAnswer:
      "A Symbol is a unique and immutable primitive value often used as object keys to avoid property name collisions.",
    wrongOptions: [
      "A Symbol is a special type of string in JavaScript.",
      "A Symbol is used to create anonymous functions.",
      "A Symbol is a method for handling asynchronous code.",
    ],
  },
  {
    question: "What is the spread operator in JavaScript?",
    correctAnswer:
      "The spread operator (`...`) allows an iterable to be expanded into individual elements.",
    wrongOptions: [
      "The spread operator is used to combine strings.",
      "The spread operator only works with numbers.",
      "The spread operator is used to reverse arrays.",
    ],
  },
  {
    question: "What is debouncing in JavaScript?",
    correctAnswer:
      "Debouncing delays the execution of a function until a certain time has passed since the last time it was called.",
    wrongOptions: [
      "Debouncing ensures a function is called immediately on every event.",
      "Debouncing runs a function multiple times in rapid succession.",
      "Debouncing prevents a function from being called.",
    ],
  },
  {
    question: "What is a Proxy in JavaScript?",
    correctAnswer:
      "A Proxy allows you to create custom behavior for fundamental operations on an object.",
    wrongOptions: [
      "A Proxy is a function that controls the flow of events.",
      "A Proxy is a method for storing data in local storage.",
      "A Proxy is a built-in method for handling asynchronous code.",
    ],
  },
  {
    question:
      "What is the difference between function declarations and function expressions?",
    correctAnswer:
      "Function declarations are hoisted and can be used before they are defined, while function expressions are not hoisted.",
    wrongOptions: [
      "Function expressions are hoisted, while function declarations are not.",
      "Function declarations can only be used inside other functions.",
      "Function expressions cannot take arguments.",
    ],
  },
  {
    question: "What are JavaScript callbacks?",
    correctAnswer:
      "Callbacks are functions passed as arguments to other functions and are executed after a specific task is completed.",
    wrongOptions: [
      "Callbacks are special types of loops in JavaScript.",
      "Callbacks are variables that store asynchronous operations.",
      "Callbacks are functions that automatically run on page load.",
    ],
  },
  {
    question:
      "What is the difference between deep copy and shallow copy in JavaScript?",
    correctAnswer:
      "A shallow copy only copies the top-level properties, while a deep copy recursively copies all nested objects.",
    wrongOptions: [
      "A shallow copy clones the entire object, while a deep copy copies only a part.",
      "A deep copy duplicates the memory address of the object.",
      "A shallow copy creates a new reference to the same object.",
    ],
  },
  {
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    correctAnswer:
      "Synchronous code runs sequentially and blocks the execution, while asynchronous code allows the program to continue running.",
    wrongOptions: [
      "Synchronous code runs in the background, while asynchronous code runs sequentially.",
      "Asynchronous code cannot handle user inputs.",
      "Synchronous code is faster than asynchronous code.",
    ],
  },
  {
    question: "What are higher-order functions in JavaScript?",
    correctAnswer:
      "Higher-order functions are functions that take other functions as arguments or return a function as a result.",
    wrongOptions: [
      "Higher-order functions are functions that run before other functions.",
      "Higher-order functions are functions that cannot return values.",
      "Higher-order functions are functions that are always asynchronous.",
    ],
  },
  {
    question: "How does the `new` keyword work in JavaScript?",
    correctAnswer:
      "The `new` keyword creates an instance of an object from a constructor function.",
    wrongOptions: [
      "The `new` keyword is used to create a new variable.",
      "The `new` keyword is used to call an anonymous function.",
      "The `new` keyword is used to delete existing objects.",
    ],
  },
  {
    question: "What is the Temporal Dead Zone in JavaScript?",
    correctAnswer:
      "The Temporal Dead Zone is the period between the start of a block and when a variable declared with `let` or `const` is initialized.",
    wrongOptions: [
      "The Temporal Dead Zone is a time-based function in JavaScript.",
      "The Temporal Dead Zone is when `var` variables are not accessible.",
      "The Temporal Dead Zone refers to memory leaks in JavaScript.",
    ],
  },
  {
    question: "What is event bubbling in JavaScript?",
    correctAnswer:
      "Event bubbling is the process by which an event starts from the deepest element and propagates upwards to the parent elements.",
    wrongOptions: [
      "Event bubbling stops an event from propagating to parent elements.",
      "Event bubbling occurs when an event is delayed.",
      "Event bubbling is a method for optimizing event handling.",
    ],
  },
  {
    question: "What is the purpose of the `bind()` method in JavaScript?",
    correctAnswer:
      "`bind()` creates a new function that, when called, has its `this` keyword set to the provided value.",
    wrongOptions: [
      "`bind()` immediately invokes the function with a specific `this` context.",
      "`bind()` is used to bind variables to a specific scope.",
      "`bind()` is a method for combining multiple functions.",
    ],
  },
  {
    question: "What is the purpose of the `setTimeout()` function?",
    correctAnswer:
      "`setTimeout()` delays the execution of a function by a specified number of milliseconds.",
    wrongOptions: [
      "`setTimeout()` executes a function repeatedly with a delay.",
      "`setTimeout()` cancels a running function after a delay.",
      "`setTimeout()` is used to execute a function immediately.",
    ],
  },
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    correctAnswer:
      "`typeof` is used to determine the type of a variable or expression.",
    wrongOptions: [
      "`typeof` is used to convert a variable to a specific type.",
      "`typeof` is used to check if a variable is defined.",
      "`typeof` is a method to compare two variables.",
    ],
  },
  {
    question: "What is the difference between `for...in` and `for...of` loops?",
    correctAnswer:
      "`for...in` iterates over object properties, while `for...of` iterates over iterable objects like arrays.",
    wrongOptions: [
      "`for...in` iterates over array elements, while `for...of` iterates over object properties.",
      "`for...in` and `for...of` are identical in functionality.",
      "`for...of` is used for asynchronous operations, `for...in` is not.",
    ],
  },
  {
    question: "What is a promise in JavaScript?",
    correctAnswer:
      "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
    wrongOptions: [
      "A promise is a method for handling synchronous operations.",
      "A promise is a variable that stores a callback function.",
      "A promise is a built-in function to generate random values.",
    ],
  },
  {
    question: "What is the purpose of the `Array.prototype.map()` method?",
    correctAnswer:
      "`map()` creates a new array populated with the results of calling a provided function on every element in the original array.",
    wrongOptions: [
      "`map()` filters the elements of an array based on a condition.",
      "`map()` returns the first element that satisfies a condition.",
      "`map()` concatenates multiple arrays into one.",
    ],
  },
  {
    question:
      "How does JavaScript handle equality checks with objects and arrays?",
    correctAnswer:
      "JavaScript compares object and array references, not their values.",
    wrongOptions: [
      "JavaScript compares objects and arrays by their values.",
      "JavaScript uses `==` to compare objects and arrays by value.",
      "JavaScript does not support equality checks on objects and arrays.",
    ],
  },
  {
    question: "What does the `fetch()` API do in JavaScript?",
    correctAnswer:
      "`fetch()` is used to make HTTP requests and returns a promise that resolves to the response object.",
    wrongOptions: [
      "`fetch()` is used to fetch data from local storage.",
      "`fetch()` is a method for retrieving DOM elements.",
      "`fetch()` is used to pause code execution.",
    ],
  },
  {
    question: "What is the purpose of the `Object.freeze()` method?",
    correctAnswer:
      "`Object.freeze()` prevents the modification of existing property values and the addition of new properties to an object.",
    wrongOptions: [
      "`Object.freeze()` deletes all properties of an object.",
      "`Object.freeze()` locks an object to a specific memory address.",
      "`Object.freeze()` converts an object to a string.",
    ],
  },
  {
    question: "What is the purpose of the `reduce()` method in JavaScript?",
    correctAnswer:
      "`reduce()` executes a reducer function on each element of the array, resulting in a single output value.",
    wrongOptions: [
      "`reduce()` creates a new array with all elements that pass a test.",
      "`reduce()` removes duplicate elements from an array.",
      "`reduce()` converts an array into a string.",
    ],
  },
  {
    question: "What does the `async` keyword do in JavaScript?",
    correctAnswer:
      "`async` is used to declare functions that return a promise, allowing the use of `await` within them.",
    wrongOptions: [
      "`async` is used to delay function execution until all promises are resolved.",
      "`async` is a method for defining anonymous functions.",
      "`async` automatically runs functions in parallel.",
    ],
  },
  {
    question: "What is the purpose of the `await` keyword?",
    correctAnswer:
      "`await` is used to pause the execution of an `async` function until a promise is resolved or rejected.",
    wrongOptions: [
      "`await` is used to create promises within an `async` function.",
      "`await` is used to cancel an asynchronous operation.",
      "`await` is a method to handle errors in asynchronous code.",
    ],
  },
  {
    question: "What does the `Array.prototype.filter()` method do?",
    correctAnswer:
      "`filter()` creates a new array with all elements that pass a test implemented by a provided function.",
    wrongOptions: [
      "`filter()` modifies the original array by removing elements.",
      "`filter()` concatenates multiple arrays into one.",
      "`filter()` transforms the elements of an array based on a condition.",
    ],
  },
  {
    question: "What is the purpose of the `Object.assign()` method?",
    correctAnswer:
      "`Object.assign()` copies all enumerable properties from one or more source objects to a target object.",
    wrongOptions: [
      "`Object.assign()` deletes properties from an object.",
      "`Object.assign()` merges arrays into an object.",
      "`Object.assign()` converts an object to a string.",
    ],
  },
  {
    question:
      "What is the difference between `Array.prototype.find()` and `Array.prototype.findIndex()`?",
    correctAnswer:
      "`find()` returns the first element that satisfies a condition, while `findIndex()` returns the index of that element.",
    wrongOptions: [
      "`find()` and `findIndex()` are identical in functionality.",
      "`find()` returns the last element that satisfies a condition.",
      "`findIndex()` returns the last index that satisfies a condition.",
    ],
  },
  {
    question: "What does the `Array.prototype.some()` method do?",
    correctAnswer:
      "`some()` tests whether at least one element in the array passes the test implemented by a provided function.",
    wrongOptions: [
      "`some()` checks if all elements in the array pass a test.",
      "`some()` removes elements from the array that do not pass a test.",
      "`some()` concatenates arrays based on a condition.",
    ],
  },
  {
    question: "What does the `Array.prototype.every()` method do?",
    correctAnswer:
      "`every()` tests whether all elements in the array pass the test implemented by a provided function.",
    wrongOptions: [
      "`every()` checks if at least one element in the array passes a test.",
      "`every()` removes elements from the array that do not pass a test.",
      "`every()` transforms the elements of an array based on a condition.",
    ],
  },
  {
    question:
      "What is the difference between `Array.prototype.splice()` and `Array.prototype.slice()`?",
    correctAnswer:
      "`splice()` modifies the original array by adding/removing elements, while `slice()` returns a shallow copy of a portion of the array.",
    wrongOptions: [
      "`splice()` and `slice()` are identical in functionality.",
      "`splice()` returns a new array without modifying the original.",
      "`slice()` removes elements from the original array.",
    ],
  },
  {
    question: "What does the `Array.prototype.includes()` method do?",
    correctAnswer:
      "`includes()` checks if an array contains a specified element, returning `true` or `false`.",
    wrongOptions: [
      "`includes()` adds a specified element to the array.",
      "`includes()` removes a specified element from the array.",
      "`includes()` checks if all elements in the array are unique.",
    ],
  },
  {
    question: "What does the `Object.create()` method do?",
    correctAnswer:
      "`Object.create()` creates a new object with a specified prototype object and properties.",
    wrongOptions: [
      "`Object.create()` clones an existing object.",
      "`Object.create()` merges two or more objects into one.",
      "`Object.create()` converts an object to an array.",
    ],
  },
  {
    question: "What is the purpose of the `JSON.stringify()` method?",
    correctAnswer:
      "`JSON.stringify()` converts a JavaScript object or value to a JSON string.",
    wrongOptions: [
      "`JSON.stringify()` converts a JSON string to a JavaScript object.",
      "`JSON.stringify()` encodes a string for use in URLs.",
      "`JSON.stringify()` checks if a string is valid JSON.",
    ],
  },
];
