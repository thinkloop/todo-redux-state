export const UPDATE_TODOS = 'UPDATE_TODOS';

export default function (todos, isRemove) {
	return { type: UPDATE_TODOS, todos, isRemove };
}
