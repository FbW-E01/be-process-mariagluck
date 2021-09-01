import process from 'process';

console.log("--------------");


const args = process.argv.slice(2);
const [operation, ...rest] = args;
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


 const  median = () => {
     if(numbers.length ===0) return 0;
   
     numbers.sort(function(a,b){
       return a-b;
     });
   
     let half = Math.floor(numbers.length / 2);
   
     if (numbers.length % 2)
       return numbers[half];
   
     return (numbers[half - 1] + numbers[half]) / 2.0;
   }


switch (operation) {
    case "sum":
        console.log("SUM is = " + sum());
        break;


    case "avg":
        console.log("AVG IS = " + avg());
        break;

    case typeof "number":
        console.log("error!!!!");
        process.exit();
        break;

    case "med":
        console.log("Median is = " + median());
        break;

    default:
        console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average) or "med" to calculate the median`);
}

console.log("After the forEach loop!!!!!");