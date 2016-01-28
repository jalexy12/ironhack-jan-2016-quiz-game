var read = require('read');

var Quiz = function(questions){
	this.questions = questions;
	this.currentQuestionIndex = 0
}

Quiz.prototype.initiate = function(){
	this.askQuestion();
}

Quiz.prototype.nextQuestion = function(){
	this.currentQuestionIndex++;
	this.askQuestion();
}

Quiz.prototype.askQuestion = function(){
	var currentQuestion = this.questions[this.currentQuestionIndex];
	this.getUserInput(currentQuestion, this.checkAnswer);
}

Quiz.prototype.getUserInput = function(question, callback){
	var options = { prompt: question.question };
	read(options, callback.bind(this));
}

Quiz.prototype.checkAnswer = function(err, userInput){
	var currentQuestion = this.questions[this.currentQuestionIndex];
	if (userInput.toLowerCase() === currentQuestion.answer.toLowerCase()){
		console.log("Correct!");
		this.nextQuestion();
	} else {
		this.askQuestion()
	}
}

module.exports = Quiz;