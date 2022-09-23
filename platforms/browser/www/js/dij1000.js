(function() {
  const myQuestions = [
    {
      question: "Koliko je <br> 369:3?",
      answers: {
        a: "122",
        b: "123",
        c: "120"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 482:2?",
      answers: {
        a: "221",
        b: "251",
        c: "241"
      },
      correctAnswer: "c"
    },
	{
     question: "Koliko je <br> 488:4?",
      answers: {
        a: "111",
        b: "112",
        c: "122"
      },
      correctAnswer: "c"
    },
	{
      question: "Koliko je <br> 231:7?",
      answers: {
        a: "33",
        b: "32",
        c: "31"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je <br> 855:9?",
      answers: {
        a: "95",
        b: "94",
        c: "93"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 750:6?",
      answers: {
        a: "122",
        b: "130",
        c: "125"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 512:8?",
      answers: {
        a: "64",
        b: "65",
        c: "62"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 540:6?",
      answers: {
        a: "541",
        b: "540",
        c: "530"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 125:5?",
      answers: {
        a: "15",
        b: "25",
        c: "35"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 312:8?",
      answers: {
        a: "39",
        b: "29",
        c: "19"
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

