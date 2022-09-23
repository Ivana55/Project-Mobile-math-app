(function() {
  const myQuestions = [
    {
      question: "Koliko je 15-3?",
      answers: {
        a: "11",
        b: "12",
        c: "7"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 17-8?",
      answers: {
        a: "9",
        b: "12",
        c: "6"
      },
      correctAnswer: "a"
    },
	{
     question: "Koliko je 16-5?",
      answers: {
        a: "10",
        b: "11",
        c: "12"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je 4-3?",
      answers: {
        a: "2",
        b: "3",
        c: "1"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 8-3?",
      answers: {
        a: "5",
        b: "6",
        c: "2"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 19-9?",
      answers: {
        a: "10",
        b: "9",
        c: "4"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je 18-12?",
      answers: {
        a: "4",
        b: "6",
        c: "7"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je 13-7?",
      answers: {
        a: "4",
        b: "6",
        c: "7"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 11-9?",
      answers: {
        a: "2",
        b: "3",
        c: "1"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 9-4?",
      answers: {
        a: "4",
        b: "2",
        c: "5"
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

