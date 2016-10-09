export const UPDATE_STATE_FROM_URL = 'UPDATE_STATE_FROM_URL';

export function updateStateFromURL(url) {
	return (dispatch, getState) => {
		const splitURL = url.split('?');

		const path = splitURL[0];
		let searchParams = {};

		if (splitURL.length >= 2) {
			searchParams = parseSearchParams(splitURL[1]);
		}

		dispatch({ type: UPDATE_STATE_FROM_URL, path, searchParams });
	};
}

function parseSearchParams(searchString) {
	let pairSplit;
	return (searchString || '').replace(/^\?/, '').split('&').reduce((p, pair) => {
		pairSplit = pair.split('=');
		if (pairSplit.length >= 1 && pairSplit[0].length >= 1) {
			p[decodeURIComponent(pairSplit[0])] = decodeURIComponent(pairSplit[1]) || '';
		}
		return p;
	}, {});
}