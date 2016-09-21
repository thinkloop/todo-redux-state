import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { UPDATE_TODOS } from '../../../todos/actions/update-todos';
import removeTodo from '../../../todos/actions/remove-todo';

const mockStore = configureMockStore([thunk]);

jest.mock('../../../todos/services/fake-backend/delete-todo');

describe('removeTodo', () => {
	it('creates new todo and dispatches UPDATE_TODOS', () => {
		const store = mockStore({
			todos: {
				'123': {
					description: 'abc'
				}
			}
		});

		const id = '123';
		const expectedActions = [{
			type: 'UPDATE_TODOS',
			todos: {
				[id]: true
			},
			isRemove: true
		}];

		return store.dispatch(removeTodo(id)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
})