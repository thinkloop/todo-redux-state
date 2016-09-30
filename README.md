# Todo App: State (Redux Container)

This is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It contains the data, state, backend services and actions that transform state. A single object is exported that includes a snapshot of the current `state`, as well as all possible `actions` that can be performed. While this project is used by the advanced todo app, it is not aware of it, nor dependent on it or any other app. This project provides a generalized, stand-alone, todo-oriented state container that can be implemented by any app that needs it.

*See [Multi Repo UI: React, Redux, Selectors](http://www.thinkloop.com/article/multi-repo-ui-with-react-redux-selectors/) for more details.*

### Install
Using npm:

```
npm install 'thinkloop/todo-redux-state' --save
```

Or download the latest build of [todo-redux-state.js](build/todo-redux-state.js).

### Use
Example of a 3rd party app importing this project and running some actions to change state:

```javascript
//import this project
import { state, actions, subscribe } from 'todo-redux-state';

// listen to state changes and log them to console
subscribe(() => console.log(state));

// load todos
actions.todos.loadTodos();

// add todo
actions.todos.addTodo('demo test 1');

// remove todo
actions.todos.removeTodo('3');
```

### Test Suite
Since the app has no ui, the primary consumer of it are actually tests. As such, the included test suite is comprehensive and up to date. To run the tests, clone the project, install the dependencies, then run them:

```
> git clone https://github.com/thinkloop/todo-redux-state
> npm install
> npm run -s test
```

### Conventions Used
Following are some of the conventions used to drive architectural and design choices:

- state should be minimal, any value that can be derived or calculated should not be stored in state
- state should be flat, shallow, normalized, and flexible
- prefer generic objects over arrays
- use ids to denote relationships between objects, do not nest objects
- generalize actions so they can be used for varying purposes
- name things relative to the domain, not to possible visual elements (ex: do not use "button", "form", etc.)

### License

Released under an MIT license.

### Related
1. [todo-react-components](https://github.com/thinkloop/todo-react-components) (view-layer)
2. [todo-redux-state](https://github.com/thinkloop/todo-redux-state) (data-layer)
3. [todo-app](https://github.com/thinkloop/todo-app) (integration)

### Like it? Star It

