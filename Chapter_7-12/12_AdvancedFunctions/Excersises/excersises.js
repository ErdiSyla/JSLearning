const add = function () {
  console.log(2 + 3);
};

function runTwice(fun) {
  fun();
  fun();
}

runTwice(add);

runTwice(function () {
  console.log("12b");
});

function startButton() {
  const startButton = document.querySelector(".startButton");
  startButton.innerText = "Loading...";
  setTimeout(() => {
    startButton.innerText = "Finished!";
  }, 1000);
}

let timeoutId;

function addToCart() {
  const added = document.querySelector(".added");

  added.innerText = "Added";

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    added.innerText = "";
  }, 2000);
}

let message = 0;

function titleChange() {
  if (message === 0) {
    document.title = "App";
  } else {
    document.title = `(${message}) New messages`;
  }
}

function addMessage() {
  message++;
}

function removeMessage() {
  if (message === 0) {
    return;
  } else {
    message--;
  }
}

setInterval(titleChange, 1000);
