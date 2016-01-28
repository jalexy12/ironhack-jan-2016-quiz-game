var Question = function(question, answer){
	this.question = question;
	this.answer = answer;
}

Question.prototype.correct = function(guess){
	if (guess.toLowerCase() === this.answer.toLowerCase()){
		return true;
	} else {
		return false;
	}
}

module.exports = Question;