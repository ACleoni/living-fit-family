function findMissingNumber(array) {
  var n = array.length;

  var sumTotal = (n * (n + 1)) / 2;
  var sum = 0;

  for (var i = 0; i < n - 1; i++) {
    sum = sum + array[i];
  }
  return sumTotal - sum;
}

const misingNumber = findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10]);

console.log(misingNumber);
