let questionIndex;

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

console.log(flashcards);
