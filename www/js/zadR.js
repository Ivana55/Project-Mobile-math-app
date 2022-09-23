(function() {
  const myQuestions = [
    {
      question: 'Ana je kupila petnaest bombona. Šest je dala Marku. Koliko joj je bombona ostalo?',
      answers: {
        a: "8",
        b: "7",
        c: "9"
      },
      correctAnswer: "c"
    },
    {
       question: "U parku je pet djevojčica i devet dječaka. Koliko je djece u parku?",
      answers: {
        a: "14",
        b: "12",
        c: "10"
      },
      correctAnswer: "a"
    },
	{
     question: "Na stolu je dvadeset kolača. Djed je pojeo trinaest kolača. Koliko je ostalo?",
      answers: {
        a: "7",
        b: "6",
        c: "11"
      },
      correctAnswer: "a"
    },
	{
      question: "Filip ima osam žutih i sedam plavih autića. Koliko autića ima Filip?",
      answers: {
        a: "13",
        b: "14",
        c: "15"
      },
      correctAnswer: "c"
    },
    {
       question: "Na zidu visi osamnaest slika. Četrnaest je slika palo. Koliko je slika ostalo na zidu? ",
      answers: {
        a: "3",
        b: "4",
        c: "1"
      },
      correctAnswer: "b"
    },
	{
      question: "Ispred trgovine je osamnaest automobila. Šest ih se odvezlo. Koliko ih je ostalo?",
      answers: {
        a: "12",
        b: "10",
        c: "6"
      },
      correctAnswer: "a"
    },
    {
       question: "Na dvorištu je sedam pasa i pet mačaka. Koliko je životinja na dvorištu?",
      answers: {
        a: "12",
        b: "14",
        c: "15"
      },
      correctAnswer: "a"
    },
	{
      question: "Luka je kupio šest čokoladica. Tri je dao sestri. Koliko mu je ostalo?",
      answers: {
        a: "1",
        b: "4",
        c: "3"
      },
      correctAnswer: "a"
    },
    {
       question: "Karmen je u vazu stavila šest bijelih i pet crvenih ruža. Koliko je ruža u vazi?",
      answers: {
        a: "10",
        b: "11",
        c: "13"
      },
      correctAnswer: "b"
    },
	{
      question: "Sedamnaest lastavica sjedi na grani. Jedanaest ih je odletjelo. Koliko je lastavica ostalo na grani?",
      answers: {
        a: "4",
        b: "5",
        c: "6"
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

