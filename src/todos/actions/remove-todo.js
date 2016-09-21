import deleteTodo from '../../todos/services/fake-backend/delete-todo';
import updateTodos from '../../todos/actions/update-todos';

export default function (id) {
	return (dispatch, getState) => {
		return deleteTodo(id).then(todo => {
			dispatch(updateTodos({ [id]: null }));
		});
	};
}
