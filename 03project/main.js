var RockPaperScissors = /** @class */ (function () {
    function RockPaperScissors() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.resultDiv = document.querySelector('.result');
        this.playerChoiceDiv = document.querySelector('.player-choice');
        this.computerChoiceDiv = document.querySelector('.computer-choice');
        this.playerScoreSpan = document.querySelector('.player-score');
        this.computerScoreSpan = document.querySelector('.computer-score');
        this.initializeGame();
    }
    RockPaperScissors.prototype.initializeGame = function () {
        var _this = this;
        var buttons = document.querySelectorAll('button');
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                _this.playRound(button.dataset.choice);
            });
        });
    };
    RockPaperScissors.prototype.getComputerChoice = function () {
        var choices = ['rock', 'paper', 'scissors'];
        var randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };
    RockPaperScissors.prototype.determineWinner = function (playerChoice, computerChoice) {
        if (playerChoice === computerChoice)
            return 'Tie!';
        var winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };
        if (winConditions[playerChoice] === computerChoice) {
            this.playerScore++;
            this.updateScore();
            return 'You win!';
        }
        else {
            this.computerScore++;
            this.updateScore();
            return 'Computer wins!';
        }
    };
    RockPaperScissors.prototype.updateScore = function () {
        this.playerScoreSpan.textContent = this.playerScore.toString();
        this.computerScoreSpan.textContent = this.computerScore.toString();
    };
    RockPaperScissors.prototype.playRound = function (playerChoice) {
        var computerChoice = this.getComputerChoice();
        this.playerChoiceDiv.textContent = "Your choice: ".concat(playerChoice);
        this.computerChoiceDiv.textContent = "Computer's choice: ".concat(computerChoice);
        var result = this.determineWinner(playerChoice, computerChoice);
        this.resultDiv.textContent = result;
    };
    return RockPaperScissors;
}());
// Initialize the game
document.querySelector('#app').innerHTML = "\n  <div class=\"game-container\">\n    <h1>Rock Paper Scissors</h1>\n    <div class=\"score\">\n      Score - You: <span class=\"player-score\">0</span> | Computer: <span class=\"computer-score\">0</span>\n    </div>\n    <div class=\"choices\">\n      <button data-choice=\"rock\">Rock</button>\n      <button data-choice=\"paper\">Paper</button>\n      <button data-choice=\"scissors\">Scissors</button>\n    </div>\n    <div class=\"player-choice\">Your choice: -</div>\n    <div class=\"computer-choice\">Computer's choice: -</div>\n    <div class=\"result\">Make your choice!</div>\n  </div>\n";
new RockPaperScissors();
