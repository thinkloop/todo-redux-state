export const UPDATE_SELECTED_PAGE = 'UPDATE_SELECTED_PAGE';

export default function (selectedPage) {
	return { type: UPDATE_SELECTED_PAGE, selectedPage };
}
