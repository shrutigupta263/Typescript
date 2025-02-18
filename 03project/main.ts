import './style.css'
import { RockPaperScissors, type Choice } from './game'

const game = new RockPaperScissors();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="game-container">
    <h1>Rock Paper Scissors</h1>
    
    <div class="score-board">
      <div>Player: <span id="player-score">0</span></div>
      <div>Computer: <span id="computer-score">0</span></div>
    </div>

    <div class="choices">
      <button class="choice-btn" data-choice="rock">🪨 Rock</button>
      <button class="choice-btn" data-choice="paper">📄 Paper</button>
      <button class="choice-btn" data-choice="scissors">✂️ Scissors</button>
    </div>

    <div id="result" class="result"></div>
  </div>
`;

const playerScoreElement = document.querySelector<HTMLSpanElement>('#player-score')!;
const computerScoreElement = document.querySelector<HTMLSpanElement>('#computer-score')!;
const resultElement = document.querySelector<HTMLDivElement>('#result')!;
const buttons = document.querySelectorAll<HTMLButtonElement>('.choice-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const choice = button.dataset.choice as Choice;
    const { result, computerChoice, playerScore, computerScore } = game.play(choice);

    // Update scores
    playerScoreElement.textContent = playerScore.toString();
    computerScoreElement.textContent = computerScore.toString();

    // Show result with appropriate styling
    resultElement.className = 'result ' + result;
    resultElement.textContent = `
      You chose ${choice}, computer chose ${computerChoice}.
      You ${result}!
    `;
  });
});