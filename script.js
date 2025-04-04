VanillaTilt.init(document.querySelectorAll("img"), {
    max: 30,
    speed: 400,
    glare: true
    });
    
// Function to show score and timer
function showScoreAndTimer() {
    const scoreElement = document.getElementById('floating-score');
    const timerElement = document.getElementById('timer-display');
    scoreElement.style.display = 'block';
    timerElement.style.display = 'block';
}

// Function to hide score and timer
function hideScoreAndTimer() {
    const scoreElement = document.getElementById('floating-score');
    const timerElement = document.getElementById('timer-display');
    scoreElement.style.display = 'none';
    timerElement.style.display = 'none';
}
const quizContainer = document.getElementById('quiz-container');
quizContainer.style.display = 'none';
quizContainer.style.display = 'none';


document.addEventListener('DOMContentLoaded', (event) => {
    const backButton = document.getElementById('back');
    backButton.addEventListener('click', resetToQuizLoadScreen);
});


function submitScore(){
    if (score > 25 && score <= 30) { 
        clearInterval(timerInterval);
        alert(`Fantastic Job!!!! Your score is ${score} and your time is ${formatTime(timerInSeconds)}`);
    } else if (score > 20 && score <= 25) { 
        clearInterval(timerInterval);
        alert(`Amazing Job!!!! Your score is ${score}and your time is ${formatTime(timerInSeconds)}. Keep it up!`);
    } else if (score > 15 && score <= 20) { 
        clearInterval(timerInterval);
        alert(`Good Job!!!! Your score is ${score} and your time is ${formatTime(timerInSeconds)}. Keep practicing`);
    } else if (score >= 10 && score <= 15) { 
        clearInterval(timerInterval);
        alert(`Your score is ${score}and your time is ${formatTime(timerInSeconds)}. You will need some more practice.`);
    } else if (score >= 1 && score < 10) { 
        clearInterval(timerInterval);
        alert(`Your score is ${score}and your time is ${formatTime(timerInSeconds)}. You will need some refreshment.`);
    } else if (score === 0) { 
        clearInterval(timerInterval);
        alert("Your score is 0. You will need some study.");
    } else {
        alert("You need to complete the question!");
    }
}

const htmlImage = document.getElementById('html');
const jsImage = document.getElementById('js');
const pyImage = document.getElementById('py');

function loadQuiz(quizType) {
    const quizContainer = document.getElementById('quiz-container');
    const quizTitle = document.getElementById('quizTitle');
    quizContainer.style.display = 'flex';
    quizContainer.innerHTML = '';
    const back = document.getElementById('back');
    back.style.display = 'flex';
    htmlImage.style.display = 'none';
    jsImage.style.display = 'none';
    pyImage.style.display = 'none';

    
    // Hide the quiz title when a quiz is loaded
       quizTitle.style.display = 'none';
      

    // Show score and timer when a quiz is chosen
    showScoreAndTimer();

    let quizHtml = '';

    switch (quizType) {
        case 'html-css':
            quizHtml = generateHtmlCssQuiz();
            break;
        case 'javascript':
            quizHtml = generateJavaScriptQuiz();
            break;
        case 'python':
            quizHtml = generatePythonQuiz();
            break;
        default:
            quizHtml = '<p>Quiz not found.</p>';
    }

    quizContainer.innerHTML = quizHtml;
   
    // Reset score and timer
    score = 0;
    timerInSeconds = 0;
    updateScoreDisplay()

     // Start the timer
     startTimer();
    
}



let score = 0;
let timerInSeconds = 0;
let timerStarted = false;

function startTimer() {
    if (!timerStarted) {
        timerInterval = setInterval(() => {
            timerInSeconds++;
            document.getElementById('timer-display').textContent = formatTime(timerInSeconds);
        }, 1000);
        timerStarted = true;
    }
   
}

function updateScoreDisplay() {
    document.getElementById('floating-score').textContent = score;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


function resetToQuizLoadScreen() {
    const quizContainer = document.getElementById('quiz-container');
    const quizTitle = document.getElementById('quizTitle');
    const backButton = document.getElementById('back');
    htmlImage.style.display = '';
    jsImage.style.display = '';
    pyImage.style.display = '';
   
    

    // Hide the quiz container and back button
    quizContainer.style.display = 'none';
    backButton.style.display = 'none';
   
    
    hideScoreAndTimer()
    // Show the quiz title
    quizTitle.style.display = 'block';

    // Reset score and timer
    score = 0;
    timerInSeconds = 0;
    timerStarted = false;
    clearInterval(timerInterval);
    score = 0;
    updateScoreDisplay()
    
    
}

     // Html Quiz // 
     function check1() {
        let selectedAnswer = document.querySelector('input[name="q1"]:checked');
        if (selectedAnswer && selectedAnswer.value === 'hypertext markup language') {alert('Correct!');
                score++;
                updateScoreDisplay();
                if (!timerStarted) startTimer();
                document.getElementById('one').disabled = true;
            } else {
                alert('Incorrect.');
            }
     }    

    function check2() {
        let selectedAnswer = document.querySelector('input[name="q2"]:checked');
        if (selectedAnswer && selectedAnswer.value === "style") {alert("Correct!");
        score++;
                updateScoreDisplay();
                if (!timerStarted) startTimer();
                document.getElementById('two').disabled = true;
            } else {
                alert('Incorrect.');
            }
    }
    

function check3() {
    let selectedAnswer = document.querySelector('input[name="q3"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'true') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('three').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check4() {
    let selectedAnswer = document.querySelector('input[name="q4"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'h1 { background-color: red; }') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('four').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check5() {
    let selectedAnswer = document.querySelector('input[name="q5"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'style') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('five').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check6() {
    let selectedAnswer = document.querySelector('input[name="q6"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'font-size') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('six').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check7() {
    let selectedAnswer = document.querySelector('input[name="q7"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'border: 1px solid black;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check8() {
    let selectedAnswer = document.querySelector('input[name="q8"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'font-family') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eight').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check9() {
    let selectedAnswer = document.querySelector('input[name="q9"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'list-style: square;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nine').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check10() {
    let selectedAnswer = document.querySelector('input[name="q10"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'Separate them with commas') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('ten').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check11() {
    let selectedAnswer = document.querySelector('input[name="q11"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'static') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eleven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check12() {
    let selectedAnswer = document.querySelector('input[name="q12"]:checked');
    if (selectedAnswer && selectedAnswer.value === '/* This is a comment */') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twelve').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check13() {
    let selectedAnswer = document.querySelector('input[name="q13"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'margin-left') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check14() {
    let selectedAnswer = document.querySelector('input[name="q14"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'Cascading Style Sheets') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fourteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check15() {
    let selectedAnswer = document.querySelector('input[name="q15"]:checked');
    if (selectedAnswer && selectedAnswer.value === '#demo') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('fifteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check16() {
    let selectedAnswer = document.querySelector('input[name="q16"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'list-style: none;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('sixteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check17() {
    let selectedAnswer = document.querySelector('input[name="q17"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'To provide an alternative text for the image') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('seventeen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check18() {
    let selectedAnswer = document.querySelector('input[name="q18"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'target="_blank"'){
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('eighteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check19() {
    let selectedAnswer = document.querySelector('input[name="19"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'flex-direction') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('nineteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check20() {
    let selectedAnswer = document.querySelector('input[name="q20"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a[title="example"]') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check21() {
    let selectedAnswer = document.querySelector('input[name="q21"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'div p') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-one').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check22() {
    let selectedAnswer = document.querySelector('input[name="q22"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'text-decoration: none;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-two').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check23() {
    let selectedAnswer = document.querySelector('input[name="q23"]:checked');
        if (selectedAnswer && selectedAnswer.value === '<input type="checkbox">') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-three').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check24() {
    let selectedAnswer = document.querySelector('input[name="q24"]:checked');
    if (selectedAnswer && selectedAnswer.value === '<video>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-four').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check25() {
    let selectedAnswer = document.querySelector('input[name="q25"]:checked');
    if (selectedAnswer && selectedAnswer.value === '<ol>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-five').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

function check26() {
    let selectedAnswer = document.querySelector('input[name="q26"]:checked');
    if (selectedAnswer && selectedAnswer.value === '<section>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-six').disabled = true;
    } else {
        alert('Incorrect.');
    }
}
function check27() {
    let selectedAnswer = document.querySelector('input[name="q27"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'flex-wrap: wrap;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-seven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}
function check28() {
    let selectedAnswer = document.querySelector('input[name="q28"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'font-weight: bold;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-eight').disabled = true;
    } else {
        alert('Incorrect.');
    }
}
function check29() {
    let selectedAnswer = document.querySelector('input[name="q29"]:checked');
    if (selectedAnswer && selectedAnswer.value === '<footer>') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('twenty-nine').disabled = true;
    } else {
        alert('Incorrect.');
    }
}
function check30() {
    let selectedAnswer = document.querySelector('input[name="q30"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'box-shadow: 10px 10px 5px gray;') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        document.getElementById('thirty').disabled = true;
    } else {
        alert('Incorrect.');
    }
}



function generateHtmlCssQuiz() {
    return `
    <h1>HTML & CSS Quiz</h1>
    <p>Welcome to our HTML & CSS Quiz, a fundamental part of our web development curriculum designed to assess your knowledge and skills in HTML and CSS.

This quiz comes without the stress of grades. It's an outstanding chance to practice and show your understanding of HTML elements, attributes, structure, and semantic markup, alongside CSS selectors, properties, layouts, and responsive design principles.
<br><br> Enjoy the challenge!<br><br>

    <!-- Question 1 - What does HTML stand for? -->

    <form id="myForm1" onsubmit="check1(); return false">
        <h2>Task 1</h2>
        <p>What does HTML stand for?</p>
            </br>
            <label><input type="radio" name="q1" value="hypertext markup language"> Hypertext Markup Language </label><br>
            <label><input type="radio" name="q1" value="high technology markup language"> High Technology Markup Language</label><br>
            <label><input type="radio" name="q1" value="hypertext markdown language"> Hypertext Markdown Language
            </label><br><label><input type="radio" name="q1" value="home tool markup language"> Home Tool Markup Language</label><br>
            <button id="one" class="btn" type="submit">Submit</button>
        </form>

<!-- Question 2 - Which HTML tag is used to define an internal stylesheet? -->

      <form id="myForm2" onsubmit="check2(); return false">
        <h2>Task 2</h2>
        <p>Which HTML tag is used to define an internal stylesheet?</p>
        </br>
            <label><input type="radio" name="q2" value="style"> &lt;style&gt;</label><br>
            <label><input type="radio" name="q2" value="link"> &lt;link&gt;</label><br>
            <label><input type="radio" name="q2" value="script"> &lt;script&gt;</label><br>
            <button id="two" class="btn" type="submit">Submit</button>
        </form>
    </div>

    <!-- Question 3 - True or False: The &lt;div&gt; element is a block-level element -->

         <form id="myForm3" onsubmit="check3(); return false">
        <h2>Task 3</h2>
        <p>True or False: The &lt;div&gt; element is a block-level element.</p>
        </br>
            <label><input type="radio" name="q3" value="false"> False</label><br>
            <label><input type="radio" name="q3" value="true"> True</label><br>
            <button id="three" class="btn" type="submit">Submit</button>
        </form>
    </div>

    <!-- Question 4 - How do you add a background color for all &lt;h1&gt; elements? -->

      <form id="myForm4" onsubmit="check4(); return false">
        <h2>Task 4</h2>
        <p>How do you add a background color for all &lt;h1&gt; elements?</p>
        </br>
            <label><input type="radio" name="q4" value="h1 { background-color: red; }"> h1 { background-color: red; }</label><br>
            <label><input type="radio" name="q4" value=".h1 { background-color: red; }"> .h1 { background-color: red; }</label><br>
            <label><input type="radio" name="q4" value="h1: background-color red;"> h1: background-color red;</label><br>
            <button id="four" class="btn" type="submit">Submit</button>
        </form>
    </div>

   <!-- Question 5 - Which HTML attribute is used to define inline styles? -->

            <form id="myForm5" onsubmit="check5(); return false">
        <h2>Task 5</h2>
        <p>Which HTML attribute is used to define inline styles?</p>
        </br>
            <label><input type="radio" name="q5" value="style"> style</label><br>
            <label><input type="radio" name="q5" value="class"> class</label><br>
            <label><input type="radio" name="q5" value="id"> id</label><br>
            <button id="five" class="btn" type="submit">Submit</button>
        </form>
    </div>

<!-- Question 6 - Which CSS property controls the text size? -->

<form id="myForm6" onsubmit="check6(); return false">
    <h2>Task 6</h2>
    <p>Which CSS property controls the text size?</p>
    </br>
    <label><input type="radio" name="q6" value="text-size"> text-size</label><br>
    <label><input type="radio" name="q6" value="font-style"> font-style</label><br>
    <label><input type="radio" name="q6" value="font-size"> font-size</label><br>
    <label><input type="radio" name="q6" value="text-style"> text-style</label><br>
    <button id="six" class="btn" type="submit">Submit</button>
</form>

<!-- Question 7 - How do you display a border like this: "1px solid black"? -->

<form id="myForm7" onsubmit="check7(); return false">
    <h2>Task 7</h2>
    <p>How do you display a border like this: "1px solid black"?</p>
    </br>
    <label><input type="radio" name="q7" value="border-style: 1px black solid;"> border-style: 1px black solid;</label><br>
    <label><input type="radio" name="q7" value="border-width: 1px; border-color: black;"> border-width: 1px; border-color: black;</label><br>
    <label><input type="radio" name="q7" value="border-line: 1px black;"> border-line: 1px black;</label><br>
    <label><input type="radio" name="q7" value="border: 1px solid black;"> border: 1px solid black;</label><br>
    <button id="seven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 8 - Which property is used to change the font of an element? -->

<form id="myForm8" onsubmit="check8(); return false">
    <h2>Task 8</h2>
    <p>Which property is used to change the font of an element?</p>
    </br>
    <label><input type="radio" name="q8" value="font-family"> font-family</label><br>
    <label><input type="radio" name="q8" value="font"> font</label><br>
    <label><input type="radio" name="q8" value="text-font"> text-font</label><br>
    <label><input type="radio" name="q8" value="font-style"> font-style</label><br>
    <button id="eight" class="btn" type="submit">Submit</button>
</form>

<!-- Question 9 - How can you make a list that lists its items with squares? -->

<form id="myForm9" onsubmit="check9(); return false">
    <h2>Task 9</h2>
    <p>How can you make a list that lists its items with squares?</p>
    </br>
    <label><input type="radio" name="q9" value="list: square;"> list: square;</label><br>
    <label><input type="radio" name="q9" value="list-style-type: square;"> list-style-type: square;</label><br>
    <label><input type="radio" name="q9" value="list-style: square;"> list-style: square;</label><br>
    <label><input type="radio" name="q9" value="list-type: square;"> list-type: square;</label><br>
    <button id="nine" class="btn" type="submit">Submit</button>
</form>

<!-- Question 10 - How do you group selectors? -->

<form id="myForm10" onsubmit="check10(); return false">
    <h2>Task 10</h2>
    <p>How do you group selectors?</p>
    </br>
    <label><input type="radio" name="q10" value="Use a plus (+) sign between them"> Use a plus (+) sign between them</label><br>
    <label><input type="radio" name="q10" value="Separate them with commas"> Separate them with commas</label><br>
     <label><input type="radio" name="q10" value="Separate them with spaces"> Separate them with spaces</label><br>
    <label><input type="radio" name="q10" value="Use a semicolon (;) between them"> Use a semicolon (;) between them</label><br>
    <button id="ten" class="btn" type="submit">Submit</button>
</form>

<!-- Question 11 - What is the default value of the position property? -->

<form id="myForm11" onsubmit="check11(); return false">
    <h2>Task 11</h2>
    <p>What is the default value of the position property?</p>
    </br>
    <label><input type="radio" name="q11" value="static"> static</label><br>
    <label><input type="radio" name="q11" value="relative"> relative</label><br>
    <label><input type="radio" name="q11" value="absolute"> absolute</label><br>
    <label><input type="radio" name="q11" value="fixed"> fixed</label><br>
    <button id="eleven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 12 - How do you insert a comment in a CSS file? -->

<form id="myForm12" onsubmit="check12(); return false">
    <h2>Task 12</h2>
    <p>How do you insert a comment in a CSS file?</p>
    </br>
    <label><input type="radio" name="q12" value="/* This is a comment */"> /* This is a comment */</label><br>
    <label><input type="radio" name="q12" value="<!-- This is a comment -->"> -- This is a comment -- </label><br>
    <label><input type="radio" name="q12" value="# This is a comment"> # This is a comment</label><br>
    <label><input type="radio" name="q12" value="// This is a comment"> // This is a comment</label><br>
    <button id="twelve" class="btn" type="submit">Submit</button>
</form>

<!-- Question 13 - Which property is used to change the left margin of an element? -->

<form id="myForm13" onsubmit="check13(); return false">
    <h2>Task 13</h2>
    <p>Which property is used to change the left margin of an element?</p>
    </br>
    <label><input type="radio" name="q13" value="padding-left"> padding-left</label><br>
    <label><input type="radio" name="q13" value="margin-left"> margin-left</label><br>
    <label><input type="radio" name="q13" value="left-margin"> left-margin</label><br>
    <label><input type="radio" name="q13" value="margin-left-side"> margin-left-side</label><br>
    <button id="thirteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 14 - What does CSS stand for? -->

<form id="myForm14" onsubmit="check14(); return false">
    <h2>Task 14</h2>
    <p>What does CSS stand for?</p>
    </br>
    <label><input type="radio" name="q14" value="Computer Style Sheets"> Computer Style Sheets</label><br>
    <label><input type="radio" name="q14" value="Creative Style Sheets"> Creative Style Sheets</label><br>
    <label><input type="radio" name="q14" value="Colorful Style Sheets"> Colorful Style Sheets</label><br>
    <label><input type="radio" name="q14" value="Cascading Style Sheets"> Cascading Style Sheets</label><br>
     <button id="fourteen" class="btn" type="submit">Submit</button>
</form>


<!-- Question 15 - How do you select an element with id "demo"? -->

<form id="myForm15" onsubmit="check15(); return false">
    <h2>Task 15</h2>
    <p>How do you select an element with id "demo"?</p>
    </br>
    <label><input type="radio" name="q15" value="#demo"> #demo</label><br>
    <label><input type="radio" name="q15" value=".demo"> .demo</label><br>
    <label><input type="radio" name="q15" value="*demo"> *demo</label><br>
    <label><input type="radio" name="q15" value="demo"> demo</label><br>
    <button id="fifteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 16 - How do you make a list not display bullet points? -->

<form id="myForm16" onsubmit="check16(); return false">
    <h2>Task 16</h2>
    <p>How do you make a list not display bullet points?</p>
    </br>
    <label><input type="radio" name="q16" value="list-style: none;"> list-style: none;</label><br>
    <label><input type="radio" name="q16" value="text-decoration: none;"> text-decoration: none;</label><br>
    <label><input type="radio" name="q16" value="bullet: none;"> bullet: none;</label><br>
    <label><input type="radio" name="q16" value="style: none;"> style: none;</label><br>
    <button id="sixteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 17 - What is the purpose of the alt attribute in images? -->

<form id="myForm17" onsubmit="check17(); return false">
    <h2>Task 17</h2>
    <p>What is the purpose of the alt attribute in images?</p>
    </br>
    <label><input type="radio" name="q17" value="To style the image"> To style the image</label><br>
    <label><input type="radio" name="q17" value="To provide an alternative text for the image"> To provide an alternative text for the image</label><br>
     <label><input type="radio" name="q17" value="To add a title to the image"> To add a title to the image</label><br>
    <label><input type="radio" name="q17" value="To link the image to another webpage"> To link the image to another webpage</label><br>
    <button id="seventeen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 18 - How do you specify an HTML link that should open in a new tab/window? -->

<form id="myForm18" onsubmit="check18(); return false">
    <h2>Task 18</h2>
    <p>How do you specify an HTML link that should open in a new tab/window?</p>
    </br>
    <label><input type="radio" name="q18" value="open='_newtab'"> open='_newtab'</label><br>
    <label><input type="radio" name="q18" value="new='tab'"> new='tab'</label><br>
    <label><input type="radio" name="q18" value="link='_newtab'"> link='_newtab'</label><br>
    <label><input type="radio" name="q18" value="target='_blank'"> target='_blank'</label><br>
    <button id="eighteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 19 - How do you change the direction of flex items in a flex container? -->

<form id="myForm19" onsubmit="return false">
    <h2>Task 19</h2>
    <p>How do you change the direction of flex items in a flex container?</p>
    </br>
    <label><input type="radio" name="q19" value="flex-wrap"> flex-wrap</label><br>
    <label><input type="radio" name="q19" value="flex-direction"> flex-direction</label><br>
    <label><input type="radio" name="q19" value="justify-content"> justify-content</label><br>
    <label><input type="radio" name="q19" value="align-items"> align-items</label><br>
    <button id="nineteen" class="btn" onclick="check19()">Submit</button>
</form>

<!-- Question 20 - How do you apply a CSS style for all <a> elements with the title "example"? -->

<form id="myForm20" onsubmit="check20(); return false">
    <h2>Task 20</h2>
    <p>How do you apply a CSS style for all &lt;a&gt; elements with the title "example"?</p>
    </br>
    <label><input type="radio" name="q20" value="a.title=example"> a.title=example</label><br>
    <label><input type="radio" name="q20" value="a{'example'}"> a{'example'}</label><br>
    <label><input type="radio" name="q20" value="a[title='example']"> a[title='example']</label><br>
    <label><input type="radio" name="q20" value="a.title='example'"> a.title='example'</label><br>
    <button id="twenty" class="btn" type="submit">Submit</button>
</form>

<!-- Question 21 - How do you select all p elements inside a div element? -->

<form id="myForm21" onsubmit="check21(); return false">
    <h2>Task 21</h2>
    <p>How do you select all &lt;p&gt; elements inside a &lt;div&gt; element?</p>
    </br>
    <label><input type="radio" name="q21" value="div p"> div p</label><br>
    <label><input type="radio" name="q21" value="p div"> p div</label><br>
    <label><input type="radio" name="q21" value="div > p"> div > p</label><br>
    <label><input type="radio" name="q21" value="div + p"> div + p</label><br>
    <button id="twenty-one" class="btn" type="submit">Submit</button>
</form>

<!-- Question 22 - How do you display hyperlinks without an underline? -->

<form id="myForm22" onsubmit="check22(); return false">
    <h2>Task 22</h2>
    <p>How do you display hyperlinks without an underline?</p>
    </br>
    <label><input type="radio" name="q22" value="text-decoration: none;"> text-decoration: none;</label><br>
    <label><input type="radio" name="q22" value="hyperlink-decoration: none;"> hyperlink-decoration: none;</label><br>
    <label><input type="radio" name="q22" value="text-style: no-underline;"> text-style: no-underline;</label><br>
    <label><input type="radio" name="q22" value="no-underline"> no-underline</label><br>
    <button id="twenty-two" class="btn" type="submit">Submit</button>
</form>

<!-- Question 23 - What is the correct HTML for creating a checkbox? -->

<form id="myForm23" onsubmit="check23(); return false">
    <h2>Task 23</h2>
    <p>What is the correct HTML for creating a checkbox?</p>
    </br>
    <label><input type="radio" name="q23" value="<checkbox>"> &lt;checkbox&gt;</label><br>
    <label><input type="radio" name="q23" value="<input checkbox>"> &lt;input checkbox&gt;</label><br>
    <label><input type="radio" name="q23" value="<checkbox input='true'>"> &lt;checkbox input='true'&gt;</label><br>
    <label><input type="radio" name="q23" value="<input type="checkbox">"> &lt;input type='checkbox'&gt;</label><br>
    <button id="twenty-three" class="btn" type="submit">Submit</button>
</form>

<!-- Question 24 - What is the correct HTML element for playing video files? -->

<form id="myForm24" onsubmit="check24(); return false">
    <h2>Task 24</h2>
    <p>What is the correct HTML element for playing video files?</p>
    </br>
    <label><input type="radio" name="q24" value="<media>"> &lt;media&gt;</label><br>
    <label><input type="radio" name="q24" value="<video>"> &lt;video&gt;</label><br>
    <label><input type="radio" name="q24" value="<movie>"> &lt;movie&gt;</label><br>
    <label><input type="radio" name="q24" value="<file>"> &lt;file&gt;</label><br>
    <button id="twenty-four" class="btn" type="submit">Submit</button>
</form>

<!-- Question 25 - How can you create an ordered list? -->

<form id="myForm25" onsubmit="check25(); return false">
    <h2>Task 25</h2>
    <p>How can you create an ordered list?</p>
    </br>
    <label><input type="radio" name="q25" value="<ul>"> &lt;ul&gt;</label><br>
    <label><input type="radio" name="q25" value="<li>"> &lt;li&gt;</label><br>
    <label><input type="radio" name="q25" value="<list>"> &lt;list&gt;</label><br>
    <label><input type="radio" name="q25" value="<ol>"> &lt;ol&gt;</label><br>
    <button id="twenty-five" class="btn" type="submit">Submit</button>
</form>

<!-- Question 26 - How do you group sections of content in HTML5? -->

<form id="myForm26" onsubmit="check26(); return false">
    <h2>Task 26</h2>
    <p>How do you group sections of content in HTML5?</p>
    </br>
    <label><input type="radio" name="q26" value="<section>"> &lt;section&gt;</label><br>
    <label><input type="radio" name="q26" value="<div>"> &lt;div&gt;</label><br>
    <label><input type="radio" name="q26" value="<content>"> &lt;content&gt;</label><br>
    <label><input type="radio" name="q26" value="<group>"> &lt;group&gt;</label><br>
    <button id="twenty-six" class="btn" type="submit">Submit</button>
</form>

<!-- Question 27 - CSS Flexbox flex-wrap -->

<form id="myForm27" onsubmit="return false">
    <h2>Task 27</h2>
    <p>How do you make flex items wrap onto multiple lines if needed in a flex container?</p>
    </br>
    <label><input type="radio" name="q27" value="flex-wrap: wrap;"> flex-wrap: wrap;</label><br>
    <label><input type="radio" name="q27" value="flex: wrap;"> flex: wrap;</label><br>
    <label><input type="radio" name="q27" value="wrap: true;"> wrap: true;</label><br>
    <label><input type="radio" name="q27" value="line-wrap: flex;"> line-wrap: flex;</label><br>
    <button id="twenty-seven" class="btn" onclick="check27()">Submit</button>
</form>

<!-- Question 28 - How do you make the text bold in CSS? -->

<form id="myForm28" onsubmit="check28(); return false">
    <h2>Task 28</h2>
    <p>How do you make the text bold in CSS?</p>
    </br>
    <label><input type="radio" name="q28" value="text-bold: true;"> text-bold: true;</label><br>
    <label><input type="radio" name="q28" value="bold: true;"> bold: true;</label><br>
    <label><input type="radio" name="q28" value="font-weight: bold;"> font-weight: bold;</label><br>
    <label><input type="radio" name="q28" value="font-style: bold;"> font-style: bold;</label><br>
    <button id="twenty-eight" class="btn" type="submit">Submit</button>
</form>

<!-- Question 29 - What HTML5 element is used for specifying a footer for a document or section? -->

<form id="myForm29" onsubmit="check29(); return false">
    <h2>Task 29</h2>
    <p>What HTML5 element is used for specifying a footer for a document or section?</p>
    </br>
    <label><input type="radio" name="q29" value="<bottom>"> &lt;bottom&gt;</label><br>
    <label><input type="radio" name="q29" value="<section>"> &lt;section&gt;</label><br>
    <label><input type="radio" name="q29" value="<div>"> &lt;div&gt;</label><br>
    <label><input type="radio" name="q29" value="<footer>"> &lt;footer&gt;</label><br>
    <button id="twenty-nine" class="btn" type="submit">Submit</button>
</form>

<!-- Question 30 - How do you add a shadow to elements in CSS? -->

<form id="myForm30" onsubmit="check30(); return false">
    <h2>Task 30</h2>
    <p>How do you add a shadow to elements in CSS?</p>
    </br>
    <label><input type="radio" name="q30" value="shadow: 10px 10px 5px gray;"> shadow: 10px 10px 5px gray;</label><br>
    <label><input type="radio" name="q30" value="box-shadow: 10px 10px 5px gray;"> box-shadow: 10px 10px 5px gray;</label><br>
    <label><input type="radio" name="q30" value="element-shadow: 10px 10px 5px gray;"> element-shadow: 10px 10px 5px gray;</label><br>
    <label><input type="radio" name="q30" value="style-shadow: 10px 10px 5px gray;"> style-shadow: 10px 10px 5px gray;</label><br>
    <button id="thirty" class="btn" type="submit">Submit</button>
</form>
  
<button class="submit" onclick="submitScore()">Submit </button>`;
}
 
// JavaScript quiz///
function generateJavaScriptQuiz() {
    return `
    <h1>JavaScript Quiz</h1>
    <p>Welcome to our JavaScript Quiz, a key feature of our programming curriculum designed to assess your knowledge and skills in JavaScript.<br><br> There's no pressure, as this quiz isn't graded. It's an excellent opportunity to practice and demonstrate your grasp of JavaScript basics, including variables, functions, loops, and ES6 features, as well as your ability to manipulate the DOM and handle events.
    <br><br> Enjoy the challenge!</p>
<br><br>


<!-- Question 1 - JavaScript in HTML -->

<form id="myForm1" onsubmit="checkj1(); return false">
    <h2>Task 1</h2>
    <p>Inside which HTML element do we put the JavaScript?</p>
    </br>
   <label><input type="radio" name="qj1" value="a"> a) &lt;script&gt;</label><br>
    <label><input type="radio" name="qj1" value="b"> b) &lt;js&gt;</label><br>
    <label><input type="radio" name="qj1" value="c"> c) &lt;javascript&gt;</label><br>
    <label><input type="radio" name="qj1" value="d"> d) &lt;code&gt;</label><br>
    <button id="one" class="btn" type="submit">Submit</button>
</form>


<!-- Question 2 - Correct place to insert JavaScript -->

<form id="myForm2" onsubmit="checkj2(); return false">
    <h2>Task 2</h2>
    <p>Where is the correct place to insert a JavaScript?</p>
    </br>
    <label><input type="radio" name="qj2" value="a"> a) The &lt;body&gt; section</label><br>
    <label><input type="radio" name="qj2" value="b"> b) The &lt;head&gt; section</label><br>
    <label><input type="radio" name="qj2" value="c"> c) Both a and b are correct</label><br>
    <button id="two" class="btn" type="submit">Submit</button>
</form>

<!-- Question 3 - External JavaScript file -->

<form id="myForm3" onsubmit="checkj3(); return false">
    <h2>Task 3</h2>
    <p>How do you link to an external JavaScript file?</p>
    </br>
    <label><input type="radio" name="qj3" value="a"> a) &lt;script src="xxx.js"&gt;&lt;/script&gt;</label><br>
    <label><input type="radio" name="qj3" value="b"> b) &lt;link href="xxx.js"&gt;</label><br>
    <label><input type="radio" name="qj3" value="c"> c) &lt;script link="xxx.js"&gt;&lt;/script&gt;</label><br>
    <label><input type="radio" name="qj3" value="d"> d) None of the above</label><br>
   <button id="three" class="btn" type="submit">Submit</button>
</form>

<!-- Question 4 - Display an alert -->

<form id="myForm4" onsubmit="checkj4(); return false">
    <h2>Task 4</h2>
    <p>How do you write "Hello World" in an alert box?</p>
    </br>
    <label><input type="radio" name="qj4" value="a"> a) alertBox("Hello World");</label><br>
    <label><input type="radio" name="qj4" value="b"> b) msgBox("Hello World");</label><br>
    <label><input type="radio" name="qj4" value="c"> c) alert("Hello World");</label><br>
    <label><input type="radio" name="qj4" value="d"> d) msg("Hello World");</label><br>
   <button id="four" class="btn" type="submit">Submit</button>
</form>

<!-- Question 5 - Create a function -->

<form id="myForm5" onsubmit="checkj5(); return false">
    <h2>Task 5</h2>
    <p>How do you create a function in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj5" value="a"> a) function:myFunction()</label><br>
   <label> <input type="radio" name="qj5" value="b"> b) function myFunction()</label><br>
    <label><input type="radio" name="qj5" value="c"> c) createFunction myFunction()</label><br>
    <label><input type="radio" name="qj5" value="d"> d) def myFunction()</label><br>
    <button id="five" class="btn" type="submit">Submit</button>
</form>

<!-- Question 6 - Call a function -->

<form id="myForm6" onsubmit="checkj6(); return false">
    <h2>Task 6</h2>
    <p>How do you call a function named "myFunction"?</p>
    </br>
    <label><input type="radio" name="qj6" value="a"> a) call myFunction()</label><br>
    <label><input type="radio" name="qj6" value="b"> b) call function myFunction()</label><br>
    <label><input type="radio" name="qj6" value="c"> c) myFunction()</label><br>
    <label><input type="radio" name="qj6" value="d"> d) execute myFunction()</label><br>
   <button id="six" class="btn" type="submit">Submit</button>
</form>

<!-- Question 7 - External script tag -->

<form id="myForm7" onsubmit="checkj7(); return false">
    <h2>Task 7</h2>
    <p>What is the correct syntax for referring to an external script called "xxx.js"?</p>
    </br>
    <label><input type="radio" name="qj7" value="a"> a) &lt;script src="xxx.js"&gt;</label><br>
   <label> <input type="radio" name="qj7" value="b"> b) &lt;script href="xxx.js"&gt;</label><br>
    <label><input type="radio" name="qj7" value="c"> c) &lt;script name="xxx.js"&gt;</label><br>
    <label><input type="radio" name="qj7" value="d"> d) &lt;link src="xxx.js"&gt;</label><br>
  <button id="seven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 8 - Comment in JavaScript -->

<form id="myForm8" onsubmit="checkj8(); return false">
    <h2>Task 8</h2>
    <p>How do you write a comment in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj8" value="a"> a) &lt;!-- comment --&gt;</label><br>
    <label><input type="radio" name="qj8" value="b"> b) // comment</label><br>
    <label><input type="radio" name="qj8" value="c"> c) /* comment */</label><br>
   <label> <input type="radio" name="qj8" value="d"> d) ## comment</label><br>
   <button id="eight" class="btn" type="submit">Submit</button>
</form>

<!-- Question 9 - JavaScript variable -->

<form id="myForm9" onsubmit="checkj9(); return false">
    <h2>Task 9</h2>
    <p>How do you declare a JavaScript variable?</p>
    </br>
    <label><input type="radio" name="qj9" value="a"> a) var myVar;</label><br>
    <label><input type="radio" name="qj9" value="b"> b) variable myVar;</label><br>
    <label><input type="radio" name="qj9" value="c"> c) declare myVar;</label><br>
    <label><input type="radio" name="qj9" value="d"> d) set myVar;</label><br>
    <button id="nine" class="btn" type="submit">Submit</button>
</form>

<!-- Question 10 - JavaScript strings -->

<form id="myForm10" onsubmit="checkj10(); return false">
    <h2>Task 10</h2>
    <p>Which of the following is the correct way to write a string in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj10" value="a"> a) "Hello World"</label><br>
    <label><input type="radio" name="qj10" value="b"> b) 'Hello World'</label><br>
    <label><input type="radio" name="qj10" value="c"> c) Both a and b</label><br>
    <label><input type="radio" name="qj10" value="d"> d) Neither a nor b</label><br>
    <button id="ten" class="btn" type="submit">Submit</button>
</form>

<!-- Question 11 - Array in JavaScript -->

<form id="myForm11" onsubmit="checkj11(); return false">
    <h2>Task 11</h2>
    <p>How do you create an array in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj11" value="a"> a) var arr = "1, 2, 3";</label><br>
    <label><input type="radio" name="qj11" value="b"> b) var arr = [1, 2, 3];</label><br>
    <label><input type="radio" name="qj11" value="c"> c) var arr = (1, 2, 3);</label><br>
    <label><input type="radio" name="qj11" value="d"> d) var arr = {1, 2, 3};</label><br>
    <button id="eleven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 12 - JavaScript object -->

<form id="myForm12" onsubmit="checkj12(); return false">
    <h2>Task 12</h2>
    <p>How do you create an object in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj12" value="a"> a) var obj = {}; </label><br>
    <label><input type="radio" name="qj12" value="b"> b) var obj = (); </label><br>
    <label><input type="radio" name="qj12" value="c"> c) var obj = []; </label><br>
    <label><input type="radio" name="qj12" value="d"> d) var obj = new Object(); </label><br>
    <button id="twelve" class="btn" type="submit">Submit</button>
</form>

<!-- Question 13 - JavaScript switch statement -->

<form id="myForm13" onsubmit="checkj13(); return false">
    <h2>Task 13</h2>
    <p>How do you write a switch statement in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj13" value="a"> a) switch (x) { case 1: break; }</label><br>
    <label><input type="radio" name="qj13" value="b"> b) switch x { case 1: break; }</label><br>
   <label> <input type="radio" name="qj13" value="c"> c) switch (x) { case 1; break;}</label><br>
   <label> <input type="radio" name="qj13" value="d"> d) case (x) { 1: break;}</label><br>
    <button id="thirteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 14 - JavaScript while loop -->

<form id="myForm14" onsubmit="checkj14(); return false">
    <h2>Task 14</h2>
    <p>How do you write a while loop in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj14" value="a"> a) while (x &lt; 5) { console.log(x); x++; }</label><br>
    <label><input type="radio" name="qj14" value="b"> b) while (x = 5) { console.log(x); x++; }</label><br>
   <label> <input type="radio" name="qj14" value="c"> c) while x &lt; 5 { console.log(x); x++; }</label><br>
    <label><input type="radio" name="qj14" value="d"> d) None of the above</label><br>
    <button id="fourteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 15 - JavaScript for loop -->

<form id="myForm15" onsubmit="checkj15(); return false">
    <h2>Task 15</h2>
    <p>How do you write a for loop in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj15" value="a"> a) for (i = 0; i &lt; 5; i++) { console.log(i); }</label><br>
    <label><input type="radio" name="qj15" value="b"> b) for i = 0 to 5 { console.log(i); }</label><br>
   <label> <input type="radio" name="qj15" value="c"> c) for (i = 0; i == 5; i++) { console.log(i); }</label><br>
   <label> <input type="radio" name="qj15" value="d"> d) for (i = 0; i &lt; 5; i--) { console.log(i); }</label><br>
    <button id="fifteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 16 - JavaScript break -->

<form id="myForm16" onsubmit="checkj16(); return false">
    <h2>Task 16</h2>
    <p>How do you stop a loop in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj16" value="a"> a) break</label><br>
   <label> <input type="radio" name="qj16" value="b"> b) exit</label><br>
   <label> <input type="radio" name="qj16" value="c"> c) stop</label><br>
   <label> <input type="radio" name="qj16" value="d"> d) end</label><br>
    <button id="sixteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 17 - JavaScript continue -->

<form id="myForm17" onsubmit="checkj17(); return false">
    <h2>Task 17</h2>
    <p>How do you skip an iteration in a loop in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj17" value="a"> a) continue</label><br>
   <label> <input type="radio" name="qj17" value="b"> b) skip</label><br>
    <label><input type="radio" name="qj17" value="c"> c) next</label><br>
    <label><input type="radio" name="qj17" value="d"> d) None of the above</label><br>
    <button id="seventeen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 18 - JavaScript typeof operator -->

<form id="myForm18" onsubmit="checkj18(); return false">
    <h2>Task 18</h2>
    <p>What is the result of using the typeof operator?</p>
    </br>
   <label> <input type="radio" name="qj18" value="a"> a) It returns the type of a variable.</label><br>
   <label> <input type="radio" name="qj18" value="b"> b) It returns the value of a variable.</label><br>
    <label><input type="radio" name="qj18" value="c"> c) It returns the length of a variable.</label><br>
    <label><input type="radio" name="qj18" value="d"> d) None of the above</label><br>
    <button id="eighteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 19 - JavaScript NaN -->

<form id="myForm19" onsubmit="checkj19(); return false">
    <h2>Task 19</h2>
    <p>What does NaN stand for in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj19" value="a"> a) Not a Number</label><br>
    <label><input type="radio" name="qj19" value="b"> b) Null and Nothing</label><br>
    <label><input type="radio" name="qj19" value="c"> c) Non-available Number</label><br>
    <label><input type="radio" name="qj19" value="d"> d) New Arithmetic Number</label><br>
    <button id="nineteen" class="btn" type="submit">Submit</button>
</form>

<!-- Question 20 - JavaScript Infinity -->

<form id="myForm20" onsubmit="checkj20(); return false">
    <h2>Task 20</h2>
    <p>What is the value of Infinity in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj20" value="a"> a) It is a number.</label><br>
   <label> <input type="radio" name="qj20" value="b"> b) It is a string.</label><br>
    <label><input type="radio" name="qj20" value="c"> c) It is a special object.</label><br>
    <label><input type="radio" name="qj20" value="d"> d) None of the above.</label><br>
    <button id="twenty" class="btn" type="submit">Submit</button>
</form>

<!-- Question 21 - JavaScript Boolean -->

<form id="myForm21" onsubmit="checkj21(); return false">
    <h2>Task 21</h2>
    <p>Which of the following values is considered a Boolean in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj21" value="a"> a) true</label><br>
    <label><input type="radio" name="qj21" value="b"> b) false</label><br>
    <label><input type="radio" name="qj21" value="c"> c) Both a and b</label><br>
    <label><input type="radio" name="qj21" value="d"> d) Neither a nor b</label><br>
    <button id="twenty-one" class="btn" type="submit">Submit</button>
</form>

<!-- Question 22 - JavaScript null -->

<form id="myForm22" onsubmit="checkj22(); return false">
    <h2>Task 22</h2>
    <p>What does null represent in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj22" value="a"> a) An empty string</label><br>
   <label> <input type="radio" name="qj22" value="b"> b) An empty object</label><br>
    <label><input type="radio" name="qj22" value="c"> c) A non-existent or invalid object</label><br>
    <label><input type="radio" name="qj22" value="d"> d) An undefined value</label><br>
    <button id="twenty-two" class="btn" type="submit">Submit</button>
</form>

<!-- Question 23 - Promises -->

<form id="myForm23" onsubmit="checkj23(); return false">
    <h2>Task 23</h2>
    <p>Which object is used for asynchronous computations in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj23" value="a"> a) Promise</label><br>
   <label> <input type="radio" name="qj23" value="b"> b) Async</label><br>
   <label> <input type="radio" name="qj23" value="c"> c) Future</label><br>
    <label><input type="radio" name="qj23" value="d"> d) Callback</label><br>
    <button id="twenty-three" class="btn" type="submit">Submit</button>
</form>

<!-- Question 24 - Fetch API -->

<form id="myForm24" onsubmit="checkj24(); return false">
    <h2>Task 24</h2>
    <p>What keyword helps you to get data from a URL using JavaScript?</p>
    </br>
    <label><input type="radio" name="qj24" value="a"> a) fetch()</label><br>
    <label><input type="radio" name="qj24" value="b"> b) get()</label><br>
   <label> <input type="radio" name="qj24" value="c"> c) load()</label><br>
   <label> <input type="radio" name="qj24" value="d"> d) request()</label><br>
    <button id="twenty-four" class="btn" type="submit">Submit</button>
</form>

<!-- Question 25 - Local Storage -->

<form id="myForm25" onsubmit="checkj25(); return false">
    <h2>Task 25</h2>
    <p>How do you store a value in the browser's localStorage in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj25" value="a"> a) localStorage.setItem('key', value);</label><br>
   <label> <input type="radio" name="qj25" value="b"> b) localStorage.save('key', value);</label><br>
    <label><input type="radio" name="qj25" value="c"> c) localStorage.store('key', value);</label><br>
   <label> <input type="radio" name="qj25" value="d"> d) localStorage.add('key', value);</label><br>
    <button id="twenty-five" class="btn" type="submit">Submit</button>
</form>

<!-- Question 26 - Object in JavaScript -->

<form id="myForm26" onsubmit="checkj26(); return false">
    <h2>Task 26</h2>
    <p>What is the correct syntax to create an object in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj26" value="a"> a) var obj = {}; </label><br>
  <label>  <input type="radio" name="qj26" value="b"> b) var obj = []; </label><br>
   <label> <input type="radio" name="qj26" value="c"> c) var obj = (); </label><br>
    <label><input type="radio" name="qj26" value="d"> d) var obj = <>; </label><br>
    <button id="twenty-six" class="btn" type="submit">Submit</button>
</form>

<!-- Question 27 - JSON Parse -->

<form id="myForm27" onsubmit="checkj27(); return false">
    <h2>Task 27</h2>
    <p>Which method is used to parse a JSON string into a JavaScript object?</p>
    </br>
   <label> <input type="radio" name="qj27" value="a"> a) JSON.parse()</label><br>
   <label> <input type="radio" name="qj27" value="b"> b) JSON.stringify()</label><br>
   <label> <input type="radio" name="qj27" value="c"> c) JSON.object()</label><br>
   <label> <input type="radio" name="qj27" value="d"> d) JSON.convert()</label><br>
    <button id="twenty-seven" class="btn" type="submit">Submit</button>
</form>

<!-- Question 28 - JSON Stringify -->

<form id="myForm28" onsubmit="checkj28(); return false">
    <h2>Task 28</h2>
    <p>Which method is used to convert a JavaScript object into a JSON string?</p>
    </br>
   <label> <input type="radio" name="qj28" value="a"> a) JSON.stringify()</label><br>
   <label> <input type="radio" name="qj28" value="b"> b) JSON.parse()</label><br>
   <label> <input type="radio" name="qj28" value="c"> c) JSON.object()</label><br>
   <label> <input type="radio" name="qj28" value="d"> d) JSON.convert()</label><br>
    <button id="twenty-eight" class="btn" type="submit">Submit</button>
</form>

<!-- Question 29 - String length -->

<form id="myForm29" onsubmit="checkj29(); return false">
    <h2>Task 29</h2>
    <p>Which property returns the length of a string in JavaScript?</p>
    </br>
    <label><input type="radio" name="qj29" value="a"> a) string.length</label><br>
    <label><input type="radio" name="qj29" value="b"> b) string.size</label><br>
   <label> <input type="radio" name="qj29" value="c"> c) string.length()</label><br>
    <label><input type="radio" name="qj29" value="d"> d) string.count</label><br>
    <button id="twenty-nine" class="btn" type="submit">Submit</button>
</form>

<!-- Question 30 - Convert string to uppercase -->

<form id="myForm30" onsubmit="checkj30(); return false">
    <h2>Task 30</h2>
    <p>Which method is used to convert a string to uppercase in JavaScript?</p>
    </br>
   <label> <input type="radio" name="qj30" value="a"> a) string.toUpperCase()</label><br>
   <label> <input type="radio" name="qj30" value="b"> b) string.toUpper()</label><br>
   <label> <input type="radio" name="qj30" value="c"> c) string.upper()</label><br>
   <label> <input type="radio" name="qj30" value="d"> d) string.upperCase()</label><br>
    <button id="thirty" class="btn" type="submit">Submit</button>
</form>

        <button class="submit" onclick="submitScore()">Submit </button>
    `;
}




function checkj1() {
    let selectedAnswer = document.querySelector('input[name="qj1"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('one').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 2
function checkj2() {
    let selectedAnswer = document.querySelector('input[name="qj2"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('two').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 3
function checkj3() {
    let selectedAnswer = document.querySelector('input[name="qj3"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') { 
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('three').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 4
function checkj4() {
    let selectedAnswer = document.querySelector('input[name="qj4"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') { 
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('four').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 5
function checkj5() {
    let selectedAnswer = document.querySelector('input[name="qj5"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('five').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 6
function checkj6() {
    let selectedAnswer = document.querySelector('input[name="qj6"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') { // Correct answer is 'a'
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('six').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 7
function checkj7() {
    let selectedAnswer = document.querySelector('input[name="qj7"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('seven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 8
function checkj8() {
    let selectedAnswer = document.querySelector('input[name="qj8"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('eight').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 9
function checkj9() {
    let selectedAnswer = document.querySelector('input[name="qj9"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('nine').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 10
function checkj10() {
    let selectedAnswer = document.querySelector('input[name="qj10"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') { 
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('ten').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 11
function checkj11() {
    let selectedAnswer = document.querySelector('input[name="qj11"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('eleven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 12
function checkj12() {
    let selectedAnswer = document.querySelector('input[name="qj12"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twelve').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 13
function checkj13() {
    let selectedAnswer = document.querySelector('input[name="qj13"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('thirteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 14
function checkj14() {
    let selectedAnswer = document.querySelector('input[name="qj14"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('fourteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 15
function checkj15() {
    let selectedAnswer = document.querySelector('input[name="qj15"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('fifteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 16
function checkj16() {
    let selectedAnswer = document.querySelector('input[name="qj16"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('sixteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 17
function checkj17() {
    let selectedAnswer = document.querySelector('input[name="qj17"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('seventeen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 18
function checkj18() {
    let selectedAnswer = document.querySelector('input[name="qj18"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('eighteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 19
function checkj19() {
    let selectedAnswer = document.querySelector('input[name="qj19"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('nineteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 20
function checkj20() {
    let selectedAnswer = document.querySelector('input[name="qj20"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 21
function checkj21() {
    let selectedAnswer = document.querySelector('input[name="qj21"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-one').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 22
function checkj22() {
    let selectedAnswer = document.querySelector('input[name="qj22"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-two').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 23
function checkj23() {
    let selectedAnswer = document.querySelector('input[name="qj23"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-three').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 24
function checkj24() {
    let selectedAnswer = document.querySelector('input[name="qj24"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-four').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 25
function checkj25() {
    let selectedAnswer = document.querySelector('input[name="qj25"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-five').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 26
function checkj26() {
    let selectedAnswer = document.querySelector('input[name="qj26"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-six').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 27
function checkj27() {
    let selectedAnswer = document.querySelector('input[name="qj27"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') { 
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-seven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 28
function checkj28() {
    let selectedAnswer = document.querySelector('input[name="qj28"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-eight').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 29
function checkj29() {
    let selectedAnswer = document.querySelector('input[name="qj29"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') { 
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-nine').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 30
function checkj30() {
    let selectedAnswer = document.querySelector('input[name="qj30"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('thirty').disabled = true;
    } else {
        alert('Incorrect.');
    }
}



//Python quiz//

function generatePythonQuiz(){
    return `
       <h1>Python Quiz</h1>
        <p>Welcome to Python Quiz.<br><br>
        Try not to panic though. This isn't a marked piece of work, its just helping you to test your skills with not only Python and its syntax, but with industry specific names.<br><br>
        Enter your answer to each task and then press submit to get your score!<br><br>
        Have fun!</p>
        <br><br>

    <!-- =====================QUESTION 1================================================== -->
<form id="myForm" onsubmit="checkp1(event); return false">
    <h2>Task 1</h2> 
    <p>How would you make the terminal say Hello World?</p>
    </br>
    <label><input type="radio" name="qp1" value="a"> print('Hello World')</label><br>
    <label><input type="radio" name="qp1" value="b"> echo 'Hello World'</label><br>
    <label><input type="radio" name="qp1" value="c"> console.log('Hello World')</label><br>
    <label><input type="radio" name="qp1" value="d"> document.write('Hello World')</label><br>
    <button id="one" class="btn">Submit</button>
</form>

<!-- ======================QUESTION 2================================================= -->
<form id="myForm2" onsubmit="checkp2(); return false">
    <h2>Task 2</h2> 
    <p>Create a variable called carname and give it a value of Volvo</p>
    </br>
    <label><input type="radio" name="qp2" value="a"> carname = 'Volvo'</label><br>
    <label><input type="radio" name="qp2" value="b"> carName = 'Volvo'</label><br>
    <label><input type="radio" name="qp2" value="c"> Carname = 'Volvo'</label><br>
    <label><input type="radio" name="qp2" value="d"> car-name = 'Volvo'</label><br>
    <button id="two" class="btn" type="submit">Submit</button>
</form>

<!-- ========================QUESTION 3=============================================== -->  
<form id="myForm3" onsubmit="checkp3(); return false">
    <h2>Task 3</h2> 
    <p>Create a variable named i and assign it a value of 50</p>
    </br>
    <label><input type="radio" name="qp3" value="a"> i = 50</label><br>
    <label><input type="radio" name="qp3" value="b"> i = 40</label><br>
    <label><input type="radio" name="qp3" value="c"> int i = 50</label><br>
    <label><input type="radio" name="qp3" value="d"> var i = 50</label><br>
    <button id="three" class="btn" type="submit">Submit</button>
</form>

<!-- =========================QUESTION 4==============================================  -->  
<form id="myForm4" onsubmit="checkp4(); return false">
    <h2>Task 4</h2> 
    <p>Fix this variable so it is best practice</p>
    </br>
    <code>2my-1st_name = "john"</code>
    <label><input type="radio" name="qp4" value="a"> my_1st_name = 'john'</label><br>
    <label><input type="radio" name="qp4" value="b"> first_name = 'john'</label><br>
    <label><input type="radio" name="qp4" value="c"> myFirstName = 'john'</label><br>
    <label><input type="radio" name="qp4" value="d"> 2myFirst_name = 'john'</label><br>
    <button id="four" class="btn" type="submit">Submit</button>
</form>

<!-- =========================QUESTION 5==============================================  -->  
<form id="myForm5" onsubmit="checkp5(); return false">
    <h2>Task 5</h2> 
    <p>How would we print this string in all capitals?</p>
    </br>
    <code>"i live in england"</code>
    <label><input type="radio" name="qp5" value="a"> string.upper()</label><br>
    <label><input type="radio" name="qp5" value="b"> print('i live in england'.upper())</label><br>
    <label><input type="radio" name="qp5" value="c"> i live in england.upper()</label><br>
    <label><input type="radio" name="qp5" value="d"> upper('i live in england')</label><br>
    <button id="five" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 6=============================================== -->
<form id="myForm6" onsubmit="checkp6(); return false">
    <h2>Task 6</h2> 
    <p>What is the result of the following code?</p>
    </br>
    <code>
        x = 3<br>
        y = 2<br>
        print(x ** y)
    </code>
    <label><input type="radio" name="qp6" value="a"> 9</label><br>
    <label><input type="radio" name="qp6" value="b"> 5</label><br>
    <label><input type="radio" name="qp6" value="c"> 6</label><br>
    <label><input type="radio" name="qp6" value="d"> 7</label><br>
    <button id="six" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 7=============================================== --> 
<form id="myForm7" onsubmit="checkp7(); return false">
    <h2>Task 7</h2> 
    <p>What does the 'len()' function do?</p>
    </br>
    <label><input type="radio" name="qp7" value="a"> It returns the length of a string or list.</label><br>
    <label><input type="radio" name="qp7" value="b"> It returns the sum of a list.</label><br>
    <label><input type="radio" name="qp7" value="c"> It counts the occurrences of a value.</label><br>
    <label><input type="radio" name="qp7" value="d"> It removes an element from a list.</label><br>
    <button id="seven" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 8=============================================== -->
<form id="myForm8" onsubmit="checkp8(); return false">
    <h2>Task 8</h2> 
    <p>How would you add an item to the end of a list?</p>
    </br>
    <label><input type="radio" name="qp8" value="a"> list.append(item)</label><br>
    <label><input type="radio" name="qp8" value="b"> list.add(item)</label><br>
    <label><input type="radio" name="qp8" value="c"> list.insert(item)</label><br>
    <label><input type="radio" name="qp8" value="d"> list.insertLast(item)</label><br>
    <button id="eight" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 9=============================================== -->
<form id="myForm9" onsubmit="checkp9(); return false">
    <h2>Task 9</h2> 
    <p>Which operator is used for exponentiation in Python?</p>
    </br>
    <label><input type="radio" name="qp9" value="a"> **</label><br>
    <label><input type="radio" name="qp9" value="b"> ^</label><br>
    <label><input type="radio" name="qp9" value="c"> *</label><br>
    <label><input type="radio" name="qp9" value="d"> //</label><br>
    <button id="nine" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 10=============================================== -->
<form id="myForm10" onsubmit="checkp10(); return false">
    <h2>Task 10</h2> 
    <p>How would you write a while loop in Python?</p>
    </br>
    <label><input type="radio" name="qp10" value="a"> while condition:</label><br>
    <label><input type="radio" name="qp10" value="b"> while true:</label><br>
    <label><input type="radio" name="qp10" value="c"> while condition do:</label><br>
    <label><input type="radio" name="qp10" value="d"> while: condition</label><br>
    <button id="ten" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 11=============================================== --> 
<form id="myForm11" onsubmit="checkp11(); return false">
    <h2>Task 11</h2> 
    <p>What would you use to remove an item from a list?</p>
    </br>
    <label><input type="radio" name="qp11" value="a"> list.remove(item)</label><br>
    <label><input type="radio" name="qp11" value="b"> list.delete(item)</label><br>
    <label><input type="radio" name="qp11" value="c"> list.pop(item)</label><br>
    <label> <input type="radio" name="qp11" value="d"> list.removeAt(item)</label><br>
    <button id="eleven" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 12=============================================== -->
<form id="myForm12" onsubmit="checkp12(); return false">
    <h2>Task 12</h2> 
    <p>How can you check if a key exists in a dictionary?</p>
    </br>
    <label><input type="radio" name="qp12" value="a"> key in dictionary </label><br>
    <label><input type="radio" name="qp12" value="b"> key.exists(dictionary)</label><br>
    <label> <input type="radio" name="qp12" value="c"> dictionary.has(key)</label><br>
    <label><input type="radio" name="qp12" value="d"> key in dict</label><br>
    <button id="twelve" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 13=============================================== -->
<form id="myForm13" onsubmit="checkp13(); return false">
    <h2>Task 13</h2> 
    <p>Which keyword is used to exit a loop?</p>
    </br>
    <label><input type="radio" name="qp13" value="a"> break </label><br>
    <label><input type="radio" name="qp13" value="b"> continue</label><br>
    <label><input type="radio" name="qp13" value="c"> exit</label><br>
    <label><input type="radio" name="qp13" value="d"> stop</label><br>
    <button id="thirteen" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 14=============================================== -->
<form id="myForm14" onsubmit="checkp14(); return false">
    <h2>Task 14</h2> 
    <p>What is the purpose of the 'else' statement in Python?</p>
    </br>
    <label><input type="radio" name="qp14" value="a"> It specifies a block of code that executes if the condition is false.</label><br>
    <label><input type="radio" name="qp14" value="b"> It specifies a block of code that executes if the condition is true.</label><br>
    <label><input type="radio" name="qp14" value="c"> It specifies a block of code that executes only if the loop runs.</label><br>
    <label><input type="radio" name="qp14" value="d"> It exits the loop.</label><br>
    <button id="fourteen" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 15=============================================== -->
<form id="myForm15" onsubmit="checkp15(); return false">
    <h2>Task 15</h2> 
    <p>What is the purpose of the 'return' keyword?</p>
    </br>
    <label><input type="radio" name="qp15" value="a"> It exits the function and optionally returns a value.</label><br>
    <label><input type="radio" name="qp15" value="b"> It defines a function.</label><br>
    <label><input type="radio" name="qp15" value="c"> It calls another function.</label><br>
    <label><input type="radio" name="qp15" value="d"> It loops through a list.</label><br>
    <button id="fifteen" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 16=============================================== -->
<form id="myForm16" onsubmit="checkp16(); return false">
    <h2>Task 16</h2> 
    <p>What would you add to the bottom of this code to order a large latte?</p>
    </br>
    <code>
        def coffee_order(size, drink_type): <br><br><br>
        print(f"Here’s your {size} {drink_type}.") <br>
    </code>
    <label><input type="radio" name="qp16" value="a"> coffee_order('large', 'latte')</label><br>
    <label><input type="radio" name="qp16" value="b"> coffee_order('small', 'espresso')</label><br>
    <label><input type="radio" name="qp16" value="c"> coffee_order('medium', 'latte')</label><br>
    <label><input type="radio" name="qp16" value="d"> coffee_order('large', 'americano')</label><br>
    <button id="sixteen" class="btn" type="submit">Submit</button>
</form>

    <!-- =======================QUESTION 17=============================================== -->
<form id="myForm17" onsubmit="checkp17(); return false">
    <h2>Task 17</h2> 
    <p>This function isn't working, everything seems to be there but I'm getting this error</p>
    </br>
    <p class="error">Traceback (most recent call last): File "/Users/Desktop/CodeNation/python/Exercises/tasks.py", line 23, 
        cash_machine(1234, 400) <br><br> File "/Users/Desktop/CodeNation/python/Exercises/tasks.py", line 15, in cash_machine
        if entered_pin == actual_pin and amount <= balance: <br><br> UnboundLocalError: local variable 'balance' referenced before assignment</p>
    <p>What do I need to add to make it work?</p>
    </br>
    <code>
        actual_pin = 1234 <br>
        balance = 500 <br><br>
        def cash_machine(entered_pin, amount): <br><br>
        ________________<br><br>
        if entered_pin == actual_pin and amount <= balance: <br>
        balance -= amount <br>
        print(f"Dispensing cash of £{amount}. Your new balance is £{balance}.") <br><br>
        elif entered_pin == actual_pin and amount > balance: <br>
        print(f"Insufficient funds, you cannot withdraw £{amount}. You only have £{balance} in your account.") <br>
        else: <br>
        print("Incorrect PIN") <br><br><br>
        cash_machine(1234, 400) <br>
    </code>
    </br>
    <label for="qp17a"><input type="radio" name="qp17" value="a"> Add balance=500</label><br>
    <label for="qp17b"><input type="radio" name="qp17" value="b"> Add balance=1000</label><br>
    <label for="qp17c"><input type="radio" name="qp17" value="c"> Add global balance=500</label><br>
    <label for="qp17d"><input type="radio" name="qp17" value="d"> Add local balance=500</label><br>
    <button id="seventeen" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 18=============================================== -->
<form id="myForm18" onsubmit="checkp18(); return false">
    <h2>Task 18</h2> 
    <p>Rewrite this line of code so it works</p>
    </br>
    <code>
        fav_films == "Ghostbusters" 'Deadpool" "Titanic"]
    </code>
    </br>
    <label for="qp18a"><input type="radio" name="qp18" value="a"> fav_films = ['Ghostbusters', 'Deadpool', 'Titanic']</label><br>
    <label for="qp18b"><input type="radio" name="qp18" value="b"> fav_films = 'Ghostbusters', 'Deadpool', 'Titanic'</label><br>
    <label for="qp18c"><input type="radio" name="qp18" value="c"> fav_films = ['Ghostbusters', 'Deadpool', 'Titanic']</label><br>
    <label for="qp18d"><input type="radio" name="qp18" value="d"> fav_films = ['Ghostbusters', 'Deadpool' , 'Titanic']</label><br>
    <button id="eighteen" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 19=============================================== -->
<form id="myForm19" onsubmit="checkp19(); return false">
    <h2>Task 19</h2> 
    <p>Now print the list into the terminal</p>
    </br>
    <label for="qp19a"><input type="radio" name="qp19" value="a"> print(fav_films)</label><br>
    <label for="qp19b"><input type="radio" name="qp19" value="b"> print(fav_films[])</label><br>
    <label for="qp19c"><input type="radio" name="qp19" value="c"> print(fav_films[0])</label><br>
    <label for="qp19d"><input type="radio" name="qp19" value="d"> print(fav_films[1])</label><br>
    <button id="nineteen" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 20=============================================== -->
<form id="myForm20" onsubmit="checkp20(); return false">
    <h2>Task 20</h2> 
    <p>Now print Ghostbusters into the terminal using the list</p>
    </br>
    <label for="qp20a"><input type="radio" name="qp20" value="a"> print(fav_films[0])</label><br>
    <label for="qp20b"><input type="radio" name="qp20" value="b"> print(fav_films[1])</label><br>
    <label for="qp20c"><input type="radio" name="qp20" value="c"> print(fav_films[2])</label><br>
    <label for="qp20d"><input type="radio" name="qp20" value="d"> print(fav_films[0])</label><br>
    <button id="twenty" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 21=============================================== -->
<form id="myForm21" onsubmit="checkp21(); return false">
    <h2>Task 21</h2> 
    <p>What method would you use to remove the last item from your list?</p>
    </br>
    <label for="qp21a"><input type="radio" name="qp21" value="a"> fav_films.pop()</label><br>
    <label for="qp21b"><input type="radio" name="qp21" value="b"> fav_films.remove()</label><br>
    <label for="qp21c"><input type="radio" name="qp21" value="c"> fav_films.delete()</label><br>
    <label for="qp21d"><input type="radio" name="qp21" value="d"> fav_films.add()</label><br>
    <button id="twenty-one" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 22=============================================== -->
<form id="myForm22" onsubmit="checkp22(); return false">
    <h2>Task 22</h2> 
    <p>Using a for loop, how would you write a programme that counts from 1-10?</p>
    </br>
    <label for="qp22a"><input type="radio" name="qp22" value="a"> for i in range(1, 11):</label><br>
    <label for="qp22b"><input type="radio" name="qp22" value="b"> for i in range(1, 10):</label><br>
    <label for="qp22c"><input type="radio" name="qp22" value="c"> for i in range(0, 11):</label><br>
    <label for="qp22d"><input type="radio" name="qp22" value="d"> for i in range(1, 9):</label><br>
    <button id="twenty-two" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 23=============================================== -->
<form id="myForm23" onsubmit="checkp23(); return false">
    <h2>Task 23</h2> 
    <p>Now what would you add to the code to print 1-10 in the terminal?</p>
    </br>
    <label for="qp23a"><input type="radio" name="qp23" value="a"> print(i)</label><br>
    <label for="qp23b"><input type="radio" name="qp23" value="b"> print('hello')</label><br>
    <label for="qp23c"><input type="radio" name="qp23" value="c"> print('1 to 10')</label><br>
    <label for="qp23d"><input type="radio" name="qp23" value="d"> print(f'{i}')</label><br>
    <button id="twenty-three" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 24=============================================== -->
<form id="myForm24" onsubmit="checkp24(); return false">
    <h2>Task 24</h2> 
    <p>So taking the previous code into account, how would you count to 10 in increments of 2?</p>
    </br>
    <label for="qp24a"><input type="radio" name="qp24" value="a"> for i in range(1, 11, 2):</label><br>
    <label for="qp24b"><input type="radio" name="qp24" value="b"> for i in range(0, 11, 2):</label><br>
    <label for="qp24c"><input type="radio" name="qp24" value="c"> for i in range(2, 10, 2):</label><br>
    <label for="qp24d"><input type="radio" name="qp24" value="d"> for i in range(1, 10, 3):</label><br>
    <button id="twenty-four" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 25=============================================== -->
<form id="myForm25" onsubmit="checkp25(); return false">
    <h2>Task 25</h2> 
    <p>How would you write a programme to make the numbers count backwards?</p>
    </br>
    <label for="qp25a"><input type="radio" name="qp25" value="a"> for i in range(10, 0, -1):</label><br>
    <label for="qp25b"><input type="radio" name="qp25" value="b"> for i in range(10, 1, -1):</label><br>
    <label for="qp25c"><input type="radio" name="qp25" value="c"> for i in range(9, 0, -1):</label><br>
    <label for="qp25d"><input type="radio" name="qp25" value="d"> for i in range(5, 0, -1):</label><br>
    <button id="twenty-five" class="btn" type="submit">Submit</button>
</form>

<!-- =======================QUESTION 26=============================================== -->
<form id="myForm26" onsubmit="checkp26(); return false">
    <h2>Task 26</h2> 
    <p>Which function would you use to combine two lists into one?</p>
    </br>
    <label for="qp26a"><input type="radio" name="qp26" value="a"> extend</label><br>
    <label for="qp26b"><input type="radio" name="qp26" value="b"> combine</label><br>
    <label for="qp26c"><input type="radio" name="qp26" value="c"> join</label><br>
    <label for="qp26d"><input type="radio" name="qp26" value="d"> add</label><br>
    <button id="twenty-six" class="btn" type="submit">Submit</button>
</form>

    <!-- =======================QUESTION 27=============================================== -->
    <form id="myForm27" onsubmit="checkp27(); return false">
        <h2>Task 27</h2> 
        <p>How would you access the second element in a list?</p>
        </br>
       <label><input type="radio" name="qp27" value="a"> list[1]</label><br>
       <label> <input type="radio" name="qp27" value="b"> list[2]</label><br>
       <label> <input type="radio" name="qp27" value="c"> list[3]</label><br>
        <label><input type="radio" name="qp27" value="d"> list[0]</label><br>
        <button id="twenty-seven" class="btn" type="submit">Submit</button>
    </form>

    <!-- =======================QUESTION 28=============================================== -->
    <form id="myForm28" onsubmit="checkp28(); return false">
        <h2>Task 28</h2> 
        <p>Which function removes an item from a list by value?</p>
        </br>
        <label><input type="radio" name="qp28" value="a"> list.remove(item)</label><br>
       <label> <input type="radio" name="qp28" value="b"> list.del(item)</label><br>
       <label> <input type="radio" name="qp28" value="c"> list.removeAt(item)</label><br>
       <label> <input type="radio" name="qp28" value="d"> list.pop(item)</label><br>
        <button id="twenty-eight" class="btn" type="submit">Submit</button>
    </form>

    <!-- =======================QUESTION 29=============================================== -->
    <form id="myForm29" onsubmit="checkp29(); return false">
        <h2>Task 29</h2> 
        <p>How would you sort a list alphabetically?</p>
        </br>
       <label> <input type="radio" name="qp29" value="a"> list.sort()</label><br>
       <label> <input type="radio" name="qp29" value="b"> sorted(list)</label><br>
       <label> <input type="radio" name="qp29" value="c"> list.alphabetize()</label><br>
       <label> <input type="radio" name="qp29" value="d"> list.order()</label><br>
        <button id="twenty-nine" class="btn" type="submit">Submit</button>
    </form>

    <!-- =======================QUESTION 30=============================================== -->
    <form id="myForm30" onsubmit="checkp30(); return false">
        <h2>Task 30</h2> 
        <p>Which method allows you to insert an element at a specific position in the list?</p>
        </br>
        <label><input type="radio" name="qp30" value="a"> list.insert(index, item)</label><br>
       <label> <input type="radio" name="qp30" value="b"> list.add(index, item)</label><br>
       <label> <input type="radio" name="qp30" value="c"> list.insertAt(index, item)</label><br>
       <label> <input type="radio" name="qp30" value="d"> list.append(index, item)</label><br>
        <button id="thirty" class="btn" type="submit">Submit</button>
    </form>

        <button class="submit" onclick="submitScore()">Submit </button>


    `;
}


function checkp1() {
    let selectedAnswer = document.querySelector('input[name="qp1"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('one').disabled = true;
    } else {
        alert('Incorrect.');
    }
}


// Question 2
function checkp2() { 
    let selectedAnswer = document.querySelector('input[name="qp2"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('two').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 3
function checkp3() { 
    let selectedAnswer = document.querySelector('input[name="qp3"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('three').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 4
function checkp4() { 
    let selectedAnswer = document.querySelector('input[name="qp4"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('four').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 5
function checkp5() { 
    let selectedAnswer = document.querySelector('input[name="qp5"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('five').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 6
function checkp6() { 
    let selectedAnswer = document.querySelector('input[name="qp6"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('six').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 7
function checkp7() { 
    let selectedAnswer = document.querySelector('input[name="qp7"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('seven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 8
function checkp8() { 
    let selectedAnswer = document.querySelector('input[name="qp8"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('eight').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 9
function checkp9() { 
    let selectedAnswer = document.querySelector('input[name="qp9"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('nine').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 10
function checkp10() { 
    let selectedAnswer = document.querySelector('input[name="qp10"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('ten').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 11
function checkp11() { 
    let selectedAnswer = document.querySelector('input[name="qp11"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('eleven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 12
function checkp12() { 
    let selectedAnswer = document.querySelector('input[name="qp12"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twelve').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 13
function checkp13() { 
    let selectedAnswer = document.querySelector('input[name="qp13"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('thirteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 14
function checkp14() { 
    let selectedAnswer = document.querySelector('input[name="qp14"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('fourteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 15
function checkp15() { 
    let selectedAnswer = document.querySelector('input[name="qp15"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('fifteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 16
function checkp16() { 
    let selectedAnswer = document.querySelector('input[name="qp16"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('sixteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 17
function checkp17() { 
    let selectedAnswer = document.querySelector('input[name="qp17"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('seventeen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 18
function checkp18() { 
    let selectedAnswer = document.querySelector('input[name="qp18"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('eighteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 19
function checkp19() { 
    let selectedAnswer = document.querySelector('input[name="qp19"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('nineteen').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 20
function checkp20() { 
    let selectedAnswer = document.querySelector('input[name="qp20"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 21
function checkp21() { 
    let selectedAnswer = document.querySelector('input[name="qp21"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-one').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 22
function checkp22() { 
    let selectedAnswer = document.querySelector('input[name="qp22"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-two').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 23
function checkp23() { 
    let selectedAnswer = document.querySelector('input[name="qp23"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-three').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 24
function checkp24() { 
    let selectedAnswer = document.querySelector('input[name="qp24"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-four').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 25
function checkp25() { 
    let selectedAnswer = document.querySelector('input[name="qp25"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-five').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 26
function checkp26() { 
    let selectedAnswer = document.querySelector('input[name="qp26"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-six').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 27
function checkp27() { 
    let selectedAnswer = document.querySelector('input[name="qp27"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'c') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-seven').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 28
function checkp28() { 
    let selectedAnswer = document.querySelector('input[name="qp28"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'd') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-eight').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 29
function checkp29() { 
    let selectedAnswer = document.querySelector('input[name="qp29"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'a') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('twenty-nine').disabled = true;
    } else {
        alert('Incorrect.');
    }
}

// Question 30
function checkp30() { 
    let selectedAnswer = document.querySelector('input[name="qp30"]:checked');
    if (selectedAnswer && selectedAnswer.value === 'b') {
        alert('Correct!');
        score++;
        updateScoreDisplay();
        if (!timerStarted) startTimer();
        document.getElementById('thirty').disabled = true;
    } else {
        alert('Incorrect.');
    }
}