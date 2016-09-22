import { UPDATE_SELECTED_PAGE } from '../../site/actions/update-selected-page';
import { HOME } from '../../site/constants/pages';

export default function (selectedPage = HOME, action) {
	switch (action.type) {
	case UPDATE_SELECTED_PAGE:
		return action.selectedPage;

	default:
		return selectedPage;
	}
}
