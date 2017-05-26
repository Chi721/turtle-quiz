(function() {

    var app = angular.module('turtleFacts');
    app.controller('quizResults', quizResults);

    quizResults.$inject = ['quizMetrics', 'dataService'];

    function quizResults(quizMetrics, dataService) {
        var result = this;

        result.quizMetrics = quizMetrics;
        result.quizAnswers = dataService.quizAnswers; // standard correct answers
        result.numOfCorrectAnswers = 0;
        result.correctPercentage = 0;

        dataService.quizQuestions().success(function(data) {
            result.quizData = data;
        });

        // result.quizData = shareData.quizQuestions;

        result.countCorrectAnswers = function() {
            var quizLength = result.quizData.length;

            for (var i = 0; i < quizLength; i++) {
                if (result.quizData[i].selected === result.quizAnswers[i]) {
                    result.numOfCorrectAnswers++;
                }
            }

            return result.numOfCorrectAnswers;
        };

        //countCorrectAnswers();
    }

})();
