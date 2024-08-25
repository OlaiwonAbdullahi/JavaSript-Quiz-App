const questions = [
  {
    numb: "1",
    question: "What is the difference between `var`, `let`, and `const`?",
    answer:
      "`var` is function-scoped, `let` and `const` are block-scoped, with `const` used for constants.",
    options: [
      "`var` and `let` are block-scoped, `const` is function-scoped.",
      "`var` is block-scoped, `let` is function-scoped, `const` can be reassigned.",
      "`let` is function-scoped, `var` and `const` are block-scoped.",
      "`var` is function-scoped, `let` and `const` are block-scoped, with `const` used for constants.",
    ],
  },
  {
    numb: "2",
    question: "How does JavaScript handle asynchronous operations?",
    answer: "JavaScript uses callbacks, promises, and async/await.",
    options: [
      "JavaScript handles all operations synchronously.",
      "Asynchronous operations are handled using only callbacks.",
      "JavaScript doesn't support asynchronous operations.",
      "JavaScript uses callbacks, promises, and async/await.",
    ],
  },
  {
    numb: "3",
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that can access variables from its outer function even after the outer function has returned.",
    options: [
      "A closure is a function that is executed immediately.",
      "A closure is a function that only runs once.",
      "A closure is a function that can access variables from its outer function even after the outer function has returned.",
      "A closure is a function that cannot access variables from its outer function.",
    ],
  },
  {
    numb: "4",
    question: "Explain the concept of hoisting in JavaScript.",
    answer:
      "Hoisting is the process where variable and function declarations are moved to the top of their scope before code execution.",
    options: [
      "Hoisting refers to the way JavaScript manages asynchronous operations.",
      "Hoisting is a method for optimizing performance.",
      "Hoisting is the process where variable and function declarations are moved to the top of their scope before code execution.",
      "Hoisting is when a variable can be used only after it is declared.",
    ],
  },
  {
    numb: "5",
    question: "What are JavaScript Promises?",
    answer:
      "Promises represent the eventual completion or failure of an asynchronous operation.",
    options: [
      "Promises are used to handle synchronous operations.",
      "Promises are a way to declare variables in JavaScript.",
      "Promises represent the eventual completion or failure of an asynchronous operation.",
      "Promises are functions that return multiple values.",
    ],
  },
  {
    numb: "6",
    question: "What does the `this` keyword refer to in JavaScript?",
    answer: "`this` refers to the context in which a function is invoked.",
    options: [
      "`this` refers to the context in which a function is invoked.",
      "`this` always refers to the global object.",
      "`this` refers to the current function name.",
      "`this` is a placeholder for an object property.",
    ],
  },
  {
    numb: "7",
    question: "What is the difference between `==` and `===`?",
    answer:
      "`==` checks for value equality with type coercion, while `===` checks for both value and type equality without coercion.",
    options: [
      "`==` checks for value and type equality, `===` checks for reference equality.",
      "`==` checks for value equality with type coercion, while `===` checks for both value and type equality without coercion.",
      "`==` checks for reference equality, `===` checks for value equality with type coercion.",
      "`==` and `===` are interchangeable in JavaScript.",
    ],
  },
  {
    numb: "8",
    question: "What is an arrow function in JavaScript?",
    answer:
      "An arrow function is a concise syntax for writing functions, and it does not have its own `this` context.",
    options: [
      "An arrow function is a regular function with a different name.",
      "An arrow function is a concise syntax for writing functions, and it does not have its own `this` context.",
      "An arrow function can only be used for asynchronous operations.",
      "An arrow function is a function that always returns `undefined`.",
    ],
  },
  {
    numb: "9",
    question: "How does event delegation work in JavaScript?",
    answer:
      "Event delegation involves using a single event listener on a parent element to handle events on its child elements.",
    options: [
      "Event delegation is when events are passed down from child to parent elements.",
      "Event delegation requires adding listeners to every child element individually.",
      "Event delegation involves using a single event listener on a parent element to handle events on its child elements.",
      "Event delegation is a method to stop events from propagating.",
    ],
  },
  {
    numb: "10",
    question: "What is the prototype chain in JavaScript?",
    answer:
      "The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects.",
    options: [
      "The prototype chain is a method for handling asynchronous code.",
      "The prototype chain is a built-in JavaScript function for chaining events.",
      "The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects.",
      "The prototype chain is a way to create private variables in JavaScript.",
    ],
  },
  {
    numb: "11",
    question: "What are IIFEs (Immediately Invoked Function Expressions)?",
    answer:
      "IIFEs are functions that are executed immediately after being defined.",
    options: [
      "IIFEs are functions that run automatically when a page loads.",
      "IIFEs are functions that are executed immediately after being defined.",
      "IIFEs are functions that are declared without a name.",
      "IIFEs are functions that can only be invoked once.",
    ],
  },
  {
    numb: "12",
    question:
      "What is the difference between `call()`, `apply()`, and `bind()`?",
    answer:
      "`call()` and `apply()` invoke a function with a specific `this` context, while `bind()` returns a new function with a bound `this` context.",
    options: [
      "`call()`, `apply()`, and `bind()` are used to create new objects.",
      "`call()` and `apply()` bind functions, `bind()` executes them.",
      "`call()` and `bind()` are identical, `apply()` is different.",
      "`call()` and `apply()` invoke a function with a specific `this` context, while `bind()` returns a new function with a bound `this` context.",
    ],
  },
  {
    numb: "13",
    question: "What is the Event Loop in JavaScript?",
    answer:
      "The Event Loop handles the execution of code, managing the call stack and the message queue.",
    options: [
      "The Event Loop is a method for optimizing DOM manipulations.",
      "The Event Loop is used to manage synchronous code execution.",
      "The Event Loop is a function that repeats code indefinitely.",
      "The Event Loop handles the execution of code, managing the call stack and the message queue.",
    ],
  },
  {
    numb: "14",
    question: "What is the difference between `null` and `undefined`?",
    answer:
      "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value representing no value or object.",
    options: [
      "`undefined` is a valid value, while `null` is not.",
      "`null` and `undefined` are identical in JavaScript.",
      "`undefined` means a variable has been declared but not assigned a value, while `null` is an assignment value representing no value or object.",
      "`undefined` is used for objects, while `null` is used for numbers.",
    ],
  },
  {
    numb: "15",
    question: "What is a JavaScript generator?",
    answer:
      "A generator is a function that can be paused and resumed, allowing you to yield multiple values over time.",
    options: [
      "A generator is a function that can be paused and resumed, allowing you to yield multiple values over time.",
      "A generator is a function that returns a random number.",
      "A generator is a function that runs only once.",
      "A generator is a method for creating arrays.",
    ],
  },
  {
    numb: "16",
    question: "How does JavaScript handle inheritance?",
    answer:
      "JavaScript uses prototype-based inheritance, where objects inherit properties and methods from other objects via the prototype chain.",
    options: [
      "JavaScript uses class-based inheritance like Java and C#.",
      "JavaScript does not support inheritance.",
      "JavaScript uses function-based inheritance.",
      "JavaScript uses prototype-based inheritance, where objects inherit properties and methods from other objects via the prototype chain.",
    ],
  },
  {
    numb: "17",
    question: "What is a JavaScript Symbol?",
    answer:
      "A Symbol is a unique and immutable primitive value often used as object keys to avoid property name collisions.",
    options: [
      "A Symbol is a unique and immutable primitive value often used as object keys to avoid property name collisions.",
      "A Symbol is a special type of string in JavaScript.",
      "A Symbol is used to create anonymous functions.",
      "A Symbol is a method for handling asynchronous code.",
    ],
  },
  {
    numb: "18",
    question: "What is the spread operator in JavaScript?",
    answer:
      "The spread operator (`...`) allows an iterable to be expanded into individual elements.",
    options: [
      "The spread operator is used to combine strings.",
      "The spread operator (`...`) allows an iterable to be expanded into individual elements.",
      "The spread operator only works with numbers.",
      "The spread operator is used to reverse arrays.",
    ],
  },
  {
    numb: "19",
    question: "What is debouncing in JavaScript?",
    answer:
      "Debouncing delays the execution of a function until a certain time has passed since the last time it was called.",
    options: [
      "Debouncing delays the execution of a function until a certain time has passed since the last time it was called.",
      "Debouncing ensures a function is called immediately on every event.",
      "Debouncing runs a function multiple times in rapid succession.",
      "Debouncing prevents a function from being called.",
    ],
  },
  {
    numb: "20",
    question: "What is a Proxy in JavaScript?",
    answer:
      "A Proxy allows you to create custom behavior for fundamental operations on an object.",
    options: [
      "A Proxy is a function that controls the flow of events.",
      "A Proxy is a method for storing data in local storage.",
      "A Proxy allows you to create custom behavior for fundamental operations on an object.",
      "A Proxy is a built-in method for handling asynchronous code.",
    ],
  },
  {
    numb: "21",
    question:
      "What is the difference between function declarations and function expressions?",
    answer:
      "Function declarations are hoisted and can be used before they are defined, while function expressions are not hoisted.",
    options: [
      "Function expressions are hoisted, while function declarations are not.",
      "Function declarations can only be used inside other functions.",
      "Function declarations are hoisted and can be used before they are defined, while function expressions are not hoisted.",
      "Function expressions cannot take arguments.",
    ],
  },
  {
    numb: "22",
    question: "What are JavaScript callbacks?",
    answer:
      "Callbacks are functions passed as arguments to other functions and are executed after a specific task is completed.",
    options: [
      "Callbacks are special types of loops in JavaScript.",
      "Callbacks are variables that store asynchronous operations.",
      "Callbacks are functions that automatically run on page load.",
      "Callbacks are functions passed as arguments to other functions and are executed after a specific task is completed.",
    ],
  },
  {
    numb: "23",
    question:
      "What is the difference between deep copy and shallow copy in JavaScript?",
    answer:
      "A shallow copy only copies the top-level properties, while a deep copy recursively copies all nested objects.",
    options: [
      "A shallow copy clones the entire object, while a deep copy copies only a part.",
      "A deep copy duplicates the memory address of the object.",
      "A shallow copy creates a new reference to the same object.",
      "A shallow copy only copies the top-level properties, while a deep copy recursively copies all nested objects.",
    ],
  },
  {
    numb: "24",
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    answer:
      "Synchronous code runs sequentially and blocks the execution, while asynchronous code allows the program to continue running.",
    options: [
      "Synchronous code runs in the background, while asynchronous code runs sequentially.",
      "Asynchronous code cannot handle user inputs.",
      "Synchronous code runs sequentially and blocks the execution, while asynchronous code allows the program to continue running.",
      "Synchronous code is faster than asynchronous code.",
    ],
  },
  {
    numb: "25",
    question: "What are higher-order functions in JavaScript?",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return a function as a result.",
    options: [
      "Higher-order functions are functions that run before other functions.",
      "Higher-order functions are functions that cannot return values.",
      "Higher-order functions are functions that take other functions as arguments or return a function as a result.",
      "Higher-order functions are functions that are always asynchronous.",
    ],
  },
  {
    numb: "26",
    question: "How does the `new` keyword work in JavaScript?",
    answer:
      "The `new` keyword creates an instance of an object from a constructor function.",
    options: [
      "The `new` keyword is used to create a new variable.",
      "The `new` keyword is used to call an anonymous function.",
      "The `new` keyword creates an instance of an object from a constructor function.",
      "The `new` keyword is used to delete existing objects.",
    ],
  },
  {
    numb: "27",
    question: "What is the Temporal Dead Zone in JavaScript?",
    answer:
      "The Temporal Dead Zone is the period between the start of a block and when a variable declared with `let` or `const` is initialized.",
    options: [
      "The Temporal Dead Zone is a time-based function in JavaScript.",
      "The Temporal Dead Zone is the period between the start of a block and when a variable declared with `let` or `const` is initialized.",
      "The Temporal Dead Zone is when `var` variables are not accessible.",
      "The Temporal Dead Zone refers to memory leaks in JavaScript.",
    ],
  },
  {
    numb: "28",
    question: "What is event bubbling in JavaScript?",
    answer:
      "Event bubbling is the process by which an event starts from the deepest element and propagates upwards to the parent elements.",
    options: [
      "Event bubbling stops an event from propagating to parent elements.",
      "Event bubbling occurs when an event is delayed.",
      "Event bubbling is a method for optimizing event handling.",
      "Event bubbling is the process by which an event starts from the deepest element and propagates upwards to the parent elements.",
    ],
  },
  {
    numb: "29",
    question: "What is the purpose of the `bind()` method in JavaScript?",
    answer:
      "`bind()` creates a new function that, when called, has its `this` keyword set to the provided value.",
    options: [
      "`bind()` immediately invokes the function with a specific `this` context.",
      "`bind()` is used to bind variables to a specific scope.",
      "`bind()` is a method for combining multiple functions.",
      "`bind()` creates a new function that, when called, has its `this` keyword set to the provided value.",
    ],
  },
  {
    numb: "30",
    question: "What is the purpose of the `setTimeout()` function?",
    answer:
      "`setTimeout()` delays the execution of a function by a specified number of milliseconds.",
    options: [
      "`setTimeout()` executes a function repeatedly with a delay.",
      "`setTimeout()` cancels a running function after a delay.",
      "`setTimeout()` is used to execute a function immediately.",
      "`setTimeout()` delays the execution of a function by a specified number of milliseconds.",
    ],
  },
  {
    numb: "31",
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answer:
      "`typeof` is used to determine the type of a variable or expression.",
    options: [
      "`typeof` is used to convert a variable to a specific type.",
      "`typeof` is used to check if a variable is defined.",
      "`typeof` is a method to compare two variables.",
      "`typeof` is used to determine the type of a variable or expression.",
    ],
  },
  {
    numb: "32",
    question: "What is the difference between `for...in` and `for...of` loops?",
    answer:
      "`for...in` iterates over object properties, while `for...of` iterates over iterable objects like arrays.",
    options: [
      "`for...in` iterates over array elements, while `for...of` iterates over object properties.",
      "`for...in` and `for...of` are identical in functionality.",
      "`for...in` iterates over object properties, while `for...of` iterates over iterable objects like arrays.",
      "`for...of` is used for asynchronous operations, `for...in` is not.",
    ],
  },
  {
    numb: "33",
    question: "What is a promise in JavaScript?",
    answer:
      "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
    options: [
      "A promise is a method for handling synchronous operations.",
      "A promise is a variable that stores a callback function.",
      "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
      "A promise is a built-in function to generate random values.",
    ],
  },
  {
    numb: "34",
    question: "What is the purpose of the `Array.prototype.map()` method?",
    answer:
      "`map()` creates a new array populated with the results of calling a provided function on every element in the original array.",
    options: [
      "`map()` filters the elements of an array based on a condition.",
      "`map()` returns the first element that satisfies a condition.",
      "`map()` creates a new array populated with the results of calling a provided function on every element in the original array.",
      "`map()` concatenates multiple arrays into one.",
    ],
  },
  {
    numb: "35",
    question:
      "How does JavaScript handle equality checks with objects and arrays?",
    answer:
      "JavaScript compares object and array references, not their values.",
    options: [
      "JavaScript compares objects and arrays by their values.",
      "JavaScript uses `==` to compare objects and arrays by value.",
      "JavaScript compares object and array references, not their values.",
      "JavaScript does not support equality checks on objects and arrays.",
    ],
  },
  {
    numb: "36",
    question: "What does the `fetch()` API do in JavaScript?",
    answer:
      "`fetch()` is used to make HTTP requests and returns a promise that resolves to the response object.",
    options: [
      "`fetch()` is used to fetch data from local storage.",
      "`fetch()` is a method for retrieving DOM elements.",
      "`fetch()` is used to pause code execution.",
      "`fetch()` is used to make HTTP requests and returns a promise that resolves to the response object.",
    ],
  },
  {
    numb: "37",
    question: "What is the purpose of the `Object.freeze()` method?",
    answer:
      "`Object.freeze()` prevents the modification of existing property values and the addition of new properties to an object.",
    options: [
      "`Object.freeze()` prevents the modification of existing property values and the addition of new properties to an object.",
      "`Object.freeze()` deletes all properties of an object.",
      "`Object.freeze()` locks an object to a specific memory address.",
      "`Object.freeze()` converts an object to a string.",
    ],
  },
  {
    numb: "38",
    question: "What is the purpose of the `reduce()` method in JavaScript?",
    answer:
      "`reduce()` executes a reducer function on each element of the array, resulting in a single output value.",
    options: [
      "`reduce()` creates a new array with all elements that pass a test.",
      "`reduce()` removes duplicate elements from an array.",
      "`reduce()` converts an array into a string.",
      "`reduce()` executes a reducer function on each element of the array, resulting in a single output value.",
    ],
  },
  {
    numb: "39",
    question: "What does the `async` keyword do in JavaScript?",
    answer:
      "`async` is used to declare functions that return a promise, allowing the use of `await` within them.",
    options: [
      "`async` is used to delay function execution until all promises are resolved.",
      "`async` is a method for defining anonymous functions.",
      "`async` automatically runs functions in parallel.",
      "`async` is used to declare functions that return a promise, allowing the use of `await` within them.",
    ],
  },
  {
    numb: "40",
    question: "What is the purpose of the `await` keyword?",
    answer:
      "`await` is used to pause the execution of an `async` function until a promise is resolved or rejected.",
    options: [
      "`await` is used to create promises within an `async` function.",
      "`await` is used to cancel an asynchronous operation.",
      "`await` is a method to handle errors in asynchronous code.",
      "`await` is used to pause the execution of an `async` function until a promise is resolved or rejected.",
    ],
  },
  {
    numb: "41",
    question: "What does the `Array.prototype.filter()` method do?",
    answer:
      "`filter()` creates a new array with all elements that pass a test implemented by a provided function.",
    options: [
      "`filter()` modifies the original array by removing elements.",
      "`filter()` concatenates multiple arrays into one.",
      "`filter()` creates a new array with all elements that pass a test implemented by a provided function.",
      "`filter()` transforms the elements of an array based on a condition.",
    ],
  },
  {
    numb: "42",
    question: "What is the purpose of the `Object.assign()` method?",
    answer:
      "`Object.assign()` copies all enumerable properties from one or more source objects to a target object.",
    options: [
      "`Object.assign()` deletes properties from an object.",
      "`Object.assign()` merges arrays into an object.",
      "`Object.assign()` converts an object to a string.",
      "`Object.assign()` copies all enumerable properties from one or more source objects to a target object.",
    ],
  },
  {
    numb: "43",
    question:
      "What is the difference between `Array.prototype.find()` and `Array.prototype.findIndex()`?",
    answer:
      "`find()` returns the first element that satisfies a condition, while `findIndex()` returns the index of that element.",
    options: [
      "`find()` and `findIndex()` are identical in functionality.",
      "`find()` returns the last element that satisfies a condition.",
      "`findIndex()` returns the last index that satisfies a condition.",
      "`find()` returns the first element that satisfies a condition, while `findIndex()` returns the index of that element.",
    ],
  },
  {
    numb: "44",
    question: "What does the `Array.prototype.some()` method do?",
    answer:
      "`some()` tests whether at least one element in the array passes the test implemented by a provided function.",
    options: [
      "`some()` checks if all elements in the array pass a test.",
      "`some()` tests whether at least one element in the array passes the test implemented by a provided function.",
      "`some()` removes elements from the array that do not pass a test.",
      "`some()` concatenates arrays based on a condition.",
    ],
  },
  {
    numb: "45",
    question: "What does the `Array.prototype.every()` method do?",
    answer:
      "`every()` tests whether all elements in the array pass the test implemented by a provided function.",
    options: [
      "`every()` checks if at least one element in the array passes a test.",
      "`every()` removes elements from the array that do not pass a test.",
      "`every()` tests whether all elements in the array pass the test implemented by a provided function.",
      "`every()` transforms the elements of an array based on a condition.",
    ],
  },
  {
    numb: "46",
    question:
      "What is the difference between `Array.prototype.splice()` and `Array.prototype.slice()`?",
    answer:
      "`splice()` modifies the original array by adding/removing elements, while `slice()` returns a shallow copy of a portion of the array.",
    options: [
      "`splice()` and `slice()` are identical in functionality.",
      "`splice()` returns a new array without modifying the original.",
      "`splice()` modifies the original array by adding/removing elements, while `slice()` returns a shallow copy of a portion of the array.",
      "`slice()` removes elements from the original array.",
    ],
  },
  {
    numb: "47",
    question: "What does the `Array.prototype.includes()` method do?",
    answer:
      "`includes()` checks if an array contains a specified element, returning `true` or `false`.",
    options: [
      "`includes()` adds a specified element to the array.",
      "`includes()` removes a specified element from the array.",
      "`includes()` checks if an array contains a specified element, returning `true` or `false`.",
      "`includes()` checks if all elements in the array are unique.",
    ],
  },
  {
    numb: "48",
    question: "What does the `Object.create()` method do?",
    answer:
      "`Object.create()` creates a new object with a specified prototype object and properties.",
    options: [
      "`Object.create()` clones an existing object.",
      "`Object.create()` merges two or more objects into one.",
      "`Object.create()` creates a new object with a specified prototype object and properties.",
      "`Object.create()` converts an object to an array.",
    ],
  },
  {
    numb: "49",
    question: "What is the purpose of the `JSON.stringify()` method?",
    answer:
      "`JSON.stringify()` converts a JavaScript object or value to a JSON string.",
    options: [
      "`JSON.stringify()` converts a JSON string to a JavaScript object.",
      "`JSON.stringify()` encodes a string for use in URLs.",
      "`JSON.stringify()` checks if a string is valid JSON.",
      "`JSON.stringify()` converts a JavaScript object or value to a JSON string.",
    ],
  },
];
