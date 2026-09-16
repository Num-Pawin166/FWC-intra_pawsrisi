const balloon = document.getElementById("balloon");

const colors = ["red", "green", "blue"];
let size = 200;
let colorIndex = 0;

function draw() {
	balloon.style.width = size + "px";
	balloon.style.height = size + "px";
	balloon.style.backgroundColor = colors[colorIndex];
}

/* คลิก: ใหญ่ขึ้น 10px, สีเดินหน้า red -> green -> blue -> red */
balloon.addEventListener("click", function () {
	size = size + 10;
	colorIndex = (colorIndex + 1) % 3;

	if (size > 420) {
		size = 200;
		colorIndex = 0;
	}

	draw();
});

balloon.addEventListener("mouseleave", function () {
	size = size - 5;
	if (size < 200) {
		size = 200;
	}

	colorIndex = (colorIndex + 2) % 3;

	draw();
});