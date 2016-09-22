export default function (id, todo) {
	return new Promise((r, x) => {
		setTimeout(() => r({ id, todo }), 50);
	});
}
