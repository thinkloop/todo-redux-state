import { UPDATE_SELECTED_SUMMARY_STATUS } from '../../todos/actions/update-selected-summary-status';

import { TOTAL } from '../../todos/constants/statuses';

export default function (selectedSummaryStatus = TOTAL, action) {
	switch (action.type) {
	case UPDATE_SELECTED_SUMMARY_STATUS:
		return action.selectedSummaryStatus;

	default:
		return selectedSummaryStatus;
	}
}
