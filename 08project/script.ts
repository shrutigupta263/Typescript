interface Quote {
    text: string
    author: string
  }
  
  const quotes: Quote[] = [
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
  ]
  
  function getRandomQuote(): Quote {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  }
  
  function displayQuote(quote: Quote): void {
    const quoteText = document.getElementById("quote-text") as HTMLParagraphElement
    const quoteAuthor = document.getElementById("quote-author") as HTMLParagraphElement
  
    quoteText.textContent = `"${quote.text}"`
    quoteAuthor.textContent = `- ${quote.author}`
  }
  
  function newQuote(): void {
    const quote = getRandomQuote()
    displayQuote(quote)
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const newQuoteBtn = document.getElementById("new-quote-btn") as HTMLButtonElement
    newQuoteBtn.addEventListener("click", newQuote)
    newQuote() // Display initial quote
  })
  
  