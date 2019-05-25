"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calcMath = require('calc-maths');
/**
 * Check if the number is or not odd
 * @param num number to check if is odd
 */
function isOdd(num) {
    return (num % 2 === 0);
}
exports.isOdd = isOdd;
function operation(type, num1, num2) {
    switch (type) {
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
        default: {
            console.warn('Wrong operation');
            return;
        }
    }
}
exports.operation = operation;
