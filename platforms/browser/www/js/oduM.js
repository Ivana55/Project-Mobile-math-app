 (function() {
  const myQuestions = [
    {
      question: "Koliko je <br> 56357 <br>- 42794?",
      answers: {
        a: "13673",
        b: "13663",
        c: "13563"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 95823 <br>- 42371?",
      answers: {
        a: "53462",
        b: "53452",
        c: "53552"
      },
      correctAnswer: "b"
    },
	{
     question: "Koliko je <br> 13587 <br>- 4867?",
      answers: {
        a: "8820",
        b: "8720",
        c: "8620"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 53452 <br>- 33419?",
      answers: {
        a: "20133",
        b: "20033",
        c: "20023"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 4675 <br>- 347?",
      answers: {
        a: "4228",
        b: "4328",
        c: "4318"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 824563 <br>- 578697?",
      answers: {
        a: "245866",
        b: "245856",
        c: "245766"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je <br> 480305 <br>- 395828?",
      answers: {
        a: "84467",
        b: "84377",
        c: "84477"
      },
      correctAnswer: "c"
    },
	{
      question: "Koliko je <br> 999627 <br>- 35227?",
      answers: {
        a: "95400",
        b: "96400",
        c: "96500"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 744326 <br>- 16785?",
      answers: {
        a: "727541",
        b: "727540",
        c: "727531"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 974568 <br>- 324873?",
      answers: {
        a: "649685",
        b: "649695",
        c: "649595"
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

