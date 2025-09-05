app.directive("headerDirective", function () {
    return {
        restrict: "E",
        templateUrl: "./templates/header.html",
        controller: "ToDoController",
        controllerAs: "ctrl",
        bindToController: true,
        scope: {}
    }
});