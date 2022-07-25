"use strict";

const API_URL = "https://type.fit/api/quotes";
const quotesArr = [];
const authorArr = [];

function getQuotes() {
  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element, index) => {
        quotesArr.push(element.text);
        authorArr.push(element.author);
      });
       getQuote(data[Math.floor(Math.random() * 10)]);
    });
}


getQuotes();
function showData(data) {
  console.log(data);
}

// console.log(quotesArr);
// console.log(authorArr);

function getQuote(data) {
  const index = Math.floor(Math.random() * quotesArr.length + 1);
  document.getElementById("text").textContent = quotesArr[index];
  if (authorArr[index]) {
    $("#author").text("- " + authorArr[index]);
  } else {
    $("#author").text("- Unknown");
  }
}

$(".btn").click(() => {
  const index = Math.floor(Math.random() * quotesArr.length + 1);
  document.getElementById("text").textContent = quotesArr[index];
  if (authorArr[index]) {
    $("#author").text("- " + authorArr[index]);
  } else {
    $("#author").text("- Unknown");
  }
});
