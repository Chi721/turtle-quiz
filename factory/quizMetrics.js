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
			quizResultIsActive: false,
			changeQuizState: changeQuizState
		}

		function changeQuizState(operation, state) {
			if(operation === "quiz"){
				this.quizIsActive = state;
				if(state === true){
					this.quizResultIsActive = !state;
				}
			}
			else if(operation === "result"){
				this.quizResultIsActive = state;
				if(state === true){
					this.quizIsActive = !state;
				}
			}
			else {
				console.log("wrong operation ");
			}
			
		}

		return quizObj;
	}

})();