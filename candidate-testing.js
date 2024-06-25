const input = require('readline-sync');;
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " ,"True or false: 5 kilometer == 5000 meters? " , "(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " , "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


//let finalAnswers = [];
//let grade = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What's your name?: \n");

}
//candidateAnswers[" "] = input.question(0+ 1 + ") " + questions[" "]);

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

   for (let i = 0; i < questions.length; i++){
   candidateAnswers[i] = input.question(i + 1 + ") " + questions[i]);
    console.log();
    }
     
 } 
 // console.log(candidateAnswers);
  
function gradeQuiz(candidateAnswers) {
  console.log(candidateAnswers);
 
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (i = 0; i < questions.length; i++) {
      console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
      } 
  


//TODO 3.2 use this vari
//able to calculate the candidates score.

 //let grade = finalAnswers.length / questions.length * 100
 //let finalAnswers = [];
 let grade = [];//candidateAnswers / questions.length * 100

 for (i = 0; i < questions.length; i++) {
  if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()){
     grade.push(correctAnswer[i])
  }
 }
  grade = grade.length / questions.length * 100;     
if (grade === 100){
  console.log("Perfect");
} else if (grade === 80) {
  console.log("You have 80");
}

return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Candidate Name: " + candidateName);
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}