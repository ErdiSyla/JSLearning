function subscribe(buttonClass) {
  const buttonElem = document.querySelector(buttonClass);
  if (buttonElem.innerText === "Subscribe") {
    buttonElem.innerText = "Subscribed";
    buttonElem.classList.add("subscribed");
  } else {
    buttonElem.innerText = "Subscribe";
    buttonElem.classList.remove("subscribed");
  }
}
