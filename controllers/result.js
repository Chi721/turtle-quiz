(function() {

    var app = angular.module('turtleFacts');
    app.controller('quizResults', quizResults);

    quizResults.$inject = ['quizMetrics', 'dataService', 'shareData'];

    function quizResults(quizMetrics, dataService, shareData) {
        var result = this;

        result.quizMetrics = quizMetrics;
        result.quizAnswers = dataService.quizAnswers; // standard correct answers
        result.numOfCorrectAnswers = 0;
        result.correctPercentage = 0;

        // dataService.quizQuestions().success(function(data) {
        //     result.quizQuestions = data;
        // });

        result.quizQuestions = shareData.quizQuestions;

        result.countCorrectAnswers = function() {
            var quizLength = result.quizQuestions.length;

            for (var i = 0; i < quizLength; i++) {
                if (result.quizQuestions[i].selected === result.quizAnswers[i]) {
                    result.numOfCorrectAnswers++;
                }
            }

            return result.numOfCorrectAnswers;
        };

        //countCorrectAnswers();
    }

})();
