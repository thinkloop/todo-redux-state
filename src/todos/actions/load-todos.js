import loadAllTodos from '../../todos/services/fake-backend/load-all-todos';
import updateTodos from '../../todos/actions/update-todos';

export const LOAD_TODOS = 'LOAD_TODOS';

export default function (todos) {
	return (dispatch, getState) => {
		return loadAllTodos().then(todos => {
			dispatch(updateTodos(todos));
		});
	};
}
