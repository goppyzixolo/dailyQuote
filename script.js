function getDailyQuote() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const dailyQuote = quotes[randomIndex];

    document.getElementById('quote-text').innerHTML = dailyQuote;
}
