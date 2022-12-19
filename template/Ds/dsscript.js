const quizData = [
    {
        question: "1. How is an array initialized in C language?",
        a: "int a[3] = {1, 2, 3};",
        b: "int a = {1, 2, 3};",
        c: "int a[] = new int[3]",
        d: "int a(3) = [1, 2, 3];",
        correct: "a",
    },
    {
        question: "2. Which of the following is a linear data structure?",
        a: "Array",
        b: "AVL Trees",
        c: "Binary Trees",
        d: "Graphs",
        correct: "a",
    },
    {
        question: "3. How is the 2nd element in an array accessed based on pointer notation?",
        a: "*a + 2",
        b: "*(a + 2)",
        c: "*(*a + 2)",
        d: "(a + 2)",
        correct: "b",
    },
    {
        question: "4. Which of the following is not the type of queue?",
        a: "Priority queue",
        b: "Single-ended queue",
        c: "Circular queue",
        d: "Ordinary queue",
        correct: "b",
    },
    {
        question: "5. From following which is not the operation of data structure?",
        a: "Operations that manipulate data in some way",
        b: "Operations that perform a computation",
        c: "Operations that check for syntax errors",
        d: "Operations that monitor an object for the occurrence of a controlling event",
        correct: "c",
    },
    {
        question: "6. Which of the following sorting algorithms provide the best time complexity in the worst-case scenario?",
        a: "Merge Sort",
        b: "Quick Sort",
        c: "Bubble Sort",
        d: "Selection Sort",
        correct: "a",
    },
    {
        question: "7. What is the disadvantage of array data structure?",
        a: "The amount of memory to be allocated should be known beforehand.",
        b: "Elements of an array can be accessed in constant time.",
        c: "Elements are stored in contiguous memory blocks.",
        d: "Multiple other data structures can be implemented using arrays.",
        correct: "a",
    },
    {
        question: "8. How are String represented in memory in C?",
        a: "An array of characters.",
        b: "The object of some class.",
        c: "Same as other primitive data types.",
        d: "LinkedList of characters.",
        correct: "a",
    },
    {
        question: "9. Which of the following is the advantage of the array data structure?",
        a: "Elements of mixed data types can be stored.",
        b: "Easier to access the elements in an array",
        c: "Index of the first element starts from 1.",
        d: "Elements of an array cannot be sorted",
        correct: "b",
    },
    {
        question: "10. What function is used to append a character at the back of a string in C++?",
        a: "push_back()",
        b: "append()",
        c: "push()",
        d: "insert()",
        correct: "a",
    },
    {
        question: "11. Which one of the following is an application of queue data structure",
        a: "When a resource is shared among multiple consumers.",
        b: "When data is transferred asynchronously",
        c: "Load Balancing",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "12. When a pop() operation is called on an empty queue, what is the condition called?",
        a: "Overflow",
        b: "Underflow",
        c: "Syntax Error",
        d: "Garbage Value",
        correct: "b",
    },
    {
        question: "13. Which of the following data structures can be used to implement queues?",
        a: "Stack",
        b: "Arrays",
        c: "LinkedList",
        d: "All of the Above",
        correct: "d",
    },
    {
        question: "14. Which of the following data structures finds its use in recursion?",
        a: "Stack",
        b: "Arrays",
        c: "LinkedList",
        d: "Queues",
        correct: "a",
    },
    {
        question: "15. Which of the following data structures allow insertion and deletion from both ends?",
        a: "Stack",
        b: "Deque",
        c: "Queue",
        d: "Strings",
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