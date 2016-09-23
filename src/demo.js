/* * * * * * * * * * * * * * * * * * * * * * * * * *
	Run this demo in the console: node ./src/demo
* * * * * * * * * * * * * * * * * * * * * * * * * */

var todoReduxState = require('../build/todo-redux-state').default;

console.log(todoReduxState);

todoReduxState.subscribe(function() {
	console.log('--->', JSON.stringify(todoReduxState.state, null, 2));
});

todoReduxState.actions.site.updateSelectedPage(todoReduxState.constants.PAGES.ABOUT);

todoReduxState.actions.todos.updateSelectedSummaryStatus(todoReduxState.constants.TODOS_STATUSES.PENDING);

todoReduxState.actions.todos.loadTodos();
todoReduxState.actions.todos.addTodo('demo test 1');
todoReduxState.actions.todos.addTodo('demo test 2');

setTimeout(() => {
	todoReduxState.actions.todos.removeTodo('3');
	todoReduxState.actions.todos.completeTodo('10', true);
}, 500);



