// Q3
let arr = [1, 2, 3, 4];
console.log("Orignal:",arr);
arr.push(5);
console.log("After adding number at end:", arr);

// Q4
let arr1 = ["Sam", "aaxs", "dsa", "ds"];
console.log("Before:",arr1);
arr1.shift();
console.log("After:", arr1);

// Q5
let arr2 = [1, 4, 5, 7, 2];
console.log("Before:",arr2);
arr2.splice(2, 0, 3); 
console.log("After:", arr2);

// Q6
let arr3 = [2, 4, 2, 5, 2];
console.log("Before:",arr3);
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 2) {
    arr3[i] = 9;
  }
}
console.log("After replacing 2 with 9:", arr3);

// Q7
let arr4 = [5, 2, 8, 1, 3];
console.log("Before:",arr4);
for (let i = 0; i < arr4.length; i++) {
  for (let j = i + 1; j < arr4.length; j++) {
    if (arr4[i] > arr4[j]) {
      let temp = arr4[i];
      arr4[i] = arr4[j];
      arr4[j] = temp;
    }
  }
}
console.log("After sorting (ascending):", arr4);

// Q8
let arr5 = [1, 2, 3, 4, 5];
console.log("Before:",arr5);
for (let i = 0; i < arr5.length / 2; i++) {
  let temp = arr5[i];
  arr5[i] = arr5[arr5.length - 1 - i];
  arr5[arr5.length - 1 - i] = temp;
}
console.log("After reversing array:", arr5);

// Q9
let arr6 = [3, 1, 4, 5, 2];
console.log("Index of 2:", arr6.indexOf(2));
