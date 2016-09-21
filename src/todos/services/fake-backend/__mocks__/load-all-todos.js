export default function () {
	const todos = {
		'10': {
			description: 'test to do id 10',
			dateCreated: '2016-09-19T18:44:15.635',
			isComplete: false,
			position: 1,
		},
		'3': {
			description: 'test to do id 10',
			dateCreated: '2016-09-20T18:44:18.635',
			isComplete: false,
			position: 2
		}
	};

	return new Promise((r, x) => {
		setTimeout(() => r(todos), 50);
	});
}
