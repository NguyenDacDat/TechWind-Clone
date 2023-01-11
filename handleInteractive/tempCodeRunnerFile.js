const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reduceCustom = function (callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};
console.log(numbers.reduceCustom((acc, currentItem) => acc + currentItem, 0));
