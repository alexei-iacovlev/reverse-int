module.exports = function reverse(n) {
	let str = String(Math.abs(n));
	let strReverse = str.split("").reverse().join("");
	return Number(strReverse);
}
