export default function () {
	const todos = {
		'10': {
			description: 'test to do id 10',
			dateCreated: '2016-09-19T18:44:15.635',
			isComplete: false
		},
		'3': {
			description: 'test to do id 3',
			dateCreated: '2016-09-20T18:44:18.635',
			isComplete: false
		}
	};

	return new Promise((r, x) => {
		setTimeout(() => r(todos), 50);
	});
}
