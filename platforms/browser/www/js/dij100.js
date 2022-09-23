(function() {
  const myQuestions = [
    {
      question: "Koliko je 54:9?",
      answers: {
        a: "8",
        b: "6",
        c: "7"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 35:5?",
      answers: {
        a: "7",
        b: "4",
        c: "5"
      },
      correctAnswer: "a"
    },
	{
     question: "Koliko je 48:6?",
      answers: {
        a: "8",
        b: "7",
        c: "9"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 80:8?",
      answers: {
        a: "9",
        b: "8",
        c: "10"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 45:9?",
      answers: {
        a: "5",
        b: "4",
        c: "3"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 49:7?",
      answers: {
        a: "8",
        b: "6",
        c: "7"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 63:9?",
      answers: {
        a: "7",
        b: "6",
        c: "9"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 21:7?",
      answers: {
        a: "3",
        b: "4",
        c: "2"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je 16:4?",
      answers: {
        a: "4",
        b: "3",
        c: "5"
      },
      correctAnswer: "c"
    },
	{
      question: "Koliko je 18:2?",
      answers: {
        a: "6",
        b: "3",
        c: "9"
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

