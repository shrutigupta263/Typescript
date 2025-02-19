var TypingSpeedTest = /** @class */ (function () {
    function TypingSpeedTest() {
        this.timer = 60;
        this.isRunning = false;
        this.interval = null;
        this.sampleText = 'The quick brown fox jumps over the lazy dog. This pangram contains every letter of the English alphabet at least once. Typing practice is essential for improving your speed and accuracy.';
        this.timerElement = document.getElementById('timer');
        this.inputArea = document.getElementById('input-area');
        this.startButton = document.getElementById('start-btn');
        this.resultElement = document.getElementById('results');
        this.initialize();
    }
    TypingSpeedTest.prototype.initialize = function () {
        this.displaySampleText();
        this.setupEventListeners();
        this.updateTimer();
    };
    TypingSpeedTest.prototype.displaySampleText = function () {
        var sampleElement = document.getElementById('sample-text');
        if (sampleElement) {
            sampleElement.textContent = this.sampleText;
        }
    };
    TypingSpeedTest.prototype.setupEventListeners = function () {
        var _this = this;
        this.startButton.addEventListener('click', function () { return _this.startTest(); });
        this.inputArea.addEventListener('input', function () {
            if (!_this.isRunning) {
                _this.startTest();
            }
        });
    };
    TypingSpeedTest.prototype.startTest = function () {
        var _this = this;
        if (!this.isRunning) {
            this.isRunning = true;
            this.inputArea.disabled = false;
            this.inputArea.value = '';
            this.inputArea.focus();
            this.startButton.disabled = true;
            this.timer = 60;
            this.updateTimer();
            this.interval = setInterval(function () {
                _this.timer--;
                _this.updateTimer();
                if (_this.timer <= 0) {
                    _this.endTest();
                }
            }, 1000);
        }
    };
    TypingSpeedTest.prototype.updateTimer = function () {
        this.timerElement.textContent = "Time Remaining: ".concat(this.timer, "s");
    };
    TypingSpeedTest.prototype.endTest = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.isRunning = false;
        this.inputArea.disabled = true;
        this.startButton.disabled = false;
        this.calculateResults();
    };
    TypingSpeedTest.prototype.calculateResults = function () {
        var typedText = this.inputArea.value;
        var words = typedText.trim().split(/\s+/).length;
        var characters = typedText.length;
        var accuracy = this.calculateAccuracy(typedText);
        var wpm = Math.round(words);
        this.displayResults(wpm, accuracy, characters);
    };
    TypingSpeedTest.prototype.calculateAccuracy = function (typedText) {
        var sampleWords = this.sampleText.substring(0, typedText.length).split('');
        var typedWords = typedText.split('');
        var correctCharacters = 0;
        typedWords.forEach(function (char, index) {
            if (sampleWords[index] === char) {
                correctCharacters++;
            }
        });
        return Math.round((correctCharacters / typedText.length) * 100);
    };
    TypingSpeedTest.prototype.displayResults = function (wpm, accuracy, characters) {
        this.resultElement.innerHTML = "\n        <div class=\"result-item\">WPM: <span class=\"highlight\">".concat(wpm, "</span></div>\n        <div class=\"result-item\">Accuracy: <span class=\"highlight\">").concat(accuracy, "%</span></div>\n        <div class=\"result-item\">Characters: <span class=\"highlight\">").concat(characters, "</span></div>\n      ");
    };
    return TypingSpeedTest;
}());
// Initialize the typing test when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new TypingSpeedTest();
});
