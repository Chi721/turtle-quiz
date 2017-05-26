(function() {

    var app = angular.module('turtleFacts');
    app.controller('quizCtrl', quizController);

    quizController.$inject = ['quizMetrics', 'dataService', 'shareData'];

    function quizController(quizMetrics, dataService, shareData) {
        var current = this;

        current.quizMetrics = quizMetrics;
        current.shareData = shareData;
        current.activeQuestionIndex = 0;
        current.questionAnswered = false;
        current.quizQuestions = [];
        current.warning = false;
        current.isReadyToSubmit = false;

        dataService.quizQuestions().success(function(data) {
            current.quizQuestions = data;
            current.shareData.setQuizQuestions(current.quizQuestions);
        });

        /**
         * Answer a question by selecting an answer and assing the 
         * answer index to "selected" property
         * @param  {number} index : selected answer index
         * @return {}           
         */
        current.answerQuestion = function(index) {
            current.quizQuestions[current.activeQuestionIndex].selected = index;
        };

        /**
         * [navigateByProgressBar description]
         * @param  {number} index : index of the question that will 
         * be jumped to
         * @return {}   
         */
        current.navigateByProgressBar = function(index) {
            current.activeQuestionIndex = index;
        };

        /**
         * Jump to next question, no matter if the current question 
         * is answered or not.
         * @return {[type]} [description]
         */
        current.goToNextQuestion = function() {
            var quizQuestionsLength = current.quizQuestions.length;

            if (current.activeQuestionIndex < quizQuestionsLength) {
                current.activeQuestionIndex++;
            }

            // check if all questions are answered
            // if not, jump to the unanswered question
            if (current.activeQuestionIndex >= quizQuestionsLength) {
                var allAnswered = true;
                for (var i = 0; i < quizQuestionsLength; i++) {
                    if (current.quizQuestions[i].selected === null) {
                        current.warning = true;
                        allAnswered = false;

                        // jump to the first unanswered question
                        current.activeQuestionIndex = i;
                        break;
                    }
                }
                current.isReadyToSubmit = allAnswered;
            }

        };

        /**
         * close warning
         * @return {[type]} [description]
         */
        current.closeWarning = function() {
            current.warning = false;
        };

        current.cancelSubmit = function() {
            current.isReadyToSubmit = false;
            current.warning = false;

            // back to the question where the submit is performed
            current.activeQuestionIndex--;
            //quiz.changeQuizState("quiz", true);
        };

        current.confirmSubmit = function() {

            current.quizMetrics.changeQuizState("result", true);
        };

        current.confirmSubmitAnswers = function(){
            // to do ...
        };

        current.cancelSubmitAnswers = function(){
            current.finished = false;
        };
    }

})();
