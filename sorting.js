//  [5, -2, 10, 0, 3, -7] => [-7, -2, 0, 3, 5, 10]

// QuickSort
function integerSort ( inputArray ) {
    if (inputArray.length < 2) return inputArray

    let pivot = inputArray[inputArray.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] < pivot) {
        left.push(inputArray[i]);
      } else {
        right.push(inputArray[i]);
      }
    }

    return [...integerSort(left), pivot, ...integerSort(right)];
}

console.log( integerSort( [5, -2, 10, 0, 3, -7] ) );
console.log( integerSort( [8, 30, 0, 2, -3, 10] ) );
console.log( integerSort( [4, 10, -1, 8, 5, 9] ) );