export const UPDATE_TODOS = 'UPDATE_TODOS';

export default function (todos) {
	return { type: UPDATE_TODOS, todos };
}
