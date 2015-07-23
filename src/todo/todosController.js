/*global Todo*/
/*exported TodoController*/

function dummyData() {
	var todos = [];
	for (var i = 0; i < 10; i++) {
		todos.push(new Todo('todo' + (i + 1), i % 2 === 0 ? 'active' : 'completed'));
	}

	return todos;
}

function TodoController($scope) {
	$scope.todos = dummyData();

	$scope.addTodo = function() {
		$scope.todos.push(new Todo($scope.todo, 'active'));
		$scope.todo = '';
	};
}
