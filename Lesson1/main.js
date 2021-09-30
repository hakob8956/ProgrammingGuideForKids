/* 
 * Dice roll simulator
 ** Goal: create a program that will simulate the roll of dice.
 ** Topics: random, looping, and if-else
 */

//TODO: Add checking condition of input
while (true) {
    let user = parseInt(prompt("1.Գլորել զառախաղը\n2.Դուրս գալ"));
    if (user == 1) {
        number = getRandomInt(1, 6);
        alert(number);
    } else {
        break;
    }
}