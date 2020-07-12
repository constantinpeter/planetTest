(function(){
    var image=0;
    // Functions
    function buildQuiz(){
        // variable to store the HTML output
        const output = [];
         

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for(letter in currentQuestion.answers){

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>
</div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults(){

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if(userAnswer === currentQuestion.correctAnswer){
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
         //image=image+n;
        document.getElementById("myImg").src = `${n}.jpg`;
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0){
            previousButton.style.display = 'none';
        }
        else{
            previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else{
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        var i =1;
        showSlide(currentSlide + i);
       
    }

    function showPreviousSlide() {
        var i = -1;
        showSlide(currentSlide +i);
        
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Γη",
                b: "Αφροδίτη",
                c: "Άρης",
                d: "Ουρανός"
            },
            correctAnswer: "a"
        },
        {
            question: "Όνομα του αστεριού?",
            answers: {
                a: "Ζεύς",
                b: "Φεγγάρι",
                c: "Γη",
                d: "Ήλιος"
            },
            correctAnswer: "d"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Άρης",
                b: "Ζεύς",
                c: "Κρόνος",
                d: "Ουρανός"
            },
            correctAnswer: "b"
        },
        {
            question: "Όνομα του δορυφόρου?",
            answers: {
                a: "Αφροδίτη",
                b: "Ζεύς",
                c: "Φεγγάρι",
                d: "Γη"
            },
            correctAnswer: "c"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Κρόνος",
                b: "Ερμής",
                c: "Ήλιος",
                d: "Ζεύς"
            },
            correctAnswer: "b"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Αφροδίτη",
                b: "Κρόνος",
                c: "Ποσειδώνας",
                d: "Άρης"
            },
            correctAnswer: "a"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Άρης",
                b: "Ουρανός",
                c: "Αφροδίτη",
                d: "Ποσειδώνας"
            },
            correctAnswer: "b"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Γη",
                b: "Κρόνος",
                c: "Άρης",
                d: "Ζεύς"
            },
            correctAnswer: "c"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Κρόνος",
                b: "Ήλιος",
                c: "Φεγγάρι",
                d: "Ερμής"
            },
            correctAnswer: "a"
        },
        {
            question: "Όνομα του πλανήτη?",
            answers: {
                a: "Φεγγάρι",
                b: "Άρης",
                c: "Γη",
                d: "Ποσειδώνας"
            },
            correctAnswer: "d"
        }
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    
   
    
})();
