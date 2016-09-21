import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import loadTodos from '../../../todos/actions/load-todos';

import { UPDATE_TODOS } from '../../../todos/actions/update-todos';

const mockStore = configureMockStore([thunk]);

jest.mock('../../../todos/services/fake-backend/load-all-todos');

describe('loadTodos', () => {
	it('loads all todos and dispatches UPDATE_TODOS', () => {
		const store = mockStore();

		const expectedActions = [{
			type: UPDATE_TODOS,
			todos: {
				'10': {
					description: 'test to do id 10',
					dateCreated: '2016-09-19T18:44:15.635',
					isComplete: false
				},
				'3': {
					description: 'test to do id 3',
					dateCreated: '2016-09-20T18:44:18.635',
					isComplete: false
				}
			}
		}];

		return store.dispatch(loadTodos()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
})