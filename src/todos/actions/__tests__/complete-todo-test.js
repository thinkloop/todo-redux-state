import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { UPDATE_TODOS } from '../../../todos/actions/update-todos';
import completeTodo from '../../../todos/actions/complete-todo';

const mockStore = configureMockStore([thunk]);

jest.mock('../../../todos/services/fake-backend/save-todo');

describe('completeTodo', () => {
	it('toggles todo isComplete and dispatches UPDATE_TODOS', () => {
		const id = '100';
		const isComplete = true;

		const store = mockStore({
			todos: {
				'100': {
					description: 'desc',
					dateCreated: 'an iso date',
					isComplete: false
				}
			}
		});

		const expectedActions = [{
			type: 'UPDATE_TODOS',
			todos: {
				'100': {
					description: 'desc',
					dateCreated: 'an iso date',
					isComplete: true
				}
			}
		}];

		return store.dispatch(completeTodo(id, isComplete)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
})