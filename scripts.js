let currentPage = 0;
let totalTime = 20 * 60;
const timerDisplay = document.getElementById("time");
const questionsPerPage = 15;
let userAnswers = [];
let userChecks = [];
const labelSpan = document.getElementById("labelSpan");
const backBtn = document.getElementById("backBtn");
let questions = [
  {
    question: "Which HTML tag is used to define a table row?",
    options: ["<row>", "<tr>", "<td>", "<th>"],
    answer: "<tr>",
  },
  {
    question: "What is the correct CSS syntax to make all <p> elements bold?",
    options: [
      "p { text-weight: bold; }",
      "p { font-weight: bold; }",
      "p { weight: bold; }",
      "p { font: bold; }",
    ],
    answer: "p { font-weight: bold; }",
  },
  {
    question:
      "Which built-in method returns the length of a string in JavaScript?",
    options: ["length()", "count()", "getSize()", "length"],
    answer: "length",
  },
  {
    question: "What does the <head> element contain?",
    options: [
      "Visible content",
      "JavaScript only",
      "Metadata/information for the document",
      "Main HTML structure",
    ],
    answer: "Metadata/information for the document",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "size"],
    answer: "font-size",
  },
  {
    question:
      "Which JavaScript method is used to write content into the HTML document?",
    options: [
      "console.log()",
      "document.write()",
      "document.log()",
      "innerHTML()",
    ],
    answer: "document.write()",
  },
  {
    question: "How do you apply a class in CSS?",
    options: ["#classname", ".classname", "classname", "*classname"],
    answer: ".classname",
  },
  {
    question: "Which HTML tag creates a checkbox input?",
    options: [
      "<checkbox>",
      '<input type="check">',
      '<input type="checkbox">',
      "<box>",
    ],
    answer: '<input type="checkbox">',
  },
  {
    question: "Which CSS property is used to make text italic?",
    options: [
      "font-weight: italic;",
      "font-style: italic;",
      "text-style: italic;",
      "text-italic: true;",
    ],
    answer: "font-style: italic;",
  },
  {
    question: "How do you comment in CSS?",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
    answer: "/* comment */",
  },
  {
    question: "What is the correct way to declare a function in JavaScript?",
    options: [
      "function myFunc {}",
      "def myFunc()",
      "function myFunc() {}",
      "func myFunc()",
    ],
    answer: "function myFunc() {}",
  },
  {
    question: "How do you add a background image in CSS?",
    options: [
      'background: image("img.jpg");',
      'bg-image: url("img.jpg");',
      'background-image: url("img.jpg");',
      'image-background: "img.jpg";',
    ],
    answer: 'background-image: url("img.jpg");',
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<hyperlink>", "<link>", "<a>", "<href>"],
    answer: "<a>",
  },
  {
    question: "What does === mean in JavaScript?",
    options: [
      "Assignment",
      "Equal value only",
      "Equal value and type",
      "Not equal",
    ],
    answer: "Equal value and type",
  },
  {
    question: "Which CSS property changes the color of text?",
    options: ["text-color", "font-color", "color", "foreground-color"],
    answer: "color",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "font", "styles"],
    answer: "style",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above",
  },

  {
    question: "How do you insert a comment in a JavaScript?",
    options: [
      "<!--This is a comment-->",
      "// This is a comment",
      "'This is a comment",
      "/* This is a comment */",
    ],
    answer: "// This is a comment",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    answer: "<br>",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "src", "title", "longdesc"],
    answer: "alt",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "background-color", "bgcolor", "backgroundColor"],
    answer: "background-color",
  },
  {
    question:
      "How do you make each word in a text start with a capital letter in CSS?",
    options: [
      "text-transform: capitalize;",
      "text-style: capitalize;",
      "transform: capitalize;",
      "text-capitalize: true;",
    ],
    answer: "text-transform: capitalize;",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["-", "*", "=", "+"],
    answer: "=",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    answer: "onclick",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "create function myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "How can you add a comment in a CSS file?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "<!-- this is a comment -->",
      "' this is a comment",
    ],
    answer: "/* this is a comment */",
  },
  {
    question: "How do you select an element with id 'demo' in CSS?",
    options: ["#demo", ".demo", "demo", "*demo"],
    answer: "#demo",
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["relative", "absolute", "fixed", "static"],
    answer: "static",
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.convert()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = ['red', 'green', 'blue']",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font-variant"],
    answer: "font-family",
  },
  {
    question: "Which symbol is used for ID selectors in CSS?",
    options: ["#", ".", "*", "$"],
    answer: "#",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<section>", "<aside>"],
    answer: "<footer>",
  },
  {
    question: "Which HTML tag is used to display a picture on a webpage?",
    options: ["<picture>", "<image>", "<img>", "<src>"],
    answer: "<img>",
  },
  {
    question: "How do you round the corners of an element in CSS?",
    options: [
      "border-radius",
      "corner-radius",
      "border-corner",
      "radius-corner",
    ],
    answer: "border-radius",
  },
  {
    question:
      "Which JavaScript method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<head>", "<meta>", "<title>", "<header>"],
    answer: "<title>",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change the left margin of an element?",
    options: ["margin-left", "padding-left", "indent", "margin"],
    answer: "margin-left",
  },
  {
    question:
      "Which HTML attribute specifies the URL of the page the link goes to?",
    options: ["href", "src", "link", "url"],
    answer: "href",
  },
  {
    question: "Which JavaScript keyword is used to define a constant variable?",
    options: ["var", "const", "let", "constant"],
    answer: "const",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "var carName;",
      "variable carName;",
      "v carName;",
      "carName var;",
    ],
    answer: "var carName;",
  },
];

//TIMER DISPLAY FUNCTION
function startTimer() {
  updateTimerDisplay();

  const timerInterval = setInterval(() => {
    totalTime--;

    updateTimerDisplay();

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
      window.location.href("results.html");
    }

    if (totalTime <= 300) {
      timerDisplay.style.fontWeight = "bold";
      timerDisplay.style.color = "red";
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timerDisplay.textContent = `Time left: ${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

//AFTER THE DOM LOADS...
document.addEventListener("DOMContentLoaded", () => {
  if (timerDisplay) {
    startTimer();
  }
  const correction = document.getElementById("correction");
  const startBtn = document.getElementById("startBtn");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      window.location.href = "quizz.html";
    });
  }

  //CODE FOR THE RESULT PAGE
  const scoreDisplay = document.getElementById("scoreSpan");
  userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];

  if (scoreDisplay) {
    labelSpan.addEventListener("click", () => {
      if (labelSpan.textContent === "Hide corrections") {
        correction.style.display = "none";
        labelSpan.textContent = "See Corrections";
      } else {
        correction.style.display = "flex";
        labelSpan.textContent = "Hide corrections";
      }
    });
    const start = currentPage * questionsPerPage;

    let score = 0;

    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        score++;
      }
    });

    scoreDisplay.textContent = `${score}/45`;

    questions.forEach((q, index) => {
      const h3 = document.createElement("h3");
      h3.textContent = `Question ${start + index + 1}. ${q.question}`;

      const span = document.createElement("span");
      span.textContent = userAnswers[index] === q.answer ? "✅" : "❌";

      const userP = document.createElement("p");
      userP.textContent = `Your answer: ${userAnswers[index] || "No answer"}`;

      const correctP = document.createElement("p");
      correctP.classList.add("make-bold");
      correctP.textContent = `Correct answer: ${q.answer}`;

      const cDiv = document.createElement("div");
      cDiv.classList.add("qDiv");
      cDiv.appendChild(h3);
      userP.appendChild(span);
      cDiv.appendChild(userP);
      cDiv.appendChild(correctP);

      correction.appendChild(cDiv);
      localStorage.removeItem(userAnswers);
      userChecks = [];
    });

    backBtn.addEventListener("click", () => {
      window.location.href = "quizz.html";
    });
  }

  const quizContainer = document.getElementById("quizContainer");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (prevBtn && nextBtn) {
    if (currentPage === 0) {
      prevBtn.style.display = "none";
    }

    prevBtn.addEventListener("click", () => {
      currentPage--;
      nextBtn.textContent = "Next";
      window.scrollTo(0, 0);
      renderQuestions();
    });
  }

  if (quizContainer && nextBtn) {
    renderQuestions();

    nextBtn.addEventListener("click", () => {
      const start = currentPage * questionsPerPage;
      const end = start + questionsPerPage;
      const currentSet = questions.slice(start, end);

      window.scrollTo(0, 0);

      currentSet.forEach((q, index) => {
        const questionName = `question${start + index + 1}`;
        const selected = document.querySelector(
          `input[name = "${questionName}"]:checked`
        );

        userAnswers[start + index] = selected ? selected.value : null;
      });
      localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      currentPage++;

      nextBtn.textContent = currentPage >= 2 ? "Submit" : "Next";

      if (currentPage * questionsPerPage >= questions.length) {
        window.location.href = "results.html";
      } else {
        renderQuestions();
      }
    });
  }
});

//FUNCTION T RENDER QUESTI0NS
function renderQuestions() {
  prevBtn.style.display = currentPage === 0 ? "none" : "inline-block";
  quizContainer.innerHTML = "";

  const start = currentPage * questionsPerPage;
  const end = start + questionsPerPage;
  const currentSet = questions.slice(start, end);

  currentSet.forEach((q, index) => {
    const qDiv = document.createElement("div");
    qDiv.classList.add("questionBlock");

    const qTitle = document.createElement("h3");
    qTitle.classList.add("question");
    qTitle.textContent = `${start + index + 1}. ${q.question}`;
    qDiv.appendChild(qTitle);

    q.options.forEach((option) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");

      radio.type = "radio";
      radio.name = `question${start + index + 1}`; //Numbering for display*
      radio.value = option;

      radio.addEventListener("change", () => {
        userChecks[start + index] = radio.value; //Numbering for positon*
        console.log(userAnswers);
      });

      if (userChecks[start + index] === radio.value) {
        radio.checked = true;
      }
      label.appendChild(radio);
      label.append(option);
      qDiv.appendChild(label);
      const br = document.createElement("br");
      qDiv.appendChild(br);
    });
    quizContainer.appendChild(qDiv);
  });
}
