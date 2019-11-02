"use strict";

function add(num1, num2) {
  return num1 + num2;
}

function add2(func1, func2) {
  return add(func1(), func2())
}

function constant(v) {
  return function f() {
    return v;
  }
}

const five = constant(5);
const nine = constant(9);

/*
function addn(...fns) {
  while (fns.length > 2) {
    let [fn0, fn1, ...rest] = fns
    fns = [
      function f(){
        return add2(fn0, fn1);
      },
      ...rest
    ];
  }
  return add2(fns[0], fns[1]);
}
*/

/*
function addn([fn0, fn1, ...rest]) {
  if (rest.length === 0) return add2(fn0, fn1);
  return addn([
    function f() {
      return add2(fn0, fn1);
    },
    ...rest
  ]);
}
*/

function addn(fns = []) {
  return fns.reduce(function reducer(composedFn, fn) {
    return function f() {
      return add2(composedFn, fn);
    }
  })();
}

console.log(addn([constant(3), constant(7), five, nine, constant(11)]));