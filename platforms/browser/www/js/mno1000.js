(function() {
  const myQuestions = [
    {
      question: "Koliko je <br> 25*15?",
      answers: {
        a: "265",
        b: "375",
        c: "255"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 60*8?",
      answers: {
        a: "420",
        b: "360",
        c: "480"
      },
      correctAnswer: "c"
    },
	{
     question: "Koliko je <br> 42*18?",
      answers: {
        a: "756",
        b: "746",
        c: "726"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 30*19?",
      answers: {
        a: "560",
        b: "570",
        c: "550"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 38*16?",
      answers: {
        a: "708",
        b: "608",
        c: "618"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 24*23?",
      answers: {
        a: "532",
        b: "542",
        c: "552"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 90*9?",
      answers: {
        a: "810",
        b: "720",
        c: "540"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 76*12?",
      answers: {
        a: "922",
        b: "812",
        c: "912"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 64*8?",
      answers: {
        a: "512",
        b: "412",
        c: "522"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 17*17?",
      answers: {
        a: "289",
        b: "279",
        c: "269"
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

