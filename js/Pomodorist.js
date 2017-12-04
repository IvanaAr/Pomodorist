//funkcija za tajmer
var intervalId = null;
var minutes = 25; //kasnije podesiti minute na 25
var seconds = 00;
var totalSeconds = 1500; //kasnije podesiti minute na 1500
var type = 1;
var started = 0;



function startTimer() {



    --totalSeconds;


    if (totalSeconds == 0) {
        if (type == 0) {
            totalSeconds = 1500;
            type = type + 1;
            document.getElementById("work-break").innerHTML = "Work!";

        } else {
            totalSeconds = 300;
            type = type - 1;
            document.getElementById("work-break").innerHTML = "Rest!";

        }
    }

    function play() {

    }

    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds - (minutes * 60);



    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}



document.getElementById('start-btn').addEventListener('click', () => {
    if (started == 0) {
        started = 1;
        intervalId = setInterval(startTimer, 10);
        document.getElementById("work-break").innerHTML = "Work!";
    }

})

document.getElementById('stop-btn').addEventListener('click', () => {

    if (intervalId && started == 1)
        started = 0;
    clearInterval(intervalId);
    document.getElementById("work-break").innerHTML = "Your pomodoro timer is stopped, please start it again or reset!";

});


document.getElementById('reset-btn').addEventListener('click', () => {
    clearInterval(intervalId);
    totalSeconds = 1500; //podesiti sekunde na 1500
    type = 1;
    started = 0;
    document.getElementById("minutes").innerHTML = '25';
    document.getElementById("seconds").innerHTML = '00';
    document.getElementById("work-break").innerHTML = "Your pomodoro timer is reset, please start it again!";
});


// funkcija za to do list
function newElement() {
    var item = document.getElementById('todoInput').value;
    var text = document.createTextNode(item);
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    var newItem = document.createElement("div");

    newItem.appendChild(checkbox);
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem)
}