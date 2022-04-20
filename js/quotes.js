const quotes = [
    {
    quote: "막다른 곳에 빠지게 될 때에는   온몸을 바쳐 부딪쳐라 ",
    author: "무문관",
    },
    {
    quote: "과거에 매달리지도 말고, 미래를 원망하지도 말라, 과거는 이미 사라졌고, 미래는 아직 오지 않았느니라",
    author: "불경 ",
    },
    {
    quote:
        "독수리는 마지막 성공을 거둘 때 까지  온 생명을 바쳐 노력한다​",
    author: "여안교",
    },
    {
    quote: "들어서 이익이 없는 천만마디 말보다 마음이 고요해지는 단 한마디가 낫다 ",
    author: "성전",
    },
    {
    quote: "모순은 조그만 몸뚱이에 커다란 발자국과 같다",
    author: "팔만대장경",
    },
    {
    quote: "모래가 손가락 사이로 흘러내리듯  시간은 나로부터 달아난다 ",
    author: "불경",
    },
    {
    quote: "사람은 먼저 자기 자신을 가르쳐야 한다 그래야만 그는 남들을 가르칠 수 있다 ",
    author: "붇다",
    },
    {
    quote: "병이 없는 것이 가장 큰 재산이며 만족을 아는 자가 가장 넉넉한 자이다 ",
    author: "법구경",
    },
    {
    quote: "대답은 이미 그 물음 속에 있다.",
    author: "환오",
    },
    {
    quote: "번뇌의 근원은 욕망이다 ",
    author: "석가모니",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
  
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;