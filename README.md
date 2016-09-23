# Todo App Data-Layer

This project is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It contains data, state, backend services and actions to transform state.

A single top-level object is exported that exposes the current state, as well as possible actions to transform it:

```javascript
/* 
* example code in a separate project that 
* imports this project and runs some actions
*/

import todoReduxState from 'todo-redux-state';

// load todos and show state
todoReduxState.actions.todos.loadTodos();
console.log(JSON.stringify(todoReduxState.state, null, 2));

// add todo and show new state
todoReduxState.actions.todos.addTodo('demo test 1');
console.log(JSON.stringify(todoReduxState.state, null, 2));

// remove todo and show state
todoReduxState.actions.todos.removeTodo('3');

```

### Install
Using npm:

```
npm install todo-redux-state --save
```

Or download the latest build of [todo-redux-state.js](build/todo-redux-state.js).

