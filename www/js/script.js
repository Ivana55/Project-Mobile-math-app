(function() {
  const myQuestions = [
    {
      question: "Koliko je 5+6?",
      answers: {
        a: "11",
        b: "15",
        c: "6"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je 11+3?",
      answers: {
        a: "10",
        b: "14",
        c: "8"
      },
      correctAnswer: "b"
    },
	{
     question: "Koliko je 3+7?",
      answers: {
        a: "10",
        b: "13",
        c: "7"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 4+4?",
      answers: {
        a: "12",
        b: "8",
        c: "7"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 8+3?",
      answers: {
        a: "12",
        b: "4",
        c: "11"
      },
      correctAnswer: "c"
    },
	{
      question: "Koliko je 6+7?",
      answers: {
        a: "13",
        b: "9",
        c: "15"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je 16+2?",
      answers: {
        a: "19",
        b: "18",
        c: "20"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je 4+13?",
      answers: {
        a: "17",
        b: "11",
        c: "5"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je 11+9?",
      answers: {
        a: "13",
        b: "14",
        c: "20"
      },
      correctAnswer: "c"
    },
	{
      question: "Koliko je 6+6?",
      answers: {
        a: "12",
        b: "15",
        c: "13"
      },
      correctAnswer: "a"
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
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }


  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  
  buildQuiz();

  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  nextButton.addEventListener("click", showNextSlide);
})();