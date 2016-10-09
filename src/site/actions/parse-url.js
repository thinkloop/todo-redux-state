export const PARSE_URL = 'PARSE_URL';

export function parseURL(url) {
	return (dispatch, getState) => {
		const splitURL = url.split('?');

		const path = splitURL[0];
		let searchParams = {};

		if (splitURL.length >= 2) {
			searchParams = parseSearch(splitURL[1]);
		}

		dispatch({ type: PARSE_URL, path, searchParams });
	};
}

function parseSearch(searchString) {
	let pairSplit;
	return (searchString || '').replace(/^\?/, '').split('&').reduce((p, pair) => {
		pairSplit = pair.split('=');
		if (pairSplit.length >= 1 && pairSplit[0].length >= 1) {
			p[decodeURIComponent(pairSplit[0])] = decodeURIComponent(pairSplit[1]) || '';
		}
		return p;
	}, {});
}