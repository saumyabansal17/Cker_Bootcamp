//q1
let add = (a, b) => {
  return a + b;
};

//q2
function greet(name, message = "Welcome") {
  console.log(message, name);
}

//q3
function formatString(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

//q4
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "NY",
  },
};

function display(person) {
  return `${person.name} lives in ${person.address.city}.`;
}

//q5
function sumAll(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
sumAll(1, 2, 3, 4);

//q6
let a = [1, 2];
function filterEvens(a) {
  let b = a.filter((num) => num % 2 === 0);
  return b;
}
console.log(filterEvens(a));

//q7
let c = [1, 2, 3];
function doubleValues(c) {
  let ans = c.map((num) => num * 2);
  return ans;
}
console.log(doubleValues(c));

//q8
function findMax(...arr) {
  return Math.max(...arr);
}
findMax(1, 2, 4);

//q9
const data = [
  {
    name: "Bob",
    age: 24,
  },
  {
    name: "Alice",
    age: 21,
  },
];
function dis(data) {
  return `${data[1].name}'s age is ${data[0].age}.`;
}
dis(data);

//q10
data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
function extract(data) {
  const {
    id,
    title,
    rating: { rate, count },
  } = data[0];
  const data1 = [{ id, title, rate, count }];
  return data1;
}
console.log(extract(data));

//q11
const fun = (name = "abc") => {
  if (name) {
    console.log("if", name);
  } else {
    console.log("else", name);
  }
};

fun(""); //Output: else

//q12
const obj = { a: 1, b: { c: 2 } };
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}
const clonedObj = deepClone(obj);
clonedObj.b.c = 42;
console.log(obj.b.c);


//q13
function flattenArray(arr) {
  let result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  });

  return result;
}
console.log(flattenArray([1, [2, [3, [4, 5]]]]));
