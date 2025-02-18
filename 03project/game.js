"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RockPaperScissors = void 0;
var RockPaperScissors = /** @class */ (function () {
    function RockPaperScissors() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.choices = ['rock', 'paper', 'scissors'];
    }
    RockPaperScissors.prototype.getComputerChoice = function () {
        var randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    };
    RockPaperScissors.prototype.play = function (playerChoice) {
        var computerChoice = this.getComputerChoice();
        var result = this.determineWinner(playerChoice, computerChoice);
        if (result === 'win')
            this.playerScore++;
        if (result === 'lose')
            this.computerScore++;
        return {
            result: result,
            computerChoice: computerChoice,
            playerScore: this.playerScore,
            computerScore: this.computerScore
        };
    };
    RockPaperScissors.prototype.determineWinner = function (playerChoice, computerChoice) {
        if (playerChoice === computerChoice)
            return 'draw';
        var winningCombos = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };
        return winningCombos[playerChoice] === computerChoice ? 'win' : 'lose';
    };
    RockPaperScissors.prototype.resetScore = function () {
        this.playerScore = 0;
        this.computerScore = 0;
    };
    return RockPaperScissors;
}());
exports.RockPaperScissors = RockPaperScissors;
