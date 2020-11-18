/* 
Code should generate a random message 

array filled with random messages/quotes
generate a random number (between 0 and array length)
return that array element /console.log it
*/

let quotes = ["1","2","3","4","5","6","7","8"];

const generateQuote = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
}

console.log(generateQuote());
