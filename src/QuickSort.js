function quicksort(array) {
  if (array.length < 2) {
    // base case, arrays with 0 or 1 element are already "sorted"
    return array;
  }
  // recursive case
  let pivot = array[0];
  // sub-array of all the elements less than the pivot
  let less = array.slice(1).filter(el => el <= pivot);
  // sub-array of all the elements greater than the pivot
  let greater = array.slice(1).filter(el => el > pivot);
  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([6, 54, 12, 63, 20, 4, 67, 1, 2, 0]));
