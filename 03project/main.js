"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var game_1 = require("./game");
var game = new game_1.RockPaperScissors();
document.querySelector('#app').innerHTML = "\n  <div class=\"game-container\">\n    <h1>Rock Paper Scissors</h1>\n    \n    <div class=\"score-board\">\n      <div>Player: <span id=\"player-score\">0</span></div>\n      <div>Computer: <span id=\"computer-score\">0</span></div>\n    </div>\n\n    <div class=\"choices\">\n      <button class=\"choice-btn\" data-choice=\"rock\">\uD83E\uDEA8 Rock</button>\n      <button class=\"choice-btn\" data-choice=\"paper\">\uD83D\uDCC4 Paper</button>\n      <button class=\"choice-btn\" data-choice=\"scissors\">\u2702\uFE0F Scissors</button>\n    </div>\n\n    <div id=\"result\" class=\"result\"></div>\n  </div>\n";
var playerScoreElement = document.querySelector('#player-score');
var computerScoreElement = document.querySelector('#computer-score');
var resultElement = document.querySelector('#result');
var buttons = document.querySelectorAll('.choice-btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var choice = button.dataset.choice;
        var _a = game.play(choice), result = _a.result, computerChoice = _a.computerChoice, playerScore = _a.playerScore, computerScore = _a.computerScore;
        // Update scores
        playerScoreElement.textContent = playerScore.toString();
        computerScoreElement.textContent = computerScore.toString();
        // Show result with appropriate styling
        resultElement.className = 'result ' + result;
        resultElement.textContent = "\n      You chose ".concat(choice, ", computer chose ").concat(computerChoice, ".\n      You ").concat(result, "!\n    ");
    });
});
