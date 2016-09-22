/* * * * * * * * * * * * * * * * * * * * * * * * * *
	Run this demo in the console: node ./src/demo
* * * * * * * * * * * * * * * * * * * * * * * * * */

var todoReduxState = require('../build/todo-redux-state').default;

console.log(todoReduxState);

todoReduxState.subscribe(function() {
	console.log('@@@', JSON.stringify(todoReduxState.state, null, 2));
});

todoReduxState.site.updateSelectedPage(todoReduxState.constants.PAGES.ABOUT);

todoReduxState.todos.loadTodos();
todoReduxState.todos.addTodo('demo test');
todoReduxState.todos.removeTodo('3');



