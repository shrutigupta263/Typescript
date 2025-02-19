var quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
];
function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function displayQuote(quote) {
    var quoteText = document.getElementById("quote-text");
    var quoteAuthor = document.getElementById("quote-author");
    quoteText.textContent = "\"".concat(quote.text, "\"");
    quoteAuthor.textContent = "- ".concat(quote.author);
}
function newQuote() {
    var quote = getRandomQuote();
    displayQuote(quote);
}
document.addEventListener("DOMContentLoaded", function () {
    var newQuoteBtn = document.getElementById("new-quote-btn");
    newQuoteBtn.addEventListener("click", newQuote);
    newQuote(); // Display initial quote
});
