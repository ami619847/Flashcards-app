// declare array fro the flash card questions and answers
let flashcards = [['question1','answer1'],['question2','answer2']];

// select the document p element by id flashcardQuestion
var questionId = document.getElementById('flashcardQuestion');

// select the document p element by id flashcardAnswer
var answerId = document.getElementById('flashcardAnswer');

/*
flashcards.forEach(function(flashcard){
  questionId.innerHTML=flashcard[0];
  answerId.innerHTML=flashcard[1];

})
*/

// declare function to generate a integer between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//console.log(getRandomInt(flashcards.length))

// declare function to show a flashcard question and answer
function showRandomFlashcard() {
  let randomFlashcardIndex=getRandomInt(flashcards.length);
  console.log('random number =' + randomFlashcardIndex);
  //let flashcardQuestion=flashcards[randomFlashcardIndex];
  questionId.innerHTML=flashcards[randomFlashcardIndex][0];
  answerId.innerHTML=flashcards[randomFlashcardIndex][1];
}

// call the showRandomFlashcard fuction
// showRandomFlashcard()

// select the document button element by id nextFlashcard
var nextFlashcardId = document.getElementById('nextFlashcard');

// show next flashcard on button click
nextFlashcardId.onclick = function() {
    showRandomFlashcard()
}
