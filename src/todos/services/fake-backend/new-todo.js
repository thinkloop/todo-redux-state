export default function (description) {
	const id = Math.round(Math.random() * 10000).toFixed();
	const newTodo = {
		id,
		description,
		dateCreated: new Date().toISOString(),
		isComplete: false
	};

	return new Promise((r, x) => {
		setTimeout(() => r(newTodo), 50);
	});
}
