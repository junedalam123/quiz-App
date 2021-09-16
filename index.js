const quizDB = [
    {
        Quetion: "Q1: full form of the html",
        a: "hellow to my requres",
        b: "hellow to mummy lumious",
        c: "hyper text motrolalocation",
        d: "hyper text markcup language",
        ans: "ans4"
    },
    {
        Quetion: "Q2: full form of the css",
        a: "cashcade style sheet",
        b: "cashcade srvice several",
        c: "channel service sheet",
        d: "channel super star",
        ans: "ans1"
    }
    , {
        Quetion: "Q3: full form of the js",
        a: "javaserver",
        b: "junedsheeet",
        c: "javaseveral",
        d: "javascript",
        ans: "ans4"
    }
    , {
        Quetion: "Q4: full form of the http",
        a: "hyper text transfer protocol ",
        b: "hellow time transfer portal",
        c: "hyper transfer text  protocol",
        d: "hyper tattoo transfer protocol",
        ans: "ans1"
    }, {
        Quetion: "Q5: full form of the json",
        a: "javascript object notation",
        b: "javacsript onject notation",
        c: "java session object notation",
        d: "juper sessional oriented national",
        ans: "ans1"
    }, {
        Quetion: "Q6: full form of the npm",
        a: "node protocol manager ",
        b: "national pruvate manger",
        c: "node package manager",
        d: "national private manager ",
        ans: "ans3"
    },
    {
        Quetion: "Q7: full form of the aws",
        a: "amazon world service",
        b: "amazon web server",
        c: "amanzon world sequence",
        d: "amazon web service",
        ans: "ans2"
    }
];


let Quetion = document.querySelector(".quetion");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let submit = document.querySelector("#submit");
let answers = document.querySelectorAll(".answer");
let showScore = document.querySelector("#scorearea");

let queationCount = 0;
let score = 1;

function dynamicData() {
    let queationsequence = quizDB[queationCount].Quetion;
    Quetion.innerText = queationsequence;


    option1.innerText = quizDB[queationCount].a;
    option2.innerText = quizDB[queationCount].b;
    option3.innerText = quizDB[queationCount].c;
    option4.innerText = quizDB[queationCount].d;
}
dynamicData();
function getcheckAnswer() {
    let answer;
    answers.forEach((currEle) => {
        if (currEle.checked)
            answer = currEle.id;
    })
    return answer;
}
const deselectAll = () => {
    answers.forEach((currElee) => {
        currElee.checked = false;
    })
}
submit.addEventListener("click", () => {
    const checkAnswer = getcheckAnswer();
    console.log(checkAnswer);
    if (checkAnswer === quizDB[queationCount].ans) {
        score++;
    };
    deselectAll();
    queationCount++;
    if (queationCount < quizDB.length) {
        dynamicData();
    } else {
        showScore.innerHTML = `
                     <h3>my score is ${score}/${quizDB.length} </h3>
                     <buttton class="btn" onclick="location.reload()">play again</button>
          `;
        showScore.classList.remove("showscore");
    }

});