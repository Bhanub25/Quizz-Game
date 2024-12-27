const questions=[
    {
        question:"How many Elements are there in periodic table?",
        answers:[
            {text:"128",correct:false},
            {text:"118",correct:true},
            {text:"112",correct:false},
            {text:"127",correct:false},

        ]

    },
    {
        question:"Which is heavier:ton of bricks or a ton of feathers?",
        answers:[
            {text:"A ton of Bricks",correct:false},
            {text:"A ton of feathers",correct:false},
            {text:"Both are heavier",correct:true},
            {text:"Depends on the type of bricks",correct:false},

        ]

    },{
        question:" A farmer has 17 goats. All of them but 8 die. How many goats are alive? ?",
        answers:[
            {text:"9",correct:false},
            {text:"8",correct:true},
            {text:"17",correct:false},
            {text:"16",correct:false},

        ]

    },
    {
        question:"How many types of emergencies are provided in the Indian Constitution?",
        answers:[
            {text:"2",correct:false},
            {text:"3",correct:true},
            {text:"7",correct:false},
            {text:"5",correct:false},

        ]

    },
    {
        question:"What does it mean if someone says they have been Ghosted?",
        answers:[
            {text:" They got scared",correct:false},
            {text:"They lost internet connection",correct:false},
            {text:"They've lost their keys",correct:false},
            {text:"They've been ignored or avoided",correct:true},

        ]

    },
    {
        question:"How many taste buds does an average human have?",
        answers:[
            {text:"10,000",correct:true},
            {text:"infinity",correct:false},
            {text:"50+",correct:false},
            {text:"200",correct:false},

        ]

    },
    {
        question:"which is the smallest continent in the world?",
        answers:[
            {text:"Australia",correct:true},
            {text:"asia",correct:false},
            {text:"Antartica",correct:false},
            {text:"s",correct:false},

        ]

    },
    {
        question:" Jimmy's father has three sons- Paul I and Paul II. Can you guess the name of the third son ?",
        answers:[
            {text:"Paul 111",correct:false},
            {text:"Jimmy",correct:true},
            {text:"Jerin",correct:false},
            {text:"None of the above",correct:false},

        ]

    },
    {
        question:"There are 45 mangoes in your basket. You take three out of the basket. How many mangoes are left in the basket?",
        answers:[
            {text:"42",correct:true},
            {text:"40",correct:false},
            {text:"3",correct:false},
            {text:"45",correct:false},
    ,

        ]

    },
    {
        question:"whose?",
        answers:[
            {text:"s",correct:false},
            {text:"s",correct:false},
            {text:"s",correct:false},
            {text:"s",correct:true},

        ]

    }

];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuizz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    ShowQuestion();
}
function ShowQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}
function showScore() {
    resetState(); 
    questionElement.innerHTML = `Your score: ${score} out of ${questions.length}`; 
    nextButton.innerHTML = "Play Again"; 
    nextButton.style.display = "block"; 
    nextButton.dataset.playAgain = "true"; 
}

    

function handleNextButton() {
    if (nextButton.dataset.playAgain === "true") {
        startQuizz(); 
        delete nextButton.dataset.playAgain; 
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            ShowQuestion(); 
        } else {
            showScore(); 
        }
    }
}

    

nextButton.addEventListener("click", handleNextButton);
startQuizz();