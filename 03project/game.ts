export type Choice = 'rock' | 'paper' | 'scissors';
export type GameResult = 'win' | 'lose' | 'draw';

export class RockPaperScissors {
  private playerScore: number = 0;
  private computerScore: number = 0;

  private choices: Choice[] = ['rock', 'paper', 'scissors'];

  getComputerChoice(): Choice {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  play(playerChoice: Choice): { 
    result: GameResult; 
    computerChoice: Choice;
    playerScore: number;
    computerScore: number;
  } {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(playerChoice, computerChoice);
    
    if (result === 'win') this.playerScore++;
    if (result === 'lose') this.computerScore++;

    return {
      result,
      computerChoice,
      playerScore: this.playerScore,
      computerScore: this.computerScore
    };
  }

  private determineWinner(playerChoice: Choice, computerChoice: Choice): GameResult {
    if (playerChoice === computerChoice) return 'draw';

    const winningCombos: Record<Choice, Choice> = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };

    return winningCombos[playerChoice] === computerChoice ? 'win' : 'lose';
  }

  resetScore(): void {
    this.playerScore = 0;
    this.computerScore = 0;
  }
}