import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { UPDATE_TODOS } from '../../../todos/actions/update-todos';
import addTodo from '../../../todos/actions/add-todo';

const mockStore = configureMockStore([thunk]);

jest.mock('../../../todos/services/fake-backend/new-todo');

describe('addTodo', () => {
	it('creates new todo and dispatches UPDATE_TODOS', () => {
		const store = mockStore({
			todos: {
				'99': {
					description: 'some description',
					dateCreated: 'an iso date',
					isComplete: false
				}
			}
		});

		const description = 'test description';

		const expectedActions = [{
			type: UPDATE_TODOS,
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

	it('does not create new todo, due to empty description', () => {
		const store = mockStore({
			todos: {
				'99': {
					description: 'some description',
					dateCreated: 'an iso date',
					isComplete: false
				}
			}
		});

		const description = '';

		const expectedActions = [];

		return store.dispatch(addTodo(description)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
})