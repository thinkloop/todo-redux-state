import selectedSummaryStatusReducer from '../../../todos/reducers/selected-summary-status';

import { UPDATE_SELECTED_SUMMARY_STATUS } from '../../../todos/actions/update-selected-summary-status';

import { TOTAL } from '../../../todos/constants/statuses';

describe('todos reducer', () => {
	it('default summary status', () => {
		const state = undefined;

		const action = {
			type: 'unhandled action',
			selectedSummaryStatus: 'TEST STATUS'
		};

		const expected = TOTAL;

		const reduced = selectedSummaryStatusReducer(state, action);

		expect(reduced).toEqual(expected);
	});

	it('update selected summary status todo', () => {
		const state = undefined;

		const action = {
			type: UPDATE_SELECTED_SUMMARY_STATUS,
			selectedSummaryStatus: 'TEST STATUS'
		};

		const expected = 'TEST STATUS';

		const reduced = selectedSummaryStatusReducer(state, action);

		expect(reduced).toEqual(expected);
	});
})