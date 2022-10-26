import CalculatorOld from "./calculator_old.js";
import CalculatorAdapter from "./calculator_adapter.js";

// This is the example of the application using the old module.
const calculatorOld = new CalculatorOld();
console.log('Old calculator 3 * 5 is ', calculatorOld.operation(3, 5, '*'));


// This is the example of the application using the adapter, so that the codes will be similar to the codes with the old module.
// The adapter itself will use the new module, and the adapter will handle the differences between the old module's interface and the new module's interface.
const calculatorAdapter = new CalculatorAdapter();
console.log('New calculator 3 * 5 is ', calculatorAdapter.operation(3, 5, '*'));
