/* selection done for open and close a overlay*/
const overlayback = document.querySelector('.overlayback');
const overlay = document.querySelector('.overlay');
const openoverlay = document.getElementById('openoverlay');
const cancelbtn = document.getElementById('cancelbtn');


/* functions for open and closig a overlay */
openoverlay.addEventListener('click', function () {
    overlayback.style.display = "block";
    overlay.style.display = "block";
})
cancelbtn.addEventListener('click', function () {
    overlayback.style.display = "none";
    overlay.style.display = "none";
})


/* selecting items for update a tasks */
const taskbox = document.getElementById('taskbox');
const datebox = document.getElementById('datebox');
const timebox = document.getElementById('timebox');
const taskstatus = document.querySelector('.taskstatus');
let count = 1;
let comp = 0;


function update() {
    if (taskbox.value === "") {
        alert("please enter the task and then proceed");
        return;

    }
    const div = document.createElement('div');
    div.setAttribute('class', 'taskcard')
    div.innerHTML = `<div class="inner-taskcard1">
            <input type="checkbox" style="width: 20px; height: 20px; position: relative; top: 10px;" onclick="completedtask(event)">
            <h3 style="display: inline-block; margin-left: 20px;" id="outputtask">${taskbox.value}</h3><br>
            <p style="display: inline-block; margin-left: 45px; color: gray;" id="outputdate">${datebox.value}</p>
            <p style="display: inline-block; color: gray;" id="outputtime">${timebox.value}</p>
            <p class="statustext" style="margin-left: 20px;"></p>
        </div>
        <div class="inner-taskcard2" style="position: relative; top: 10px; " onclick="deletingcards(event)"><i class="fa-solid fa-trash"></i></div>
    `
    document.body.insertBefore(div, document.querySelector('.taskstatus'));
    overlayback.style.display = "none";
    overlay.style.display = "none";

    taskbox.value = "";
    datebox.value = "";
    timebox.value = "";

    /* to update a no of tasks is recorded */
    count++;

    taskstatus.innerHTML = `<p>${count} Tasks | </p>
        <p> ${comp} Completed</p>`
}
overlay.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        update();
    }
})


/* function for deleting a task */
function deletingcards(event) {
    const card = event.target.closest('.taskcard');
    const checkbox = card.querySelector('input[type="checkbox"]');

    if (checkbox.checked) {
        comp--; // Tick pannunatha delete panna comp kuraiyum
    }

    card.remove(); 
    count--; // Total count eppovum kuraiyum

    taskstatus.innerHTML = `<p>${count} Tasks . </p> <p> ${comp} Completed</p>`;
}


/* function fot completing a task */
const taskcard = document.querySelector('.taskcard')
function completedtask(event) {
    const quotes = [
        "Believe you can and you're halfway there! 🚀",
        "Don't stop until you're proud. ✨",
        "Small steps lead to big results. 💪",
        "Your only limit is your mind. 🔥",
        "Done is better than perfect. ✅",
        "Great things never come from comfort zones. 🌟",
        "Productivity is being able to do things that you were never able to do before. 📈",
        "Focus on being productive instead of busy. 🎯",
        "Success is the sum of small efforts, repeated day in and day out. 🧱",
        "Keep going, you're doing great! 👏"
    ];
    const rand = Math.floor(Math.random() * quotes.length)
    const task = event.target.closest('.taskcard');
    const statustext = task.querySelector('.statustext')
    if (event.target.checked) {
        alert("WOW ! YOU NAILED IT !🎉🎉🎉🎉🎉🎉\n" + quotes[rand])
        task.style.backgroundColor = "#1b387c"
        task.style.color = 'white'
        comp++
        taskstatus.innerHTML = `<p>${count} Tasks . </p>
        <p> ${comp} Completed</p>`
        statustext.innerHTML = "Completed";
    }
    else {
        task.style.backgroundColor = "white"
        task.style.color = 'black'
        comp--
        taskstatus.innerHTML = `<p>${count} Tasks . </p>
        <p> ${comp} Completed</p>`
        statustext.innerHTML = "";
    }
}


document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        overlayback.style.display = "block";
        overlay.style.display = "block";
    }
})

