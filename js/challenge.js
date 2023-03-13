let likeCount = 1;

const counter = document.getElementById("counter");
const likesList = document.getElementsByClassName("likes")[0];
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeBtn = document.getElementById("heart");
const pauseButton = document.getElementById("pause");

let paused = false;

const increment = () => {
  const content = counter.innerHTML;
  counter.innerHTML = Number(content) + 1;
};

const decrement = () => {
  const content = counter.innerHTML;
  counter.innerHTML = Number(content) - 1;
};

const timeout = setInterval(() => {
  if (!paused) {
    const content = counter.innerHTML;
    counter.innerHTML = Number(content) + 1;
    likeCount = 1;
  }
}, 1000);

const handleLike = () => {
  const content = counter.innerHTML;

  const listItem = document.createElement("li");

  const allListItems = [...document.querySelectorAll("li")];

  const lastItem = allListItems[allListItems.length - 1];

  const text = `number ${content} was liked ${likeCount} times`;

  if (text === lastItem?.innerHTML) {
    likeCount = likeCount + 1;

    lastItem.innerHTML = `number ${content} was liked ${likeCount} times`;
  } else {
    listItem.innerHTML = text;
    likesList.append(listItem);
    likeCount = 1;
  }
};

const pauseTimer = () => {
  paused = true;
  pauseButton.innerHTML = "Resume";
  pauseButton.addEventListener("click", resumeTimer);
};

const resumeTimer = () => {
  paused = false;
  pauseButton.innerHTML = "Pause";
  pauseButton.addEventListener("click", pauseTimer);
};

plusButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);
pauseButton.addEventListener("click", pauseTimer);
likeBtn.addEventListener("click", handleLike);
