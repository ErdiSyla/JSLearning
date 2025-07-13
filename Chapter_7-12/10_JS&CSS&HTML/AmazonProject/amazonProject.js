function calculateTotal() {
  const costElem = document.querySelector("#orderCost");
  const totalElem = document.querySelector(".totalCost");
  const cost = Number(costElem.value);

  if (isNaN(cost) || costElem.value === "") {
    totalElem.innerText = "Please enter a valid order amount.";
    return;
  }

  if (cost < 40) {
    totalElem.innerText = `$${cost + 10}`;
  } else {
    totalElem.innerText = `$${cost}`;
  }
}

function pressedEnter(key) {
  if (key === "Enter") {
    calculateTotal();
  }
}
