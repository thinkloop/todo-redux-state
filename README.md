# Todo App - Data-Layer (Redux State Container)

This is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It contains the data, state, backend services and actions to transform todo-related state. A single object is exported that includes a snapshot of the current `state`, as well as all possible `actions` that can be performed. While this project is used by the advanced todo app, it is not aware of, nor dependent on it, or any other implementers. This project simply provides a generalized, stand-alone todo-oriented state container that can be implemented by any app that needs it.

Example of 3rd party integration:

```javascript
/* 
* example code in a separate project that 
* imports this project and runs some actions
*/

import todoReduxState from 'todo-redux-state';

// load todos and show state
todoReduxState.actions.todos.loadTodos();
console.log(todoReduxState.state);

// add todo and show new state
todoReduxState.actions.todos.addTodo('demo test 1');
console.log(todoReduxState.state);

// remove todo and show new state
todoReduxState.actions.todos.removeTodo('3');
console.log(todoReduxState.state);
```

### Install
Using npm:

```
npm install todo-redux-state --save
```

Or include the latest build of [todo-redux-state.js](build/todo-redux-state.js) in your project.

### Test Suite
Since the app has no ui, the primary consumer of the services are actually tests. As such, the test suite is comprehensive and up to date. To run the tests, clone the project and install the dependencies, then run:

```
> git clone https://github.com/thinkloop/todo-redux-state
> npm install
> npm run -s test
```

### Conventions Used
Following are some of the conventions used to drive architectural and design choices:

- state should be flat, shallow, normalized, and flexible
- state should be minimal, any value that can be derived or calculated should not be stored in state
- prefer generic objects over arrays
- use ids to denote relationships between objects, do not nest objects
- generalize actions so they can be used for varying purposes
- name things relative to the domain, not to ui implementations (ex: do not use "button", "form", etc.)

### License

Released under an MIT license.

### Related
1. [todo-react-components](https://github.com/thinkloop/todo-react-components): view-layer
2. [todo-redux-state](https://github.com/thinkloop/todo-redux-state): data-layer
3. [todo-app](https://github.com/thinkloop/todo-app): integration

### Like it? Star It

