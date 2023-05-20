let logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
  location.href = "../html/signin.html";
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
});

let activeUser = JSON.parse(localStorage.getItem("activeUser"));
let indexOfActiveUser = JSON.parse(localStorage.getItem("indexOfUserActive"));
let allUsers = JSON.parse(localStorage.getItem("users"));

let currentUser = allUsers[indexOfActiveUser];

let questionBank = [
  (Q1 = {
    q: "It is not ____ mine.",
    a1: "same as",
    a2: "same like",
    a3: "the same like",
    a4: "the same as",
  }),
  (Q2 = {
    q: "I wouldn’t say that to him if I ________ you.",
    a1: "am",
    a2: "would be",
    a3: "was",
    a4: "were",
  }),
  (Q3 = {
    q: "He ________ ever works as ________ as he should.",
    a1: "hardly … hardly",
    a2: "hard … hard",
    a3: "hard … hardly",
    a4: "hardly … hard",
  }),
  (Q4 = {
    q: "That smells good! What ________.",
    a1: "are you cook?",
    a2: "do you cook?",
    a3: "do you cooking?",
    a4: "are you cooking?",
  }),
  (Q5 = {
    q: "I don’t know where she is. I suppose she ________ got stuck in traffic.",
    a1: "must have",
    a2: "can have",
    a3: "should have",
    a4: "might have",
  }),
  (Q6 = {
    q: "Let’s go to the cinema.Great idea! What film ________ we watch?",
    a1: "will",
    a2: "do",
    a3: "are we going to",
    a4: "shall",
  }),
  (Q7 = {
    q: "How long have they ________ there?",
    a1: "been waited",
    a2: "waiting",
    a3: "waited",
    a4: "been waiting",
  }),
  (Q8 = {
    q: "She ________ in a small house near the park.",
    a1: "live",
    a2: "living",
    a3: "stays",
    a4: "lives",
  }),
  (Q9 = {
    q: "I drink coffee ________.",
    a1: "twice in day",
    a2: "two times day",
    a3: "two times for a day",
    a4: "twice a day",
  }),
  (Q10 = {
    q: "I ________ to Germany last year.",
    a1: "go",
    a2: "goes",
    a3: "gone",
    a4: "went",
  }),
  (Q11 = {
    q: "I spend too much time ________. I’d like ________ more time for myself and my family.",
    a1: "to work … having",
    a2: " to work … to have",
    a3: "working … having",
    a4: "working … to have",
  }),
  (Q12 = {
    q: "I’ll send it to you ________ I get the money.",
    a1: "in case",
    a2: "unless",
    a3: "until",
    a4: "as soon as",
  }),
  (Q13 = {
    q: "_______ spent time abroad when I was a student, I found it easier to get used to ________ in another country.",
    a1: "Having … live",
    a2: "To have … living",
    a3: "Have … live",
    a4: "Having … living",
  }),
  (Q14 = {
    q: "She’s wearing a ________ dress.",
    a1: "long black beautiful",
    a2: "long beautiful black",
    a3: "black long beautiful",
    a4: "beautiful long black",
  }),
  (Q15 = {
    q: "If I had more time, I ________ do more exercise.",
    a1: "'m going to",
    a2: "want to",
    a3: "will",
    a4: "would",
  }),
  (Q16 = {
    q: "Do you think it’s ________ rain tomorrow?",
    a1: "will",
    a2: "going",
    a3: "to",
    a4: "going to",
  }),
  (Q17 = {
    q: "But they ________be away – I saw them this morning!",
    a1: "don't have to",
    a2: "mustn't",
    a3: "shouldn't",
    a4: "can't",
  }),
  (Q18 = {
    q: "I was ________ exhausted by the end of the day.",
    a1: "extremely",
    a2: "very",
    a3: "incredibly",
    a4: "completely",
  }),
  (Q19 = {
    q: "Where ________ they from?",
    a1: "isn't",
    a2: "am",
    a3: "is",
    a4: "are",
  }),
  (Q20 = {
    q: "I ________ like getting up early.",
    a1: "not",
    a2: " doesn't",
    a3: "am not",
    a4: "don't",
  }),
  (Q21 = {
    q: "I’m busy on Friday, so I ________ come.",
    a1: "don't",
    a2: "am not",
    a3: "not can",
    a4: "can't",
  }),
  (Q22 = {
    q: "I ________ been hit by a car, but luckily I just managed to get out of the way.",
    a1: "should have",
    a2: "must have",
    a3: "can have",
    a4: "could have",
  }),
  (Q23 = {
    q: "I’d love to ________ in the 19th century.",
    a1: "lived",
    a2: "have been lived",
    a3: "live",
    a4: "have lived",
  }),
  (Q24 = {
    q: ")He drives quite ________, but his brother drives really ________.",
    a1: "slow … fastly",
    a2: "slow … fast",
    a3: "slowly … fastly",
    a4: "slowly … fast",
  }),
  (Q25 = {
    q: "She’s from ________, so she speaks ________.",
    a1: "Spanish … Spanish",
    a2: "Spain … Spainese",
    a3: "Spanish … Spain",
    a4: "Spain … Spanish",
  }),
  (Q26 = {
    q: "If he ________ one minute later, he ________ the train.",
    a1: "would arrive … would miss",
    a2: "arrived … would have missed",
    a3: "would have arrived … would have missed",
    a4: "had arrived … would have missed",
  }),
  (Q27 = {
    q: "The film ________ by Quentin Tarantino.",
    a1: "directed",
    a2: "was direct",
    a3: "did directed",
    a4: "was directed",
  }),
  (Q28 = {
    q: "Where ________ he work?",
    a1: "is",
    a2: "do",
    a3: "don't",
    a4: "does",
  }),
  (Q29 = {
    q: "Winters here ________ be really cold sometimes, so make sure you bring warm clothes!",
    a1: "could",
    a2: "may",
    a3: "might",
    a4: "can",
  }),
  (Q30 = {
    q: "plural of fish",
    a1: "fishes",
    a2: "fishs",
    a3: "fished",
    a4: "fish",
  }),
];

let mainSection = document.getElementsByTagName("main");
let randomNumbersArray = [];
let randomQuestionsArray = [];

for (i = 0; i < 15; i++) {
  let randomNumber = Math.floor(Math.random() * 30);
  while (randomNumbersArray.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 30);
  }
  randomNumbersArray.push(randomNumber);
  randomQuestionsArray.push(questionBank[randomNumber]);
}

let answersCounter = 0;
randomQuestionsArray.forEach((ele) => {
  let questionBank = document.createElement("div");
  questionBank.classList.add("questionBank");
  mainSection[0].append(questionBank);
  let question = document.createElement("div");
  question.classList.add("question");
  questionBank.append(question);
  question.append(ele.q);
  let answersRandom = [];
  let randomNumbersArray2 = [];
  for (i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    while (randomNumbersArray2.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * 4);
    }
    randomNumbersArray2.push(randomNumber);
    answersRandom.push(Object.values(ele)[randomNumbersArray2[i] + 1]);
  }
  let firstAnswer = document.createElement("div");
  firstAnswer.append(answersRandom[0]);
  let secondAnswer = document.createElement("div");
  secondAnswer.append(answersRandom[1]);
  let thirdAnswer = document.createElement("div");
  thirdAnswer.append(answersRandom[2]);
  let fourthAnswer = document.createElement("div");
  fourthAnswer.append(answersRandom[3]);
  questionBank.append(firstAnswer);
  questionBank.append(secondAnswer);
  questionBank.append(thirdAnswer);
  questionBank.append(fourthAnswer);
  firstAnswer.classList.add(`answer${answersCounter}`);
  secondAnswer.classList.add(`answer${answersCounter}`);
  thirdAnswer.classList.add(`answer${answersCounter}`);
  fourthAnswer.classList.add(`answer${answersCounter}`);

  let answersContainer = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer];

  answersContainer.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      for (i = 0; i < 15; i++) {
        let elementClass = e.target.className;
        if (`answer${i}` == elementClass) {
          for (j = 0; j < 4; j++) {
            document
              .getElementsByClassName(`answer${i}`)
              [j].classList.remove("picked-answer");
          }
          break;
        }
      }

      e.target.classList.add("picked-answer");
    });
  });
  answersCounter++;
});

let timer = document.getElementsByClassName("timer");
let seconds = 60;
let minutes = 20;
setInterval(function changeSeconds() {
  if (minutes == 20) {
    minutes--;
  }
  seconds--;
  if (seconds == 0) {
    if (seconds == 0 && minutes == 0) {
      finishExam();
      return;
    }
    timer[0].textContent = `${minutes}:00`;
    minutes--;
    seconds = 60;
    return;
  }
  if (seconds >= 20) {
    timer[0].textContent = `${minutes}:${seconds}`;
  }
  if (seconds < 20) {
    timer[0].textContent = `${minutes}:0${seconds}`;
  }
}, 1000);

let correctAnswers = 0;
let questionsContainers = document.querySelectorAll(".questionBank");
let finishBtn = document.getElementById("finish-exam-btn");
let counter1 = 0;

finishBtn.addEventListener("click", finishExam);
function finishExam() {
  questionsContainers.forEach((ele) => {
    for (let child of ele.children) {
      if (child.className == `answer${counter1} picked-answer`) {
        if (child.textContent == randomQuestionsArray[counter1].a4) {
          correctAnswers++;
        }
      }
    }
    counter1++;
  });
  allUsers[indexOfActiveUser].englishTest = `${correctAnswers}`;

  activeUser.englishTest = `${correctAnswers}`;

  localStorage.setItem("activeUser", JSON.stringify(activeUser));
  localStorage.setItem("users", JSON.stringify(allUsers));
  location.href = "../html/homepage.html";
}
