export default function (description, position) {
	const id = Math.round(Math.random() * 10000).toFixed();
	const newTodo = {
		id,
		description,
		dateCreated: new Date().toISOString(),
		isComplete: false,
		position
	};

	return new Promise((r, x) => {
		setTimeout(() => r(newTodo), 50);
	});
}
