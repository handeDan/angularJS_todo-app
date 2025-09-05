var app = angular.module("toDoApp", []);

app.controller("ToDoController", function($scope) {
    const ctrl = this;
    this.today = new Date();
    $scope.toDos = [
        {title: "Learn AngularJS", completed: false},
        {title: "Learn Java", completed: false}
    ];
    $scope.addToDo = function(toDo) {

    }

    $scope.removeToDo = function(toDo) {

    }
})