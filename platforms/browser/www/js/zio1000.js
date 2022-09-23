(function() {
  const myQuestions = [
    {
      question: "Koliko je <br> 193 <br>+ 247?",
      answers: {
        a: "340",
        b: "440",
        c: "240"
      },
      correctAnswer: "b"
    },
    {
       question: "Koliko je <br> 467 <br>+ 318?",
      answers: {
        a: "675",
        b: "785",
        c: "765"
      },
      correctAnswer: "b"
    },
	{
     question: "Koliko je <br> 826 <br>- 373?",
      answers: {
        a: "453",
        b: "353",
        c: "350"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br>734 <br>- 167?",
      answers: {
        a: "168",
        b: "170",
        c: "167"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 295 <br>+ 476?",
      answers: {
        a: "671",
        b: "771",
        c: "871"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 123 <br>+ 345?",
      answers: {
        a: "377",
        b: "378",
        c: "468"
      },
      correctAnswer: "c"
    },
    {
       question: "Koliko je <br> 520 <br>- 340?",
      answers: {
        a: "170",
        b: "180",
        c: "200"
      },
      correctAnswer: "b"
    },
	{
      question: "Koliko je <br> 881 <br>- 362?",
      answers: {
        a: "519",
        b: "419",
        c: "529"
      },
      correctAnswer: "a"
    },
    {
       question: "Koliko je <br> 249 <br>+ 324?",
      answers: {
        a: "573",
        b: "563",
        c: "463"
      },
      correctAnswer: "a"
    },
	{
      question: "Koliko je <br> 825 <br>+ 103?",
      answers: {
        a: "926",
        b: "927",
        c: "928"
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

