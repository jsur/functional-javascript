"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers = []) {
	const newNumbers = [ ...numbers ]
	if (!newNumbers.includes(num)) {
		newNumbers.push(num)
		newNumbers.sort((a, b) => a - b)
	}
	return newNumbers
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(),
		Object.freeze(luckyLotteryNumbers)
	);
}

console.log(luckyLotteryNumbers);
