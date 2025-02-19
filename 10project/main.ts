interface TypingTest {
    timer: number;
    isRunning: boolean;
    interval: number | null;
    sampleText: string;
  }
  
  class TypingSpeedTest implements TypingTest {
    timer: number = 60;
    isRunning: boolean = false;
    interval: number | null = null;
    sampleText: string = 'The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Typing practice is essential for improving your speed and accuracy.';
  
    private timerElement: HTMLElement;
    private inputArea: HTMLTextAreaElement;
    private startButton: HTMLButtonElement;
    private resultElement: HTMLElement;
  
    constructor() {
      this.timerElement = document.getElementById('timer') as HTMLElement;
      this.inputArea = document.getElementById('input-area') as HTMLTextAreaElement;
      this.startButton = document.getElementById('start-btn') as HTMLButtonElement;
      this.resultElement = document.getElementById('results') as HTMLElement;
  
      this.initialize();
    }
  
    private initialize(): void {
      this.displaySampleText();
      this.setupEventListeners();
      this.updateTimer();
    }
  
    private displaySampleText(): void {
      const sampleElement = document.getElementById('sample-text');
      if (sampleElement) {
        sampleElement.textContent = this.sampleText;
      }
    }
  
    private setupEventListeners(): void {
      this.startButton.addEventListener('click', () => this.startTest());
      this.inputArea.addEventListener('input', () => {
        if (!this.isRunning) {
          this.startTest();
        }
      });
    }
  
    private startTest(): void {
      if (!this.isRunning) {
        this.isRunning = true;
        this.inputArea.disabled = false;
        this.inputArea.value = '';
        this.inputArea.focus();
        this.startButton.disabled = true;
        this.timer = 60;
        this.updateTimer();
        
        this.interval = setInterval(() => {
          this.timer--;
          this.updateTimer();
          
          if (this.timer <= 0) {
            this.endTest();
          }
        }, 1000);
      }
    }
  
    private updateTimer(): void {
      this.timerElement.textContent = `Time Remaining: ${this.timer}s`;
    }
  
    private endTest(): void {
      if (this.interval) {
        clearInterval(this.interval);
      }
      
      this.isRunning = false;
      this.inputArea.disabled = true;
      this.startButton.disabled = false;
  
      this.calculateResults();
    }
  
    private calculateResults(): void {
      const typedText = this.inputArea.value;
      const words = typedText.trim().split(/\s+/).length;
      const characters = typedText.length;
      const accuracy = this.calculateAccuracy(typedText);
      const wpm = Math.round(words);
  
      this.displayResults(wpm, accuracy, characters);
    }
  
    private calculateAccuracy(typedText: string): number {
      const sampleWords = this.sampleText.substring(0, typedText.length).split('');
      const typedWords = typedText.split('');
      let correctCharacters = 0;
  
      typedWords.forEach((char, index) => {
        if (sampleWords[index] === char) {
          correctCharacters++;
        }
      });
  
      return Math.round((correctCharacters / typedText.length) * 100);
    }
  
    private displayResults(wpm: number, accuracy: number, characters: number): void {
      this.resultElement.innerHTML = `
        <div class="result-item">WPM: <span class="highlight">${wpm}</span></div>
        <div class="result-item">Accuracy: <span class="highlight">${accuracy}%</span></div>
        <div class="result-item">Characters: <span class="highlight">${characters}</span></div>
      `;
    }
  }
  
  // Initialize the typing test when the DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new TypingSpeedTest();
  });