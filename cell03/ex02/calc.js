const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");
const button = document.getElementById("submit");

function isPositiveInteger(value) {
	if (value.trim() === "") {
		return false;
	}
	const number = Number(value);
	return Number.isInteger(number) && number >= 0;
}

button.addEventListener("click", function () {
	const a = left.value;
	const b = right.value;
	const op = operator.value;

	if (!isPositiveInteger(a) || !isPositiveInteger(b)) {
		alert("Error :(");
		console.log("Error :(");
		return;
	}

	const x = Number(a);
	const y = Number(b);

	if ((op === "/" || op === "%") && y === 0) {
		alert("It's over 9000!");
		console.log("It's over 9000!");
		return;
	}

	let result;
	if (op === "+") {
		result = x + y;
	} else if (op === "-") {
		result = x - y;
	} else if (op === "*") {
		result = x * y;
	} else if (op === "/") {
		result = x / y;
	} else {
		result = x % y;
	}

	alert(result);
	console.log(result);
});

setInterval(function () {
	alert("Please, use me...");
}, 5000);