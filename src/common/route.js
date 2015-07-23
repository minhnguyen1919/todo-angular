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
            var name = '';

            scope.state = true;

            var click = function() {
              console.log('asdasd');
              scope.state = !scope.state;
            }

            scope.click = click;

            element.bind('click', function () {
              console.log('You clicked me!');
            });
            element.bind('mouseenter', function () {
              console.log('mouse enter');
            });
            element.bind('mouseleave', function () {
              console.log('mouse leave');
            });
          }
        };
      }
    ]
  );
