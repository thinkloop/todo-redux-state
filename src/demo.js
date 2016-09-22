/* * * * * * * * * * * * * * * * * * * * * * * * * *
	Run this demo in the console: node ./src/demo
* * * * * * * * * * * * * * * * * * * * * * * * * */

var todoReduxState = require('../build/todo-redux-state').default;

console.log(todoReduxState);

todoReduxState.subscribe(function() {
	console.log('@@@', JSON.stringify(todoReduxState.state, null, 2));
});

todoReduxState.site.updateSelectedPage(todoReduxState.constants.PAGES.ABOUT);

todoReduxState.todos.updateSelectedSummaryStatus(todoReduxState.constants.TODOS_STATUSES.PENDING);

todoReduxState.todos.loadTodos();
todoReduxState.todos.addTodo('demo test 1');
todoReduxState.todos.addTodo('demo test 2');

setTimeout(() => {
	todoReduxState.todos.removeTodo('3');
	todoReduxState.todos.completeTodo('10', true);
}, 500);



