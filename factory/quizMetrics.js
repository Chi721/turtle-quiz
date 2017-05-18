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