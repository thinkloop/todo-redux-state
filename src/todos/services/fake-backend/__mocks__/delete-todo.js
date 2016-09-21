export default function (id) {
	return new Promise((r, x) => {
		setTimeout(() => r(true), 50);
	});
}
