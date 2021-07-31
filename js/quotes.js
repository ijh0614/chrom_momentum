const quotes = [
{
    quote : "일은 망해도 나는 망하지 않는다.",
    author : "우동이즘"
},
{
    quote : "인구 지진은 예고되어 있다.",
    author : "슈카"
},
{
    quote : "다섯명이 모이면 반드시 한명은 말종이 있다",
    author : "지로보"
},
{
    quote : "늦었다고 생각할때가 진짜 늦은거다.",
    author : "박명수"
},
{
    quote : "도망쳐서 도착한 곳에 낙원은 없다.",
    author : "미우라 켄타로"
},
{
    quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author : "사무엘존슨"
},
{
    quote : "72시간의 유에날",
    author : "이지원"
}
];

const quoteHTML = document.querySelector("#quote");
const authorHTML = document.querySelector("#author");

const index = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[index];

quoteHTML.innerText = todaysQuote.quote;
authorHTML.innerText = todaysQuote.author;