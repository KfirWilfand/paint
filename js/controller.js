var quiz;
var questionsArr;
var numOfQuestions;
var questionNum;
var userAnswer = [];

function onClickSettingOption(clickedItem) {
  var settingItems = document.getElementsByClassName("setting-item");

  for (let item of settingItems) {
    switch (clickedItem.id) {
      case "choose-quiz":
        var quizList = "";

        quizListArr.forEach(function(element) {
          quizList += `<li class="list-group-item quiz-item" id="${
            element.id
          }" onclick="onSelectQuiz(this);">
          ${element.title}</li>`;
        });

        document.getElementById("setting-block").innerHTML =
          '<div class="row">' +
          '<div class="col-9">Choose Quiz</div>' +
          ' <div class="col-3 justify-content-end"><img onclick="onClickExitDisplaySettingOption();" src="img/cancel.png"> </div>' +
          '<div class="col-12">' +
          "     <hr>" +
          " </div>" +
          ' <div class="col-12">' +
          '   <div class="scrollbar scrollbar-ripe-malinka" id="style-12">' +
          '         <div class="force-overflow quiz-list"> ' +
          quizList +
          "     </div>" +
          "     </div>" +
          "</div>" +
          "</div>";

        break;
      case "upload-new-quiz":
        break;
      case "setting":
        break;
    }
  }
}

function onClickExitDisplaySettingOption() {
  document.getElementById("setting-block").innerHTML =
    // '<ul class="list-group" id="setting-block">' +
    '<li class="list-group-item setting-item" id="choose-quiz" onclick="onClickSettingOption(this);">Choose Quiz</li>' ;
    // '<li class="list-group-item setting-item" id="upload-new-quiz" onclick="onClickSettingOption(this);">Upload New Quiz</li>' +
    // '<li class="list-group-item setting-item" id="setting" onclick="onClickSettingOption(this);">Setting</li>' ;
    // "</ul> ";
}

function onSelectQuiz(quizHtmlElement) {
  quiz = getQuizById(quizHtmlElement["id"]);
  questionsArr = quiz["questions"];
  numOfQuestions = questionsArr.length;
  questionNum = 0;

  if (numOfQuestions <= 0) return;

  onQuestionChange(questionNum);
}

function onQuestionChange(queNumber) {
  buildProcessLine(numOfQuestions, queNumber);
  displayQuestionNavigation(numOfQuestions, queNumber);

  if (queNumber === numOfQuestions) displayFinishQuiz();
  else displayQuestion(questionsArr, queNumber);
}

function onNextQue() {
  questionNum++;
  onQuestionChange(questionNum);
}

function onBackQue() {
  questionNum--;
  onQuestionChange(questionNum);
}

function displayQuestionNavigation(numOfQuestions, currentQuestionNum) {
  var backVisibility;
  var nextVisibility;
  if (currentQuestionNum == 0) {
    backVisibility = "hidden";
    nextVisibility = "visible";
  } else if (currentQuestionNum === numOfQuestions) {
    backVisibility = "hidden";
    nextVisibility = "hidden";
  } else {
    backVisibility = "visible";
    nextVisibility = "visible";
  }

  document
    .getElementById("btn-back")
    .setAttribute("style", `visibility: ${backVisibility};`);

  document
    .getElementById("btn-next")
    .setAttribute("style", `visibility: ${nextVisibility};`);
}
function displayFinishQuiz() {
  document.getElementById("question-title").innerText = "Finish!";


  document
    .getElementById("question-image")
    .setAttribute("style", `background-image: url("img/award.png");`);

  document.getElementById("answer-block").innerHTML =
    "<div class='row'><div class='col-12'>Your Score is:<div class='calc-score col-12'>" +
    calcScore() +
    "</div></div></div> ";
  document
    .getElementById("answer-block")
    .setAttribute("style", `font-size: 4vh; padding-left: 15%`);
    userAnswer = [];
}

function displayQuestion(quiz, numOfQuestion) {
  document.getElementById("question-title").innerText =
    quiz[numOfQuestion].question;
  document
    .getElementById("question-image")
    .setAttribute(
      "style",
    `background-image: url(${quiz[numOfQuestion]["img-url"]});`
    );

  var buildAnswerHtml = "";
  var i = 0;
  quiz[numOfQuestion]["answers"].forEach(function(element) {
    buildAnswerHtml +=
      '<button class="answer" name="w" id=' +
      i +
      ' onclick="onChooseAnswer(this)"';

    if (userAnswer[numOfQuestion] == i) {
      buildAnswerHtml += 'style="border: 2px solid var(--brown-bg);"';
    }

    buildAnswerHtml += "> " + element + "</button>";

    i++;
  });

  document.getElementById("answer-block").innerHTML = buildAnswerHtml;
}

function onChooseAnswer(answerHtmlElement) {
  var answerElementsArr = document.getElementsByClassName("answer");
  var answerClicked;

  for (let answer of answerElementsArr) {
    if (answer === answerHtmlElement) {
      answer.setAttribute("style", "border: 2px solid var(--brown-bg);");
      answerClicked = answer;
    } else answer.setAttribute("style", "border:0px");
  }

  userAnswer[questionNum] = parseInt(answerClicked.id);
}
function buildProcessLine(numOfQuestions, currentQuestionNum) {
  if (currentQuestionNum > numOfQuestions) return;

  var processLineHtml = '<div class="proc-ellipse proc-on"></div>';

  for (var i = 1; i < currentQuestionNum; i++) {
    processLineHtml =
      processLineHtml +
      '<div class="proc-line proc-on"></div>' +
      '<div class="proc-ellipse proc-on"></div>';
  }

  for (var i = currentQuestionNum; i < numOfQuestions - 1; i++) {
    processLineHtml =
      processLineHtml +
      '<div class="proc-line proc-off"></div>' +
      '<div class="proc-ellipse proc-off"></div>';
  }

  if (currentQuestionNum === numOfQuestions) {
    processLineHtml += '<div class="proc-line proc-on"></div>';
    processLineHtml += '<div class="proc-finish proc-finish-on"></div>';
  } else {
    processLineHtml += '<div class="proc-line proc-off"></div>';
    processLineHtml += '<div class="proc-finish proc-finish-off"></div>';
  }

  document.getElementById("questions-process").innerHTML = processLineHtml;
}

function getQuizById(id) {
  var quiz;
  quizListArr.forEach(function(element) {
    if (element["id"] === id) {
      quiz = element;
    }
  });
  return quiz;
}

function calcScore() {
  var arrSum = 0;

  for (var i = 0; i < userAnswer.length; i++) {
    arrSum += userAnswer[i];
  }

  return Math.floor((arrSum * 100) / numOfQuestions);
}

function onOpenSideBar(){
      document.getElementById("setting-block").setAttribute("style", "display: inline;");
}
