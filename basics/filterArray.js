const myNumber = [23, 24, 53, 72, 45, 89, 98];

const result = myNumber.filter((num) => num < 53);
// console.log(result);

/* Filtering small greater number*/

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myPrimeArray = newArray.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);
