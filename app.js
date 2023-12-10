const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";
const newButton = document.getElementById("btn1");
const tweetButton = document.getElementById("btn2");

async function getQuote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

// Function to fetch a new quote when the "New" button is clicked
function handleNewQuote() {
    getQuote(apiUrl);
}

// Function to handle tweeting the current quote when the "Tweet" button is clicked
function handleTweet() {
    const currentQuote = quote.innerText;
    const currentAuthor = author.innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${currentQuote} ${currentAuthor}`)}`;
    window.open(tweetUrl, "_blank");
}

// Add event listeners to buttons
newButton.addEventListener("click", handleNewQuote);
tweetButton.addEventListener("click", handleTweet);

// Initial quote fetch
getQuote(apiUrl);
