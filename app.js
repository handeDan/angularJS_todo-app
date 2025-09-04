var app = angular.module("toDoApp", []);
app.controller("ToDoController", [ '$scope', function ($scope) {
    // read from Local Storage:
    $scope.tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // adding task:
    $scope.addTask = function () {

    }

    // Ssave tasks:
    $scope.saveTasks = function () {

    }

    // removing task:
    $scope.removeTask = function () {

    }

    // updating task:
    $scope.updateTask = function (task) {

    }


}])