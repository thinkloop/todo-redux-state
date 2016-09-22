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

		expect(reduced).toEqual(expected);
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

		const reduced = todosReducer(state, action);

		expect(reduced).toEqual(expected);
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
				'222': null
			}
		};

		const expected = {};

		const reduced = todosReducer(state, action);

		expect(reduced).toEqual(expected);
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
				'222': null,
				'222': null,
				'444': null
			}
		};

		const expected = {
			'333': { descrption: 'test description 333' }
		};

		const reduced = todosReducer(state, action);

		expect(reduced).toEqual(expected);
	});
})