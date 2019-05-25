const calcMath = require('calc-maths');

/**
 * Check if the number is or not odd
 * @param num number to check if is odd
 */
export function isOdd(num: number): boolean{
    return ( num % 2 === 0);
}

export function operation(type: string, num1: number, num2: number){
    switch(type){
        case "+": {
            return calcMath.sum(num1, num2);
        }
        case "-": {
            return calcMath.substract(num1, num2);
        }
        case "*": {
            return calcMath.multiply(num1, num2);
        }
        case "/": {
            return calcMath.divide(num1, num2);
        }
        default:{
            console.warn('Wrong operation');
            return;
        }
    }
}