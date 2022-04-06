var img = new Image();
img.src = "../assets/profile.jpg";
img.className = "profile";

document
  .getElementById("header")
  .insertBefore(img, document.getElementById("header").firstChild);

const center_x = img.offsetLeft + img.width / 2;
const center_y = img.offsetTop + img.height / 2;

document.onmousemove = function (event) {
  var radians = Math.atan2(event.pageX - center_x, event.pageY - center_y);
  var degree = radians * (180 / Math.PI) * -1 + 90;

  img.style.transform = "rotate(" + degree + "deg)";
};

var fiboInput = document.querySelector("#inputFibo");
var factInput = document.querySelector("#inputFact");

var fiboButton = document.querySelector("#calculateFibo");
fiboButton.onclick = function () {
  fiboInput.value = findIndex(parseInt(fiboInput.value)).toString();
};

var factButton = document.querySelector("#calculateFact");
factButton.onclick = function () {
	factInput.value = getFactorial(parseInt(factInput.value));
};

function findIndex(givenNumber) {
  if (givenNumber <= 1) return givenNumber;

  let [a, b, currentNumber, res] = [0, 1, 1, 1];

  while (currentNumber < givenNumber) {
    currentNumber = a + b;

    res++;
    a = b;
    b = currentNumber;
  }
  return res;
}

function getFactorial(n) {
  var memo = {};

  function factorial(n) {
    return n < 2 ? 1 : memo[n] || (memo[n] = n * factorial(n - 1));
  }

  return factorial(n);
}
