import { UPDATE_URL } from '../../site/actions/update-url';
import { DEFAULT_PATH } from '../../site/constants/paths';

export default function (url = DEFAULT_PATH, action) {
	switch (action.type) {

	case UPDATE_URL:
		return action.parsedURL.url;

	default:
		return url;
	}
}
