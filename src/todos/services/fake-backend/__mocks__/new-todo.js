export default function (description) {
	const id = '100';
	const newTodo = {
		id,
		description,
		dateCreated: 'an iso date',
		isComplete: false
	};

	return new Promise((r, x) => {
		setTimeout(() => r(newTodo), 50);
	});
}
