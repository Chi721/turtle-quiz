/**
 * This factory is used to request the needed data.
 * Returns corresponding promise object.
 */

(function() {

    var app = angular.module('turtleFacts');
    app.factory('dataService', dataService);

    function dataService($http) {

        var turtleObj = {
            turtleData: getTurtleData,
            quizQuestions: getQuizQuestions
        };

        // $http in factory has a different way to use, 
        // not same like in controller 
        // here in factory just return a promise, not result data :)
        function getTurtleData() {
            return $http.get('/angular-demo/turtle-quiz/data/turtle-data.json');
        }

        function getQuizQuestions() {
            return $http.get('/angular-demo/turtle-quiz/data/quiz-questions.json');
        }

        return turtleObj;
    }

})();
