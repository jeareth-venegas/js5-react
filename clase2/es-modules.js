// es-modules.js
import sum from './spreadOperator'

const importedValue = sum(10, 20, 30)
console.log('This is a imported value', importedValue)
// <script type="module" src="./es-modules.js"></script>
import { multi, sum } from "./spreadOperator";

const importedValue = multi(1, 2, 3, 4);
const sumvalue = sum(1, 2, 3);

console.log("this is a imported value ", importedValue);
console.log("sum value", sumvalue);
