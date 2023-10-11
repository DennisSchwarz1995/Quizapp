let currentQuestion = 0;
let rightAnswers = 0;
let success_Sound = new Audio("audio/success.mp3");
let error_Sound = new Audio("audio/error.mp3");

function init() {
  document.getElementById("question-amount").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateQuiz();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
  document.getElementById("end-screen").style = "";
  document.getElementById("content").style = "display: none";
  document.getElementById("question-amount-end-screen").innerHTML =
    questions.length;
  document.getElementById("amount-of-right-answers").innerHTML = rightAnswers;
  document.getElementById("progress-bar").innerHTML = `100%`;
  document.getElementById("progress-bar").style.width = `100%`;
}

function updateQuiz() {
  let question = questions[currentQuestion];
  document.getElementById("question-point").innerHTML = currentQuestion + 1;
  document.getElementById("question-image").src = question["image"];
  document.getElementById("question").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer1"];
  document.getElementById("answer_2").innerHTML = question["answer2"];
  document.getElementById("answer_3").innerHTML = question["answer3"];
  document.getElementById("answer_4").innerHTML = question["answer4"];
}

function updateProgressBar() {
  let percent = currentQuestion / questions.length;
  percent = percent * 100;
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
}

function selectAnswer(selection) {
  let question = questions[currentQuestion];
  let selectedAnswerNumber = selection.slice(-1);
  let rightAnswer = `answer_${question["right_answer"]}`;
  if (selectedAnswerNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    stopSelection();
    success_Sound.play();
    rightAnswers++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(rightAnswer).parentNode.classList.add("bg-success");
    stopSelection();
    error_Sound.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetSelectedAnswer();
  showQuestion();
  activateSelection();
  success_Sound.pause();
  success_Sound.currentTime = 0;
  error_Sound.pause();
  error_Sound.currentTime = 0;
}

function resetSelectedAnswer() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  currentQuestion = 0;
  rightAnswers = 0;
  document.getElementById("end-screen").style = "display: none";
  document.getElementById("content").style = "";
  init();
}

function stopSelection() {
  document.getElementById("answer_1-container").style = "pointer-events: none";
  document.getElementById("answer_2-container").style = "pointer-events: none";
  document.getElementById("answer_3-container").style = "pointer-events: none";
  document.getElementById("answer_4-container").style = "pointer-events: none";
}

function activateSelection() {
  document.getElementById("answer_1-container").style = "pointer-events: unset";
  document.getElementById("answer_2-container").style = "pointer-events: unset";
  document.getElementById("answer_3-container").style = "pointer-events: unset";
  document.getElementById("answer_4-container").style = "pointer-events: unset";
}
