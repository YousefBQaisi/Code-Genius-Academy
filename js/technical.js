let logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
  location.href = "../html/signin.html";
  localStorage.removeItem("activeUser");
  localStorage.removeItem("indexOfUserActive");
});

let activeUser = JSON.parse(localStorage.getItem("activeUser"));
let indexOfActiveUser = JSON.parse(localStorage.getItem("indexOfUserActive"));

let allUsers = JSON.parse(localStorage.getItem("users"));

let questionsContainer = [
  (Q1 = {
    q: "What is HTML?",
    a1: "HTML describes the structure of a webpage",
    a2: "HTML is the standard markup language mainly used to create web pages",
    a3: "HTML consists of a set of elements that helps the browser how to view the content",
    a4: "All of the mentioned",
  }),
  (Q2 = {
    q: "Which HTML tag is used to insert an image?",
    a1: "<img url=”htmllogo.jpg” />",
    a2: "<img alt=”htmllogo.jpg” />",
    a3: "<img link=”htmllogo.jpg” />",
    a4: "<img src=”htmllogo.jpg” />",
  }),
  (Q3 = {
    q: "Which tag is used to create a dropdown in HTML Form?",
    a1: "<input>",
    a2: "<text>",
    a3: "<textarea>",
    a4: "<select>",
  }),
  (Q4 = {
    q: "Which HTML element is used for YouTube videos?",
    a1: "<small>",
    a2: "<samp>",
    a3: "<frame>",
    a4: "<iframe>",
  }),
  (Q5 = {
    q: "Which of the following tag is used to embed css in html page?",
    a1: "<css>",
    a2: "<!DOCTYPE html>",
    a3: "<script>",
    a4: "<style>",
  }),
  (Q6 = {
    q: "Which of the following CSS framework is used to create a responsive design?",
    a1: "django",
    a2: "rails",
    a3: "larawell",
    a4: "bootstrap",
  }),
  (Q7 = {
    q: "Which of the following CSS property is used to make the text bold?",
    a1: "text-decoration: bold",
    a2: "font-style: bold",
    a3: "text-align: bold",
    a4: "font-weight: bold",
  }),
  (Q8 = {
    q: "Which of the following CSS Property sets the stacking order of positioned elements?",
    a1: "y-index",
    a2: "x-index",
    a3: "all of the mentioned",
    a4: "z-index",
  }),
  (Q9 = {
    q: "What is JavaScript?",
    a1: "JavaScript is an assembly language used to make the website interactive",
    a2: "JavaScript is a compiled language used to make the website interactive",
    a3: "None of the mentioned",
    a4: "JavaScript is a scripting language used to make the website interactive",
  }),
  (Q10 = {
    q: `What will be the output of the following JavaScript code?
              var quiz=[1,2,3];
              var js=[6,7,8];
              var result=quiz.concat(js);
              document.writeln(result);`,
    a1: "123",
    a2: "1, 2, 3",
    a3: "Error",
    a4: "1, 2, 3, 6, 7, 8",
  }),
  (Q11 = {
    q: "Which of the following is the property that is triggered in response to JS errors?",
    a1: "onclick",
    a2: "onmessage",
    a3: "onexception",
    a4: "onerror",
  }),
  (Q12 = {
    q: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    a1: "Position",
    a2: "Standard",
    a3: "Location",
    a4: "Window",
  }),
  (Q13 = {
    q: `What will be the output of the following JavaScript code?
  
          // Javascript code snippet to compare the height
          function height()
          {
              var  height = 123.56;
              var type = (height>=190) ? "tall" : "short";
              return type;
          }`,
    a1: "123.56",
    a2: "tall",
    a3: "190",
    a4: "short",
  }),
  (Q14 = {
    q: "Which of the following is not a framework?",
    a1: "JavaScript .NET",
    a2: "Cocoa JS",
    a3: "jQuery",
    a4: "JavaScript",
  }),
  (Q15 = {
    q: "Which of the following is not an error in JavaScript?",
    a1: "Missing of Bracket",
    a2: "Syntax error",
    a3: "Missing of semicolons",
    a4: "Division by zero",
  }),
  (Q16 = {
    q: "In how many ways can CSS be written in?",
    a1: "1",
    a2: "2",
    a3: "4",
    a4: "3",
  }),
  (Q17 = {
    q: "One of the special features of an interpreter in reference with the for loop is that ___",
    a1: "The iterations can be infinite when an interpreter is used",
    a2: "The body of the loop is executed only once",
    a3: "the iteration is finite when an interpreter is used",
    a4: "Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property",
  }),
  (Q18 = {
    q: "What will happen if the body of a for/in loop deletes a property that has not yet been enumerated?",
    a1: "The property will be stored in a cache",
    a2: "The loop will not run",
    a3: "The property will be enumerated",
    a4: "That property will not be enumerated",
  }),
  (Q19 = {
    q: "What will be the step of the interpreter in a jump statement when an exception is thrown?",
    a1: "The interpreter stops its work",
    a2: "The interpreter throws another exception",
    a3: "The interpreter throws an error",
    a4: "The interpreter jumps to the nearest enclosing exception handler",
  }),
  (Q20 = {
    q: "The pop() method of the array does which of the following task?",
    a1: "increments the total length by 1",
    a2: "prints the first element but no effect on the length",
    a3: "updates the element",
    a4: "decrements the total length by 1",
  }),
  (Q21 = {
    q: "The primary purpose of the array map() function is that it __",
    a1: "maps the elements of another array into itself",
    a2: "passes each element of the array and returns the necessary mapped elements",
    a3: "pass the elements of the array into another arra",
    a4: "passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function",
  }),
  (Q22 = {
    q: "A function with no return value is called ___",
    a1: "Method",
    a2: "Static function",
    a3: "Dynamic function",
    a4: "Procedures",
  }),
  (Q23 = {
    q: "The keyword or the property that you use to refer to an object through which they were invoked is _",
    a1: "from",
    a2: "to",
    a3: "object",
    a4: "this",
  }),
  (Q24 = {
    q: "Which of the following property allows a marquee to be used in the case of a text-overflow?",
    a1: "overflow-marquee",
    a2: "overflow-text",
    a3: "none of the mentioned",
    a4: "overflow-style",
  }),
  (Q25 = {
    q: "Which is the property of a Window object that holds the name of the frame?",
    a1: "title",
    a2: "description",
    a3: "style",
    a4: "name",
  }),
  (Q26 = {
    q: "How to pick a document element based on the value of its id attribute?",
    a1: "getElementsbyId()",
    a2: "both getElementsbyId() and getElementbyId()",
    a3: "getElement",
    a4: "getElementbyId()",
  }),
  (Q27 = {
    q: "How is everything treated in HTML DOM?",
    a1: "Attributes",
    a2: "Elements",
    a3: "Arrays",
    a4: "Node",
  }),
  (Q28 = {
    q: "Which is the function used to call a function in every time duration?",
    a1: "callafter()",
    a2: "setTimeout()",
    a3: "setTime()",
    a4: "setInterval()",
  }),
  (Q29 = {
    q: "Which event handler is triggered when the user's mouse moves onto a link?",
    a1: "onMouseOut",
    a2: "onMouse",
    a3: "onMouseOnto",
    a4: "onMouseOver",
  }),
  (Q30 = {
    q: "How to find the index of a particular string?",
    a1: "position()",
    a2: "index()",
    a3: "positionof()",
    a4: "indexOf()",
  }),
];

let mainSection = document.getElementsByTagName("main");
let randomNumbersArray = [];
let randomQuestionsArray = [];

for (i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 30);
  while (randomNumbersArray.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 30);
  }
  randomNumbersArray.push(randomNumber);
  randomQuestionsArray.push(questionsContainer[randomNumber]);
}

let answersCounter = 0;
randomQuestionsArray.forEach((ele) => {
  let questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");
  mainSection[0].append(questionContainer);
  let question = document.createElement("div");
  question.classList.add("question");
  questionContainer.append(question);
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
  questionContainer.append(firstAnswer);
  questionContainer.append(secondAnswer);
  questionContainer.append(thirdAnswer);
  questionContainer.append(fourthAnswer);
  firstAnswer.classList.add(`answer${answersCounter}`);
  secondAnswer.classList.add(`answer${answersCounter}`);
  thirdAnswer.classList.add(`answer${answersCounter}`);
  fourthAnswer.classList.add(`answer${answersCounter}`);

  let answersContainer = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer];

  answersContainer.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      for (i = 0; i < 10; i++) {
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
let minutes = 10;
setInterval(function changeSeconds() {
  if (minutes == 10) {
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
  if (seconds >= 10) {
    timer[0].textContent = `${minutes}:${seconds}`;
  }
  if (seconds < 10) {
    timer[0].textContent = `${minutes}:0${seconds}`;
  }
}, 1000);

let correctAnswers = 0;
let questionsContainers = document.querySelectorAll(".question-container");
let finishBtn = document.getElementById("finish-exam-btn");
let counter1 = 0;
//
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
  allUsers[indexOfActiveUser].technicalTest = `${correctAnswers}`;

  activeUser.technicalTest = `${correctAnswers}`;

  localStorage.setItem("activeUser", JSON.stringify(activeUser));
  localStorage.setItem("users", JSON.stringify(allUsers));

  location.href = "../html/homepage.html";
}
