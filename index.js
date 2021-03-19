// Code your solutions in this file
const namesArray = ['Lisa', 'Kaitlin', 'Jan'];
const messageArray = ['birthday'];

function writeCards(namesArray,messages) {
    for (let i = 0; i < namesArray.length; i++) {
        messageArray[i] = `Thank you, ${namesArray[i]}, for the wonderful ${messages} gift!`;
      }
      return messageArray;
}

let number = 0;

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}