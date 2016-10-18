/* * * * * * * * * * * * * * * * * * * * * * * * * *
	Run this demo in the console: node ./src/demo
* * * * * * * * * * * * * * * * * * * * * * * * * */

var todoReduxState = require('../build/todo-redux-state').default;

console.log(todoReduxState);

todoReduxState.subscribe(function() {
	console.log('--->', JSON.stringify(todoReduxState.getState(), null, 2));
});

todoReduxState.actions.site.updateURL('/////////?abc=123');
todoReduxState.actions.site.updateURL('/about/////?def=456');

todoReduxState.actions.todos.updateSelectedSummaryStatus(todoReduxState.constants.TODOS_STATUSES.PENDING);

todoReduxState.actions.todos.loadTodos();
todoReduxState.actions.todos.addTodo('demo test 1');
todoReduxState.actions.todos.addTodo('demo test 2');

setTimeout(() => {
	todoReduxState.actions.todos.removeTodo('3');
	todoReduxState.actions.todos.completeTodo('10', true);
}, 500);



