(function() {

    var app = angular.module('turtleFacts');
    app.factory('shareData', shareData);

    function shareData() {

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
    }

})();
