$(document).ready(function () {

	function isPositiveInteger(value) {
		if (value.trim() === "") {
			return false;
		}
		const number = Number(value);
		return Number.isInteger(number) && number >= 0;
	}

	$("#submit").click(function () {
		const a = $("#left").val();
		const b = $("#right").val();
		const op = $("#operator").val();

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
	}, 30000);
});