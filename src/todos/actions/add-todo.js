import newTodo from '../../todos/services/fake-backend/new-todo';
import updateTodos from '../../todos/actions/update-todos';

export default function (description) {
	return (dispatch, getState) => {
		const { todos } = getState();

		return newTodo(description).then(todo => {
			const id = todo.id;
			delete todo.id;
			dispatch(updateTodos({ [id]: todo }));
		});
	};
}
