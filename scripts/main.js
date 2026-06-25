const quotes = [
    "“真正重要的东西，用眼睛是看不见的。”<br>所以这个网页先从一片星空开始。",
    "“星星发亮，是为了让每一个人有一天都能找到属于自己的星星。”",
    "“如果你爱上了一朵花，那么只要仰望星空，就会觉得漫天繁星像一片盛开的花。”",
    "“所有的大人都曾经是孩子，虽然只有少数人记得。”"
];

const quote = document.querySelector("#quote");
const button = document.querySelector("#change-quote");

button.addEventListener("click", () => {
    const currentQuote = quote.innerHTML.trim();
    const nextQuotes = quotes.filter((item) => item !== currentQuote);
    const randomIndex = Math.floor(Math.random() * nextQuotes.length);

    quote.innerHTML = nextQuotes[randomIndex];
});
