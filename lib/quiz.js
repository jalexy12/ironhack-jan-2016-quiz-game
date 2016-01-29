var read = require('read');

var Quiz = function(questions){
	this.questions = questions;
	this.currentQuestionIndex = 0;
	this.randomBonusIndex = Math.floor(Math.random() * this.questions.length);
	this.points = 0;
}

Quiz.prototype.isLastQuestion = function(){
	return (this.currentQuestionIndex === this.questions.length - 1)
}

Quiz.prototype.addPoints = function(question){
	this.points += question.points
}

Quiz.prototype.initiate = function(){
	this.askQuestion();
}

Quiz.prototype.nextQuestion = function(){
	if (!this.isLastQuestion()){
		this.currentQuestionIndex++;
		this.askQuestion();		
	} else {
		console.log("You're out of questions!")
		return;
	}
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
		this.addPoints(currentQuestion);
		console.log("Correct!", `You have ${this.points} points`);
		this.nextQuestion();
	} else {
		console.log("Wrong you suck");
		this.nextQuestion()
	}
}

module.exports = Quiz;