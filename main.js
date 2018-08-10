// declare array for the flash card questions and answers
let flashcards = [['question1','answer1'],['question2','answer2']];
let questionIndex;
let oldRandomIndex=999999;

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

// declare function to show a flashcard question
function showRandomFlashcardQuestion() {
  let randomFlashcardIndex=getRandomInt(flashcards.length);
  while (randomFlashcardIndex===oldRandomIndex){
    randomFlashcardIndex=getRandomInt(flashcards.length)
  }
  oldRandomIndex=randomFlashcardIndex;
  console.log('random number =' + randomFlashcardIndex);
  //let flashcardQuestion=flashcards[randomFlashcardIndex];
  questionId.innerHTML=flashcards[randomFlashcardIndex][0];
  questionIndex=randomFlashcardIndex;
  answerId.innerHTML='';
}


// declare function to show the flashcard answer for the question
function showFlashcardAnswer() {
  console.log('question index =' + questionIndex);
  answerId.innerHTML=flashcards[questionIndex][1];
}

// declare function to save the flashcard answer for the question
function saveFlashcard() {
  var newQuestion = document.getElementById('newFlashcardQuestion');
  console.log(newQuestion.value)
}

// execute the code

// call the showRandomFlashcard fuction
showRandomFlashcardQuestion()

// select the document button element by id nextFlashcardQuestion
var nextFlashcardQuestionId = document.getElementById('nextFlashcardQuestion');

// show next flashcard question on button click
nextFlashcardQuestionId.onclick = function() {
    showRandomFlashcardQuestion()
}

// select the document button element by id nextFlashcardAnswer
var nextFlashcardAnswerId = document.getElementById('nextFlashcardAnswer');

// show next flashcard answer on button click
nextFlashcardAnswerId.onclick = function() {
    showFlashcardAnswer()
}

// declare function to save the flashcard answer for the question
function saveFlashcard() {
  let newQuestion = document.getElementById('newFlashcardQuestion');
  console.log(newQuestion.value);
  let newAnswer = document.getElementById('newFlashcardAnswer');
  console.log(newAnswer.value);
  flashcards.push([newQuestion.value,newAnswer.value]);
  console.log(flashcards);

}

// execute the code

// select the document page 2 button element by id newFlashcard
var newFlashcardId = document.getElementById('newFlashcard');

// Save new flashcard question and answer on button click
newFlashcardId.onclick = function() {
    saveFlashcard()
}


console.log(flashcards);
