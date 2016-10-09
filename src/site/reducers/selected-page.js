import { UPDATE_SELECTED_PAGE } from '../../site/actions/update-selected-page';
import { UPDATE_STATE_FROM_URL } from '../../site/actions/update-state-from-url';

import { HOME } from '../../site/constants/pages';
import { PATHS } from '../../site/constants/paths';

export default function (selectedPage = HOME, action) {
	switch (action.type) {

	case UPDATE_SELECTED_PAGE:
		return action.selectedPage;

	case UPDATE_STATE_FROM_URL:
		return PATHS[action.path] || HOME;

	default:
		return selectedPage;
	}
}
