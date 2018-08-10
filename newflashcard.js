
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
