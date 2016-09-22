export const UPDATE_SELECTED_SUMMARY_STATUS = 'UPDATE_SELECTED_SUMMARY_STATUS';

export default function (selectedSummaryStatus) {
	return { type: UPDATE_SELECTED_SUMMARY_STATUS, selectedSummaryStatus };
}
