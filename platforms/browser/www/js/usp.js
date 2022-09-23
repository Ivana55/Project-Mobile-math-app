(function() {
  const myQuestions = [
    {
      question: "Usporedi <br>30 kg i 1000 dag?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "a"
    },
    {
       question: "Usporedi <br>40cm i 4000mm?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "c"
    },
	{
     question: "Usporedi <br>1500s i 25min?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "b"
    },
	{
      question: "Usporedi <br> 5600mg i 40g",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "c"
    },
    {
       question: "Usporedi <br> 60h i 2400 min?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "a"
    },
	{
      question: "Usporedi <br> 15 dm i 1500 mm?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "b"
    },
    {
       question: "Usporedi <br> 600g i 6 dag?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "a"
    },
	{
      question: "Usporedi <br> 50 dm i 4900 mm?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "a"
    },
    {
       question: "Usporedi <br>70000 dag i 7 t?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
      },
      correctAnswer: "c"
    },
	{
      question: "Usporedi <br>2220 min i 37 hr?",
      answers: {
        a: ">",
        b: "=",
        c: "<"
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

