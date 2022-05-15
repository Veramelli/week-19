class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static sum(a, b) {
    return a + b;
  }

  static sub(a, b) {
    return a - b;
  }

  static mul(a, b) {
    return a * b;
  }

  static div(a, b) {
    return a / b;
  }
}

let op;
const setOp = newOp => {
  op = newOp
};

function func() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+': // нажатие кнопки вызывает метод класса
      result = Calculator.sum(num1, num2);
      break;
    case '-':
      result = Calculator.sub(num1, num2);
      break;
    case '*':
      result = Calculator.mul(num1, num2);
      break;
    case '/':
      result = Calculator.div(num1, num2);
      break;
  }

  console.log(num1);
  console.log(num2);

  if (num1 / 0) {
    alert('На ноль делить нельзя!')
  }
  document.getElementById("result").innerHTML = result;
}

