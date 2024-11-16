function getNumberAtArray(arr, index) {
  if (Array.isArray(arr) == false) {
    return new Error("Error!");
  } else if (index > arr.length - 1 || index < 0) {
    return new Error("Error!");
  } else {
    return arr[index];
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
