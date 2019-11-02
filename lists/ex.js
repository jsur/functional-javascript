"use strict";

/*
function returnTwo() {
  return 2;
}

function returnThree() {
  return 3;
}
*/

function returnVal(val) {
  return function giveVal() {
    return val
  }
}

function add(num1, num2) {
  return num1 + num2;
}

// console.log(add(returnTwo(), returnThree()))

function add2(func1, func2) {
  add(func1(), func2())
}

function addn(...fns) {
  return function compose(v) {
    let current = v
    for (let i = 0; i < fns.length; i += 1) {
      current = fns[i](current);
    }
    return current
  }
}

function getUniques(arr = []) {
  return Array.from(new Set(arr))
}

function filterInEvens(arr = []) {
  return arr.filter(item => item % 2 === 0)
}

const nums = [1,2,3,4,4,4,5,5,6,7,8,8,8]

const vals = addn(
  getUniques,
  filterInEvens
)(nums)

console.log(addn(...vals.map(item => returnVal(item)))(nums))

