(function() {
  const myQuestions = [
    {
      question: "Koliko je 52+18?",
      answers: {
        a: "60",
        b: "70",
        c: "65"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 73-12?",
      answers: {
        a: "33",
        b: "51",
        c: "61"
      },
      correctAnswer: "c"
    },
	{
     question: "Koliko je 22+66?",
      answers: {
        a: "88",
        b: "89",
        c: "78"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 42-23?",
      answers: {
        a: "18",
        b: "19",
        c: "17"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 26+45?",
      answers: {
        a: "61",
        b: "71",
        c: "81"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je 99-36?",
      answers: {
        a: "73",
        b: "53",
        c: "63"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 34+26?",
      answers: {
        a: "60",
        b: "50",
        c: "40"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 47-28?",
      answers: {
        a: "14",
        b: "19",
        c: "16"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 56+30?",
      answers: {
        a: "73",
        b: "96",
        c: "86"
      },
      correctAnswer: "c"
    },
	{
      question: "Koliko je 97-68?",
      answers: {
        a: "28",
        b: "29",
        c: "27"
      },
      correctAnswer: "b"
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

