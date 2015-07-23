/*global angular, TodoController*/

var todoApp = angular.module('TodoApp', []);

todoApp.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		controller: TodoController,
		templateUrl: 'todo/todosView.html'
	}).
	otherwise({
		redirectTo: '/'
	});
})
.directive('todoDirective',
    [
      function() {
        return {
          replace: true,
          templateUrl: 'todo/todo.template.html',
          scope: {
            todo: '=todoData'
          },
          controller: function($scope, $element, $attrs) {

          },
          link: function(scope, element, attrs) {

          }
        };
      }
    ]
  );
