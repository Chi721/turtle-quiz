(function() {

    var app = angular.module('turtleFacts');
    app.factory('shareData', shareData);

    function shareData($http, $q) {

        var turtleObj = {
            turtleData: [],
            quizQuestions: [],
            quizAnswers: [3, 2, 2, 0],
            setQuizQuestions: setQuizQuestions
        };


        function setQuizQuestions(newQuizQuestions){
            this.quizQuestions = newQuizQuestions;
        }

        return turtleObj;

        // var deferred = $q.defer();
        // $http({
        //     method: 'GET',
        //     url: '/angular-demo/turtle-quiz/data/quiz-questions-1.json',
        //     cache: true
        // }).success(function(data) {
        //     deferred.resolve(data);
        // }).error(function(msg) {
        //     deferred.reject(msg);
        // });

        // return deferred.promise;

    }

})();
