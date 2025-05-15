// 1. Two Number Addition
// 2. Even or Odd Checker
// 3. Convert Celsius to Fahrenheit
// 4. Square of a Number
// 5. Get First Character of a String
// 6. Number is Positive, Negative 
// 7. Multiply Two Numbers and check string or number
// 8. Convert Minutes to Seconds
// 9. concatenate two strings
// 10. Check if string Contaons a word

// 1. Two Number Addition
function add(x, y){
        let result = x + y;
}
console.log(add(2, 3));

//  2. Even or Odd Checker
function isEven(num) {
        // if (num % 2 === 0) {
        //         return "Even";
        // } else {
        //         return "Odd";
        // }
        return num % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(4)); // Output: Even
console.log(isEven(7)); // Output: Odd

// 3. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); // Output: 32

// 4. Square of a Number
function squareNumber(num) {
        return num * num;
}
console.log(squareNumber(4)); // Output: 16

// 5. Get First Character of a String
function getFirstCharacter(str) {
        return str.charAt(0);
}
console.log(getFirstCharacter("Bangladesh")); // Output: B

// 6. Number is Positive, Negative 
function checkNumber(num) {
        // if (num >= 0) {
        //         return "Positive";
        // } else  {
        //         return "Negative";
        // } 

        return num >= 0 ? "Positive" : "Negative";
}

console.log(checkNumber(5)); // Output: Positive
console.log(checkNumber(-3)); // Output: Negative

// 7. Multiply Two Numbers and check string or number
function multiply(x, y) {
        if (typeof x === "string" || typeof y === "string") {
                return "Invalid input";
        }
        return x * y;
}

console.log(multiply(2, 3)); // Output: 6
console.log(multiply("2", 3)); // Output: Invalid input

// 8. Convert Minutes to Seconds
function convertMinutesToSeconds(minutes) {
        return minutes * 60;
}
console.log(convertMinutesToSeconds(5)); // Output: 300

// 9. concatenate two strings
function concatenateStrings(str1, str2) {
        return str1 + " " + str2;
}
console.log(concatenateStrings("Hello", "World")); // Output: Hello World

// 10. Check if string Contaons a word
function containsWord(str, word) {
        return str.includes(word);
}
console.log(containsWord("Hello World", "World")); // Output: true
console.log(containsWord("Hello World", "Bangladesh")); // Output: false


