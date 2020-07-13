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
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Γη",
                β: "Αφροδίτη",
                γ: "Άρης",
                δ: "Ουρανός"
            },
            correctAnswer: "α"
        },
        {
            question: "Όνομα του αστεριού;",
            answers: {
                α: "Δίας",
                β: "Φεγγάρι",
                γ: "Γη",
                δ: "Ήλιος"
            },
            correctAnswer: "δ"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Άρης",
                β: "Δίας",
                γ: "Κρόνος",
                δ: "Ουρανός"
            },
            correctAnswer: "β"
        },
        {
            question: "Όνομα του δορυφόρου;",
            answers: {
                α: "Αφροδίτη",
                β: "Δίας",
                γ: "Φεγγάρι",
                δ: "Γη"
            },
            correctAnswer: "γ"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Κρόνος",
                β: "Ερμής",
                γ: "Ήλιος",
                δ: "Δίας"
            },
            correctAnswer: "β"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Αφροδίτη",
                β: "Κρόνος",
                γ: "Ποσειδώνας",
                δ: "Άρης"
            },
            correctAnswer: "α"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Άρης",
                β: "Ουρανός",
                γ: "Αφροδίτη",
                δ: "Ποσειδώνας"
            },
            correctAnswer: "β"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Γη",
                β: "Κρόνος",
                γ: "Άρης",
                δ: "Δίας"
            },
            correctAnswer: "γ"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Κρόνος",
                β: "Ήλιος",
                γ: "Φεγγάρι",
                δ: "Ερμής"
            },
            correctAnswer: "α"
        },
        {
            question: "Όνομα του πλανήτη;",
            answers: {
                α: "Φεγγάρι",
                β: "Άρης",
                γ: "Γη",
                δ: "Ποσειδώνας"
            },
            correctAnswer: "δ"
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
