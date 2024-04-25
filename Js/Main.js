function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function pinGenerate() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const calcInput = document.getElementById("typed-numbers");

  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typeNumber = document.getElementById("typed-numbers").value;

  if (pin == typeNumber) {
    document.getElementById("pin-matched").style.display = "block";
    document.getElementById("pin-not-matched").style.display = "none";
  } else {
    document.getElementById("pin-not-matched").style.display = "block";
    document.getElementById("pin-matched").style.display = "none";
  }
}
