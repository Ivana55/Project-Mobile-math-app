(function() {
  const myQuestions = [
    {
      question: "Koliko je <br> 94264 <br>+ 83432?",
      answers: {
        a: "177696",
        b: "177686",
        c: "177667"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je <br> 83452 <br>+ 65284?",
      answers: {
        a: "137736",
        b: "138736",
        c: "148736"
      },
      correctAnswer: "c"
    },
	{
     question: "Koliko je <br> 75246 <br>+ 63421?",
      answers: {
        a: "138667",
        b: "138677",
        c: "148667"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 62522 <br>+ 78066?",
      answers: {
        a: "150588",
        b: "140588",
        c: "130588"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 354648 <br> + 289521?",
      answers: {
        a: "644179",
        b: "644169",
        c: "644269"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 628548 <br> + 298491?",
      answers: {
        a: "928139",
        b: "928039",
        c: "927039"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 123456 <br> + 78945?",
      answers: {
        a: "202401",
        b: "202501",
        c: "202601"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 640762 <br> + 144222?",
      answers: {
        a: "785984",
        b: "784984",
        c: "794985"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 450700 <br> + 256666?",
      answers: {
        a: "707366",
        b: "707376",
        c: "708366"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 755444 <br> + 111116?",
      answers: {
        a: "867660",
        b: "867570",
        c: "866560"
      },
      correctAnswer: "c"
    }
  ];

  function buildQuiz() {
    const output = [];


    myQuestions.forEach((currentQuestion, questionNumber) => {
     
      const answers = [];

      for (letter in currentQuestion.answers) {
       
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }


      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });


    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
   
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
      
        numCorrect++;

       
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

   
    resultsContainer.innerHTML = `${numCorrect*5} bodova od ${myQuestions.length*5}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
      endButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
      endButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }


  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const endButton = document.getElementById("end");

  
  buildQuiz();

  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  nextButton.addEventListener("click", showNextSlide);
})();

