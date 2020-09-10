// A user should be able to enter 2 numbers and click on an operator.
// The result should be output on the screen.
// You should prevent dividing by zero.
// Style the calculator. (HINT: the grid system in your choice of CSS framework works really well for a calculator layout/or css grids)
// Things to think about
// a basic calculator equation has a leftHand value an operator value and a rightHand value
// for example: 4 + 4
// When writing your code make sure you have at least 1 leftHand value before letting the user click on an operator button
// Before you can click on the equal button make sure you have a leftHand value an operator value and a rightHand value or else you don't have a valid equation!
// Use innerText to get and set the text of the calculator "Screen" to show the user the equation and the result of the equation

state = {
  displayValue: "0",
  possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  possibleExpression: ["=", "+", "-", "/", "AC"],
  firstNum: null,
  secondNum: null,
  operator: null,
  numberStack: [],
};

function updateDisplay() {
  state.displayValue;
  return state.displayValue;
}

function showNumbers() {
  let numberStr = "";
  state.possibleNumbers.forEach(function (numbers, index) {
    numberStr += `<button>${numbers}</button>`;
  });
  return numberStr;
}

function showExpression() {
  let expressionStr = "";
  state.possibleExpression.forEach(function (expressions, index) {
    expressionStr += `<button>${expressions}</button>`;
  });
  return expressionStr;
}

function buttonClicks() {}

function render() {
  htmlStr = `
  <div>
  <h1>Calculator</h1>
  </div>
  <div>${updateDisplay()}</div>
  <div>${showNumbers()}</div>
  <div>${showExpression()}</div>

  `;
  document.getElementById("app").innerHTML = htmlStr;
}

render();
