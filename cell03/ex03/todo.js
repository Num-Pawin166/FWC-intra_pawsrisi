const list = document.getElementById("ft_list");
const button = document.getElementById("new");

function saveCookie() {
	const todos = [];
	const items = list.getElementsByTagName("div");

	for (let i = 0; i < items.length; i++) {
		todos.push(items[i].textContent);
	}

	const value = encodeURIComponent(JSON.stringify(todos));
	document.cookie = "todos=" + value + "; path=/; max-age=31536000";
}

function loadCookie() {
	const parts = document.cookie.split("; ");

	for (let i = 0; i < parts.length; i++) {
		if (parts[i].indexOf("todos=") === 0) {
			const value = parts[i].substring(6);
			return JSON.parse(decodeURIComponent(value));
		}
	}

	return [];
}

function addTodo(text) {
	const item = document.createElement("div");
	item.className = "todo";
	item.textContent = text;

	item.addEventListener("click", function () {
		if (confirm("Remove this TODO?")) {
			item.remove();
			saveCookie();
		}
	});

	list.insertBefore(item, list.firstChild);
}

button.addEventListener("click", function () {
	const text = prompt("New TODO:");

	if (text !== null && text.trim() !== "") {
		addTodo(text);
		saveCookie();
	}
});

const saved = loadCookie();

for (let i = saved.length - 1; i >= 0; i--) {
	addTodo(saved[i]);
}