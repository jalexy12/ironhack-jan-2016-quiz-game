var Question = require('./lib/question.js');
var Quiz = require('./lib/quiz.js');

var questions = [
	new Question("What is your name?", "Josh", 2),
	new Question("What color is the sky", "Blue", 1),
	new Question("What company do you work for?", "<I></I>ronhack", 3)
]

var quiz = new Quiz(questions);
quiz.initiate();