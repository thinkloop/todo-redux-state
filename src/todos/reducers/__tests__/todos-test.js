import todosReducer from '../../../todos/reducers/todos';

import { UPDATE_TODOS } from '../../../todos/actions/update-todos';

describe('todos reducer', () => {
	it('adds todo', () => {
		const state = {};

		const action = {
			type: UPDATE_TODOS,
			todos: {
				'222': { descrption: 'test description 222' },
				'222': { descrption: 'test description 222' }
			}
		};

		const expected = {
			'222': {
				descrption: 'test description 222'
			}
		};

		const reduced = todosReducer(state, action);

		expect(expected).toEqual(reduced);
	});

	it('adds multiple todo', () => {
		const state = {
			'333': { descrption: 'test description 333' }
		};

		const action = {
			type: UPDATE_TODOS,
			todos: {
				'222': { descrption: 'test description 222' },
				'444': { descrption: 'test description 444' }
			}
		};

		const expected = {
			'222': { descrption: 'test description 222' },
			'333': { descrption: 'test description 333' },
			'444': { descrption: 'test description 444' }
		};

		const actual = todosReducer(state, action);

		expect(expected).toEqual(actual);
	});

	it('removes todo', () => {
		const state = {
			'222': {
				descrption: 'test description 222'
			}
		};

		const action = {
			type: UPDATE_TODOS,
			todos: {
				'222': true
			},
			isRemove: true
		};

		const expected = {};

		const reduced = todosReducer(state, action);

		expect(expected).toEqual(reduced);
	});

	it('removes multiple todo', () => {
		const state = {
			'222': { descrption: 'test description 222' },
			'333': { descrption: 'test description 333' },
			'444': { descrption: 'test description 444' }
		};

		const action = {
			type: UPDATE_TODOS,
			todos: {
				'222': true,
				'222': true,
				'444': true
			},
			isRemove: true
		};

		const expected = {
			'333': { descrption: 'test description 333' }
		};

		const actual = todosReducer(state, action);

		expect(expected).toEqual(actual);
	});
})