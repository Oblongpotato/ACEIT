const quizData = [
    {
        question: "1. Which of the following is the full form of DDL?",
        a: "Data definition language",
        b: "Data derivation language",
        c: "Dynamic data language",
        d: "Detailed data language",
        correct: "a",
    },
    {
        question: "2. Which of the following is the property of transaction that protects data from system failure?",
        a: "Atomicity",
        b: "Isolation",
        c: "Durability",
        d: "Consistency",
        correct: "c",
    },
    {
        question: "3. Which of the following is preserved in execution of transaction in isolation?",
        a: "Atomicity",
        b: "Isolation",
        c: "Durability",
        d: "Consistency",
        correct: "b",
    },
    {
        question: "4. Which normalization form is based on the transitive dependency?",
        a: "1NF",
        b: "2NF",
        c: "3NF",
        d: "BCNF",
        correct: "c",
    },
    {
        question: "5. Which is the lowest level of abstraction that describes how the data are actually stored?",
        a: "Physical",
        b: "Abstract",
        c: "View",
        d: "User",
        correct: "a",
    },
    {
        question: "6. For performing tasks like creating the structure of the relations, deleting relation, which of the following is used?",
        a: "Data definition language",
        b: "Data derivation language",
        c: "Dynamic data language",
        d: "Detailed data language",
        correct: "a",
    },
    {
        question: "7. What is rows of a relation known as?",
        a: "Degree",
        b: "Entity",
        c: "Tuple",
        d: "None",
        correct: "c",
    },
    {
        question: "8. Which of the following is a command of DDL?",
        a: "Alter",
        b: "Delete",
        c: "Create",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "9. During transaction before commit which of the following statement is done automatically in case of shutdown?",
        a: "Rollback",
        b: "Commit",
        c: "View",
        d: "Flashback",
        correct: "a",
    },
    {
        question: "10. Which of the following is the full form of TCL?",
        a: "Ternary control language",
        b: "Transaction control language",
        c: "Transaction central language",
        d: "Transmission control language",
        correct: "b",
    },
    {
        question: "11. Which of the following SQL command is used for removing (or deleting) a relation form the database?",
        a: "Drop",
        b: "Delete",
        c: "Rollback",
        d: "Remove",
        correct: "a",
    },
    {
        question: "12. What is DBMS?",
        a: "Collection of many programs to access data",
        b: "Collection of interrelated data",
        c: "Collection of commands",
        d: "All",
        correct: "b",
    },
    {
        question: "13. Rectangles in ER diagram represents?",
        a: "Tables",
        b: "Attributes",
        c: "Tuples",
        d: "Entity sets",
        correct: "d",
    },
    {
        question: "14. Select the correct definition of relation.",
        a: "Subset of a cartesian product of list of domains",
        b: "Subset of a cartesian product of list of tuple",
        c: "Subset of a cartesian product of list of attributes",
        d: "Subset of a cartesian product of list of relations",
        correct: "a",
    },
    {
        question: "15. Which of the following allows to uniquely identify a tuple?",
        a: "Schema",
        b: "Attribute",
        c: "Super key",
        d: "Domain",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function chart(config,id) {
    var ctx = document.getElementById(id).getContext('2d');
       const chart = new Chart(ctx, config);
}




submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
        let barconfig = {
            type: "bar",
            data: {
              labels: ["Correct", "Incorrect"],
              datasets: [{
                data: [score, quizData.length - score],
                backgroundColor: ['#4CBB17','#FF0000']
              }]
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: 'Your Exam Results'
              },
              legend: {
                display: false
              }
              ,scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero: true
                   }
               }]
           }
            }
          };
      
          
     
         let pieconfig = {
           type: "pie",
           data: {
             labels: ["Correct", "Incorrect"],
             datasets: [{
               data: [score, quizData.length - score],
               backgroundColor: ['#4CBB17','#FF0000']
             }]
           },
           options: {
             responsive: true,
             title: {
               display: true,
               text: 'Your Exam Results'
             },
             legend: {
               display: true
             }
           }
         };
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
  <button id="pieChart" type="button" class="btn btn-outline-primary" >Piechart</button>
  <button id="barChart" type="button" class="btn btn-outline-primary" >Barchart</button>
         </div>
        <center> <div class="my-5 container" style="width:100%;">

       <canvas id="pie-chart1"></canvas>
       <canvas id="bar-chart1"></canvas>
         </div>
       </center>

        <button onclick="location.reload()">Reload</button>
        `;
        chart(pieconfig,"pie-chart1");
           document.getElementById("bar-chart1").style.display="none";
           document.getElementById("pie-chart1").style.display="block";

        document.getElementById("pieChart").addEventListener("click",function() {
           chart(pieconfig,"pie-chart1");
           document.getElementById("bar-chart1").style.display="none";
           document.getElementById("pie-chart1").style.display="block";

        }, false);
        document.getElementById("barChart").addEventListener("click",function() {
            chart(barconfig,
                "bar-chart1");
                document.getElementById("pie-chart1").style.display="none";
                document.getElementById("bar-chart1").style.display="block";
        }, false);

    }
    }
})