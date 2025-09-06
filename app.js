var app = angular.module("toDoApp", []);

app.controller("ToDoController", function($scope) {
    const ctrl = this;
    this.today = new Date();
    $scope.toDos = [
        {title: "Learn AngularJS", description: "practice directives and filters", completed: false},
        {title: "Learn Java", description: "you need to learn Java to become a software developer", completed: false},
        { title: "Push to GitHub", description: "commit and push project repo", completed: false },
        {title: "Feed the dogs", description: "you need to feed the dogs to become a pet owner", completed: false},
        {title: "Pay for the bills", description: "you need to pay for the bills to become a financially independent person", completed: false},
        {title: "Remember to buy groceries", description: "you need to remember to buy groceries to become a healthy person", completed: false}
    ];
    $scope.colors = ["#ea7e7e", "#68b2ad", "#e7ce74", "#ea7e7e", "#68b2ad","#e7ce74"];

    $scope.addToDo = function(toDo) {

    }

    $scope.removeToDo = function(toDo) {

    }
})