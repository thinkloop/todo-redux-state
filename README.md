*See [Extreme Decoupling
React, Redux, Selectors ](http://www.thinkloop.com/article/extreme-decoupling-react-redux-selectors/) for more details.*

# Todo App: State (Redux Container)

This is 1 of 3 projects that make up the [advanced todo app](https://github.com/thinkloop/todo-app). It contains the data, state, backend services and actions that transform state. A single object is exported that includes a snapshot of the current `state`, as well as all possible `actions` that can be performed. While this project is used by the advanced todo app, it is not aware of it, nor dependent on it or any other app. This project provides a generalized, stand-alone, todo-oriented state container that can be implemented by any app that needs it.

## Install
Using npm:

```
npm install 'thinkloop/todo-redux-state' --save
```

Or download the latest build of [todo-redux-state.js](build/todo-redux-state.js).

## Use
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

## Test Suite
Since the app has no ui, the primary consumer of it are actually tests. As such, the included test suite is comprehensive and up to date. To run the tests, clone the project, install the dependencies, then run them:

```
> git clone https://github.com/thinkloop/todo-redux-state
> npm install
> npm run -s test
```

## Conventions Used
Following are some of the conventions used to drive architectural and design choices:

- state should be minimal, any value that can be derived or calculated should not be stored in state
- state should be flat, shallow, normalized, and flexible
- prefer generic objects over arrays
- use ids to denote relationships between objects, do not nest objects
- generalize actions so they can be used for varying purposes
- name things relative to the domain, not to possible visual elements (ex: do not use "button", "form", etc.)

## License

Released under an MIT license.

## Related
- [todo-app](https://github.com/thinkloop/todo-app/): Example todo app of extreme decoupling of react, redux and selectors
- [todo-react-components](https://github.com/thinkloop/todo-react-components): React components for extreme decoupling todo app example

## Other
- [memoizerific](https://github.com/thinkloop/memoizerific/): Fast, small, efficient JavaScript memoization to memoize JS functions
- [link-react](https://github.com/thinkloop/link-react/): A generalized link <a> component that allows client-side navigation while taking into account exceptions
- [spa-webserver](https://github.com/thinkloop/spa-webserver/): Webserver that redirects to root index.html if path is missing for client-side SPA navigation

## Like it? Star It

