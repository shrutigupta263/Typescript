type Choice = 'rock' | 'paper' | 'scissors';

class RockPaperScissors {
  private playerScore: number = 0;
  private computerScore: number = 0;
  private resultDiv: HTMLDivElement;
  private playerChoiceDiv: HTMLDivElement;
  private computerChoiceDiv: HTMLDivElement;
  private playerScoreSpan: HTMLSpanElement;
  private computerScoreSpan: HTMLSpanElement;

  constructor() {
    this.resultDiv = document.querySelector('.result') as HTMLDivElement;
    this.playerChoiceDiv = document.querySelector('.player-choice') as HTMLDivElement;
    this.computerChoiceDiv = document.querySelector('.computer-choice') as HTMLDivElement;
    this.playerScoreSpan = document.querySelector('.player-score') as HTMLSpanElement;
    this.computerScoreSpan = document.querySelector('.computer-score') as HTMLSpanElement;
    
    this.initializeGame();
  }

  private initializeGame(): void {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.playRound(button.dataset.choice as Choice);
      });
    });
  }

  private getComputerChoice(): Choice {
    const choices: Choice[] = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  private determineWinner(playerChoice: Choice, computerChoice: Choice): string {
    if (playerChoice === computerChoice) return 'Tie!';

    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };

    if (winConditions[playerChoice] === computerChoice) {
      this.playerScore++;
      this.updateScore();
      return 'You win!';
    } else {
      this.computerScore++;
      this.updateScore();
      return 'Computer wins!';
    }
  }

  private updateScore(): void {
    this.playerScoreSpan.textContent = this.playerScore.toString();
    this.computerScoreSpan.textContent = this.computerScore.toString();
  }

  private playRound(playerChoice: Choice): void {
    const computerChoice = this.getComputerChoice();
    
    this.playerChoiceDiv.textContent = `Your choice: ${playerChoice}`;
    this.computerChoiceDiv.textContent = `Computer's choice: ${computerChoice}`;
    
    const result = this.determineWinner(playerChoice, computerChoice);
    this.resultDiv.textContent = result;
  }
}

// Initialize the game
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="game-container">
    <h1>Rock Paper Scissors</h1>
    <div class="score">
      Score - You: <span class="player-score">0</span> | Computer: <span class="computer-score">0</span>
    </div>
    <div class="choices">
      <button data-choice="rock">Rock</button>
      <button data-choice="paper">Paper</button>
      <button data-choice="scissors">Scissors</button>
    </div>
    <div class="player-choice">Your choice: -</div>
    <div class="computer-choice">Computer's choice: -</div>
    <div class="result">Make your choice!</div>
  </div>
`;

new RockPaperScissors();