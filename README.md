# Todo App Data-Layer

This project is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It contains data, state, backend services and actions to transform state. A single object is exported with a snapshot of the current `state`, as well as all possible `actions`:

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

- structure state into flat, flexible, shallow shapes
- store the minimum state possible, do not store anything that can be derived from other state
- prefer generic objects over arrays
- use ids to denote relationships between objects, do not nest objects
- generalize actions so they can be used for varying purposes
- name things relative to the domain, not to ui implementations (ex: do not use "button", "form", etc.)
