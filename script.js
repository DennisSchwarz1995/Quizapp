let questions = [
  {
    question: "Welche Nummer hat Pikachu im Pokedex?",
    answer1: "Nr. 025",
    answer2: "Nr. 151",
    answer3: "Nr. 001",
    answer4: "Nr. 010",
    right_answer: 1,
  },
  {
    question: "Welches Strategiespiel erschien im Jahr 1999?",
    answer1: "Starcraft 2",
    answer2: "Baldurs Gate 3",
    answer3: "Age of Empires II",
    answer4: "Cyberpunk 2077",
    right_answer: 3,
  },
  {
    question: "Wie heißt der Protagonist in der Halo Spielereihe?",
    answer1: "Cortana",
    answer2: "Masterchief 117",
    answer3: "Solid Snake",
    answer4: "Link",
    right_answer: 2,
  },
  {
    question: "Welches Spiel gilt als Urvater der Videospiele?",
    answer1: "Tetris",
    answer2: "Zelda The Ocarina of Time",
    answer3: "Super Mario Bros",
    answer4: "Pong",
    right_answer: 4,
  },
  {
    question: "In welchem Jahr wurde World of Warcraft veröffentlicht?",
    answer1: "1998",
    answer2: "2004",
    answer3: "2018",
    answer4: "2009",
    right_answer: 2,
  },
  {
    question: "Wie heißt der grüne Dinosaurier aus den Mario Spielen?",
    answer1: "Yoshi",
    answer2: "Shrek",
    answer3: "Mike Glotzkowski",
    answer4: "Bowser",
    right_answer: 1,
  },
  {
    question: "Wie heißt die Handheld-Konsole welche im Jahr 1989 erschien ?",
    answer1: "Gamecube",
    answer2: "Playstation Portable",
    answer3: "Nintendo DS",
    answer4: "Gameboy",
    right_answer: 4,
  },
  {
    question: "Aus welcher Spielereihe stammt Claptrap?",
    answer1: "The Elder Scrolls",
    answer2: "Diablo",
    answer3: "Borderlands",
    answer4: "Fallout",
    right_answer: 3,
  },
  {
    question:
      "Welches Spiel hat Stand 2023 die meisten einzigartigen Spieler pro Monat?",
    answer1: "Counterstrike GO",
    answer2: "League of Legends",
    answer3: "Hearthstone",
    answer4: "Dota2",
    right_answer: 2,
  },
  {
    question: "Welches Spiel revolutionierte das Open-World-Genre?",
    answer1: "Grand Theft Auto 3",
    answer2: "Spyro 3 Year of the Dragon",
    answer3: "God of War II ",
    answer4: "Prince of Persia 2 The Shadow & The Flame",
    right_answer: 1,
  },
];

let currentQuestion = 0;
let rightAnswers = 0;
let success_Sound = new Audio('audio/success.mp3');
let error_Sound = new Audio('audio/error.mp3');

function init() {
  document.getElementById("question-amount").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("end-screen").style = "";
    document.getElementById("content").style = "display: none";
    document.getElementById("question-amount-end-screen").innerHTML =
      questions.length;
    document.getElementById("amount-of-right-answers").innerHTML = rightAnswers;
    document.getElementById("progress-bar").innerHTML = `100%`;
    document.getElementById("progress-bar").style.width = `100%`;
  } else {
    let percent = currentQuestion / questions.length;
    percent = percent * 100;
    document.getElementById("progress-bar").innerHTML = `${percent}%`;
    document.getElementById("progress-bar").style.width = `${percent}%`;
    let question = questions[currentQuestion];
    document.getElementById("question-point").innerHTML = currentQuestion + 1;
    document.getElementById("question").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer1"];
    document.getElementById("answer_2").innerHTML = question["answer2"];
    document.getElementById("answer_3").innerHTML = question["answer3"];
    document.getElementById("answer_4").innerHTML = question["answer4"];
  }
}

function selectAnswer(selection) {
  let question = questions[currentQuestion];
  let selectedAnswerNumber = selection.slice(-1);
  let rightAnswer = `answer_${question["right_answer"]}`;

  if (selectedAnswerNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    success_Sound.play();
    rightAnswers++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(rightAnswer).parentNode.classList.add("bg-success");
    error_Sound.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetSelectedAnswer();
  showQuestion();
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
