import deleteTodo from '../../todos/services/fake-backend/delete-todo';
import updateTodos from '../../todos/actions/update-todos';

export default function (id) {
	return (dispatch, getState) => {
		return deleteTodo(id).then(todo => {
			const isRemove = true;
			dispatch(updateTodos({ [id]: todo || true }, isRemove));
		});
	};
}
