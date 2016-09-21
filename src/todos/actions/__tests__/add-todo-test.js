import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { UPDATE_TODOS } from '../../../todos/actions/update-todos';
import addTodo from '../../../todos/actions/add-todo';

const mockStore = configureMockStore([thunk]);

jest.mock('../../../todos/services/fake-backend/new-todo');

describe('addTodo', () => {
	it('creates new todo and dispatches UPDATE_TODOS', () => {
		const description = 'test description';

		const store = mockStore({
			todos: {
				'99': {
					description,
					dateCreated: 'an iso date',
					isComplete: false
				}
			}
		});

		const expectedActions = [{
			type: 'UPDATE_TODOS',
			todos: {
				'100': {
					description,
					dateCreated: 'an iso date',
					isComplete: false
				}
			}
		}];

		return store.dispatch(addTodo(description)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
})