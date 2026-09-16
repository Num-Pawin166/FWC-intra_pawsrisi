$(document).ready(function () {

	function saveCookie() {
		const todos = [];

		$("#ft_list div").each(function () {
			todos.push($(this).text());
		});

		const value = encodeURIComponent(JSON.stringify(todos));
		document.cookie = "todos=" + value + "; path=/; max-age=31536000";
	}

	function loadCookie() {
		const parts = document.cookie.split("; ");

		for (let i = 0; i < parts.length; i++) {
			if (parts[i].indexOf("todos=") === 0) {
				return JSON.parse(decodeURIComponent(parts[i].substring(6)));
			}
		}

		return [];
	}

	function addTodo(text) {
		const item = $("<div>").addClass("todo").text(text);

		item.click(function () {
			if (confirm("Remove this TODO?")) {
				item.remove();
				saveCookie();
			}
		});

		$("#ft_list").prepend(item);
	}

	$("#new").click(function () {
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
});