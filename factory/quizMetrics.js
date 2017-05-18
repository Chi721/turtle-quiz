/**
 * This factory is used to control and check the states of quiz.
 * The available options are: 'quiz' and 'result'.
 */

(function(){

	var app = angular.module('turtleFacts');
	app.factory('quizMetrics', quizMetrics);

	function quizMetrics(){
		var quizObj = {
			quizIsActive: false,
			changeQuizState: changeQuizState
		}

		function changeQuizState(state) {
			this.quizIsActive = state;
		}

		return quizObj;
	}

})();