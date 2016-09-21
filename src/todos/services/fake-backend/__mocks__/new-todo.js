export default function (description, position) {
	const id = '100';
	const newTodo = {
		id,
		description,
		dateCreated: 'an iso date',
		isComplete: false,
		position
	};

	return new Promise((r, x) => {
		setTimeout(() => r(newTodo), 50);
	});
}
