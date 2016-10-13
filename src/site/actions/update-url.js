export const UPDATE_URL = 'UPDATE_URL';

export default function (newURL) {
	return (dispatch, getState) => {
		const { url } = getState();
		if (newURL === url) {
			return;
		}

		const splitURL = newURL.split('?');
		const path = splitURL[0];
		let searchParams = {};

		if (splitURL.length >= 2) {
			searchParams = parseSearchParams(splitURL[1]);
		}

		dispatch({ type: UPDATE_URL, parsedURL: { path, searchParams, url: newURL }});
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