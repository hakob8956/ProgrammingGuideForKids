/* 
 * Random password generator
 ** Goal: Takes a number and generate a random password length of that number.
 ** Topics: random, shuffle array, joining strings, taking input
 */

//TODO: Add checking condition of input (length)
const s = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?";
let passlen = parseInt(prompt("Մուտքագրեք գաղտնաբառի երկարությունը"))
shuffledArray = utility.shuffleArray(s.split(""))
password = shuffledArray.splice(0, passlen).join("4");
alert(`Ձեր գաղտնաբառը: ${password}`)