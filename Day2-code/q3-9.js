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
function replace(arr,ele,newEle){
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === ele) {
    arr[i] = newEle;
  }
}
return arr;
}

console.log("After replacing :", replace(arr3,2,9));

// Q7
let arr4 = [5, 2, 8, 1, 3];
console.log("Before:",arr4);
function sortIncreasing(arr){
  for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
return arr;
}

console.log("After sorting (ascending):", sortIncreasing(arr4));

// Q8
let arr5 = [1, 2, 3, 4, 5];
console.log("Before:",arr5);
function reverseArray(arr){
for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
return arr;
}

console.log("After reversing array:", reverseArray(arr5));

// Q9
let arr6 = [3, 1, 4, 5, 2];
console.log("Index of 2:", arr6.indexOf(2));
