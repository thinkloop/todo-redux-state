import selectedPageReducer from '../../../site/reducers/selected-page';

import { UPDATE_SELECTED_PAGE } from '../../../site/actions/update-selected-page';

describe('selectedPage reducer', () => {
	it('update selectedPage', () => {
		const state = null;

		const selectedPage = 'SOME_NEW_PAGE';

		const action = {
			type: UPDATE_SELECTED_PAGE,
			selectedPage
		};

		const reduced = selectedPageReducer(state, action);

		expect(reduced).toEqual(selectedPage);
	});
})