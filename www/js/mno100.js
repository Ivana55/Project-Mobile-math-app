(function() {
  const myQuestions = [
    {
      question: "Koliko je 8*8?",
      answers: {
        a: "56",
        b: "64",
        c: "48"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je 6*7?",
      answers: {
        a: "42",
        b: "36",
        c: "54"
      },
      correctAnswer: "a"
    },
	{
     question: "Koliko je 5*4?",
      answers: {
        a: "15",
        b: "20",
        c: "30"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je 9*3?",
      answers: {
        a: "15",
        b: "36",
        c: "27"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 6*2?",
      answers: {
        a: "12",
        b: "20",
        c: "10"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 3*8?",
      answers: {
        a: "12",
        b: "21",
        c: "24"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 7*5?",
      answers: {
        a: "25",
        b: "35",
        c: "42"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je 4*2?",
      answers: {
        a: "10",
        b: "12",
        c: "8"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je 9*6?",
      answers: {
        a: "54",
        b: "72",
        c: "60"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je 7*7?",
      answers: {
        a: "21",
        b: "42",
        c: "49"
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

