import urlReducer from '../../../site/reducers/url';

import { UPDATE_URL } from '../../../site/actions/update-url';

describe('url reducer', () => {
	it('update url', () => {
		const state = null;

		const parsedURL = {
			path: '/about',
			searchParams: { yp: 'mo' },
			url: 'http://some.new.url.com/about?yo=mo'
		};

		const action = {
			type: UPDATE_URL,
			parsedURL
		};

		const reduced = urlReducer(state, action);

		expect(reduced).toEqual(parsedURL.url);
	});
})