const quizData = [
    {
        question: "1. Which of the following are CPU scheduling algorithms?",
        a: "Priority scheduling",
        b: "Round Robin",
        c: "Shortest Job First",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "2. Operating systems",
        a: "Provides a layer so as to act as a user-friendly interface that enables the programmer to draw a flow chart",
        b: "Links the program with subroutines",
        c: "Helps to create a flow chart of the programs",
        d: "All of these",
        correct: "a",
    },
    {
        question: "3. A process which is copied from main memory to secondary memory on the basis of requirement is known as",
        a: "Demand paging",
        b: "Paging",
        c: "Threads",
        d: "Segmentation",
        correct: "a",
    },
    {
        question: "4. FIFO scheduling is a type of:",
        a: "Deadline scheduling",
        b: "Pre-emptive scheduling",
        c: "Non-pre-emptive scheduling.",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "5. Which of the type of OS reads and reacts in terms of actual time?",
        a: "Quick sharing OS",
        b: "Time Sharing OS",
        c: "Real time OS",
        d: "Batch OS",
        correct: "c",
    },
    {
        question: "6. A systematic procedure for moving the CPU to new process is known as",
        a: "Synchronization",
        b: "Deadlock",
        c: "Starvation",
        d: "Context Switching",
        correct: "d",
    },
    {
        question: "7. UNIX is written in which language?",
        a: "C#",
        b: "C++",
        c: "C",
        d: ".NET",
        correct: "c",
    },
    {
        question: "8. Thread is a",
        a: "Light weight process",
        b: "Heavy weight process",
        c: "Multi-process",
        d: "I/0 process",
        correct: "a",
    },
    {
        question: "9. OS classifies the threads as-",
        a: "Mainframe and motherboard level",
        b: "Security and Memory level",
        c: "OS and CPU level",
        d: "Security and Memory level",
        correct: "c",
    },
    {
        question: "10. Among the following CPU scheduling algorithms, which of these allocated the CPU first to the process that requests the CPU first?",
        a: "FCFS",
        b: "SJF",
        c: "Priority scheduling",
        d: "None",
        correct: "a",
    },
    {
        question: "11. What are the two types of operating modes of at?",
        a: "Virtual mode, dedicated mode",
        b: "Private mode, public mode",
        c: "Real mode, protected mode",
        d: "Direct mode, indirect mode",
        correct: "c",
    },
    {
        question: "12. Which of the following schedules threads?",
        a: "Virtual memory",
        b: "Operating system",
        c: "CPU",
        d: "Input",
        correct: "b",
    },
    {
        question: "13. What is meant by ready state of a process?",
        a: "When the process is scheduled to run after some execution",
        b: "When the process is currently using the CPU",
        c: "When the process is dependent of the execution time of some other process.",
        d: "None of these",
        correct: "b",
    },
    {
        question: "14. Among the following, which is an example of a spooled device?",
        a: "A line printer that prints the output of a number of jobs.",
        b: "A terminal that inputs user data",
        c: "A I/O device to display graphics.",
        d: "None",
        correct: "a",
    },
    {
        question: "15. Main memory of a computer system is?",
        a: "Non-volatile",
        b: "Volatile",
        c: "Restricted",
        d: "Unrestricted",
        correct: "b",
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