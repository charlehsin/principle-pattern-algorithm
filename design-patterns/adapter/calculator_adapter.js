import CalculatorNew from "./calculator_new.js";

class CalculatorAdapter {
  constructor() {
    this.CalculatorNew = new CalculatorNew();
  }

  operation(operand1, operand2, operator) {
    switch (operator) {
      case '*':
        return this.CalculatorNew.multiply(operand1, operand2);
      case '+':
        return this.CalculatorNew.add(operand1, operand2);
      default:
        return NaN;
    }
  }
}

export default CalculatorAdapter;