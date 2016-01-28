var Question = require('./lib/question.js');
var Quiz = require('./lib/quiz.js');

var questions = [
	new Question("What is your name?", "Josh"),
	new Question("What color is the sky", "Blue"),
	new Question("What company do you work for?", "Ironhack")
]

var quiz = new Quiz(questions);
quiz.initiate();