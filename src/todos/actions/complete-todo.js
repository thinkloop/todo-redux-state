import saveTodo from '../../todos/services/fake-backend/save-todo';
import updateTodos from '../../todos/actions/update-todos';

export default function (id, isComplete) {
	return (dispatch, getState) => {
		const { todos } = getState();
		const todo = todos[id];

		if (!todo) {
			return;
		}

		todo.isComplete = isComplete;

		return saveTodo(id, todo).then(res => {
			dispatch(updateTodos({ [res.id]: res.todo }));
		});
	};
}
