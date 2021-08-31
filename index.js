import process from 'process';

console.log("--------------");


const args = process.argv.slice(2);

const [operation, ...rest] = args;

console.log(typeof operation);
const numbers = rest.map(result => parseFloat(result));

const avg = () => {
    numbers.map(result => {
        if (result !== "number") {
            console.log(`Sorry, the argument ${numbers} is not a number, please try again`);
            process.exit();
        }
    });
    return sum() / numbers.length;
    
}
const sum = () => {
    numbers.map(result => {
        if (result !== "number") {
            console.log(`Sorry, the argument ${numbers} is not a number, please try again`);
            process.exit();
        }
    });
    return numbers.reduce((a, b) => a + b, 0); 
}

const numbersSort = numbers.sort();
const mid = Math.ceil(numbers.length / 2);

const median =
numbers.length% 2 == 0 ? (numbersSort[mid] + numbersSort[mid - 1]) / 2 : numbersSort[mid - 1];



switch (operation) {
    case "sum":
        console.log("SUM is = " + sum());
        break;
     

    case  "avg":
        console.log("AVG IS = " + avg());
        break;

    case typeof "number":
        console.log("error!!!!");    
         break;
    
    case "med":
        console.log("Median is = " + median);
         break;

      default:
            console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`);   
}

console.log("After the forEach loop!!!!!");