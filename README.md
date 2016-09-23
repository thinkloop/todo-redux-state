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
Since the app has no ui, the primary consumer of the services are actually tests. As such, the test suite is comprehensive and always up to date. To run it, clone the project,install the dependencies, and run the tests:

```
> git clone https://github.com/thinkloop/todo-redux-state
> npm install
> npm run -s test
```
