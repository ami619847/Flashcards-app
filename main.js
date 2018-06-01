// declare array fro the flash card questions and answers
let flashcards = [['question1','answer1'],['question2','answer2']];

// select the document p element by id flashcardQuestion
var questionId = document.getElementById('flashcardQuestion');

// select the document p element by id flashcardAnswer
var answerId = document.getElementById('flashcardAnswer');

flashcards.forEach(function(flashcard){
  questionId.innerHTML=flashcard[0];
  answerId.innerHTML=flashcard[1];

})
