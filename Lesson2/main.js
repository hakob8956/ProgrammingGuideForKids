/* 
 * Guess the number game
 ** Goal: create a program that randomly select a number in a range then the user has to guess the number.
 ** Topics: random, looping, and if-else
 */

let number = getRandomInt(1, 10);
let possibleMove = 3;
let guessNumber = 0;

for (let i = 0; i < possibleMove; i++) {
    guessNumber = praseInt(prompt(`Գուշակեք թիվը ։)\nԴուք ունեք ${possibleMove - i} հնարավորություն`));
    if (guessNumber > number) {
        alert("Թիվը ավելի փոքր է");
    } else if (guessNumber < number) {
        alert("Թիվը ավելի մեծ է");
    } else {
        alert(`Դուք ճիշտ կռահեցիք, որ թիվը դա ${guessNumber}`);
        break;
    }
}
if (number != guessNumber) {
    alert(`Դուք չկռահեցիք, այդ թաքնված թիվը ${guessNumber}`);
}