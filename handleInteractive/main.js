// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.reduceCustom = function (callback, initialValue) {
//   let result = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     result = callback(result, this[i]);
//   }
//   return result;
// };
// console.log(numbers.reduceCustom((acc, currentItem) => acc + currentItem, 0));

const numbers = [1, 2, 3, 4, 5, 6];
numbers.reduce2 = function (callback, initialValue) {
  let results = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) {
      results = callback(results, this[i]);
    }
  }
  return results;
};
console.log(numbers.reduce2((acc, curr) => acc + curr, 0));
