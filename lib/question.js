var Question = function(question, answer, points){
	this.question = question;
	this.answer = answer;
	this.points = points;
}

Question.prototype.correct = function(guess){
	if (guess.toLowerCase() === this.answer.toLowerCase()){
		return true;
	} else {
		return false;
	}
}

module.exports = Question;