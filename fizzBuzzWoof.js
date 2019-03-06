'use strict';

module.exports = {
  fizzBuzzWoof
};

function fizzBuzzWoof(num) {
  let s = '';
  if (num % 3 === 0 || num.toString().indexOf('3') > -1) {
    s += "Fizz";
  }

  if (num % 5 === 0 || num.toString().indexOf('5') > -1) {
    s += "Buzz";
  }

  if (num % 7 === 0 || num.toString().indexOf('7') > -1) {
    s += "Woof";
  }

  return s;
}