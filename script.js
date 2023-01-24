'use strict';

const game = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const randomChoice = function () {
	let randomNumber = Math.trunc(Math.random() * 3 + 1);
	let computersChoice = game[randomNumber - 1];
	// if (randomNumber === 1) {
	// 	computersChoice = game[0];
	// } else if (randomNumber === 2) {
	// 	computersChoice = game[1];
	// } else if (randomNumber === 3) {
	// 	computersChoice = game[2];
	// }
	console.log(computersChoice);
	return computersChoice;
};

let choice = randomChoice();

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

const displayChoice = function (choice) {
	document.querySelector('.random-choice').textContent = choice;
};

const rockPaperScissors = function (playersChoice, computersChoice) {
	if (playersChoice === computersChoice) return `It's a draw!`;
	else if (playersChoice === game[0]) {
		return computersChoice === game[1]
			? 'Paper beats rock'
			: 'Rock beats scissors';
	} else if (playersChoice === game[1]) {
		return computersChoice === game[0]
			? 'Paper beats rock'
			: 'Scissors beats paper';
	} else if (playersChoice === game[2]) {
		return computersChoice === game[0]
			? 'Rock beats scissors'
			: 'Scissors beats paper';
	} else return 'Choose between rock, paper, or scissors';
};

document.querySelector('.play').addEventListener('click', function () {
	let playersChoice = document.querySelector('.guess').value.toLowerCase();
	let checkWinner;
	if (playersChoice === '')
		displayMessage('Please choose between rock, paper, or scissors');
	else if (
		playersChoice !== game[0] &&
		playersChoice !== game[1] &&
		playersChoice !== game[2]
	) {
		displayMessage(
			'Invalid choice! Please choose between rock, paper, or scissors!'
		);
	} else {
		const string = rockPaperScissors(playersChoice, choice);
		displayMessage(string);
		displayChoice(choice);
		const array = string.split(' ');
		checkWinner = array[0];
		if (checkWinner.toLowerCase() === playersChoice.toLowerCase()) {
			playerScore++;
			document.querySelector('.player-score').textContent = playerScore;
			console.log(`player score is ${playerScore}`);
		} else if (checkWinner.toLowerCase() === choice.toLowerCase()) {
			computerScore++;
			document.querySelector('.computer-score').textContent =
				computerScore;
			console.log(`computer score is ${computerScore}`);
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	choice = randomChoice();
	displayMessage(`Let's play...`);
	displayChoice('/');
	document.querySelector('.guess').value = '';
});
