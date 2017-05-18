(function() {
    // fetch the app w/o indicating dependencies []
    var app = angular.module('turtleFacts');
    app.controller('listCtrl', listController);

    // the following statement is optional. (Dependency Injection)
    // But the content in brackets should be consistent with 
    // the parameters in Controller function. 
    listController.$inject = ['quizMetrics', 'dataService'];  

    // in order to make code more readable,
    // use named functions instead of anonymous functions
    function listController(quizMetrics, dataService) {
        var current = this;
        current.activeTurtle = {};
        current.search = ""; // ng-model: two-way binding
        // current.quizIsActive = false; // move this flag to the factory quizMetrics
        current.quizMetrics = quizMetrics;

        // use the promise from the factory dataService to get json data
        dataService.turtleData().success(function(data) {
            current.data = data;
        });


        current.changeActiveTurtle = function(activeTurtle) {
            current.activeTurtle = activeTurtle;
        }

        current.activateQuiz = function() {
            // current.quizIsActive = true;
            current.quizMetrics.changeQuizState(true);
        }
    }


})();
