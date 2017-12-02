var minute = 0; //kasnije podesiti minute na 25
var seconds = 5;
var totalSeconds = 5; //kasnije podesiti minute na 1500
// var timer = null;

function startTimer() {
    // if (timer !== null) {;

    //     clearInterval(intervalId);
    // }


    --totalSeconds;

    minute = Math.floor((totalSeconds - 1) / 60);
    seconds = totalSeconds - (minute * 60);


    document.getElementById("minute").innerHTML = minute;
    document.getElementById("seconds").innerHTML = seconds;



    if (totalSeconds == 0) {


        clearInterval(intervalId);



        startBreak();

    }


}

document.getElementById('start-btn').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1500);
})

document.getElementById('stop-btn').addEventListener('click', () => {
    if (intervalId)
        clearInterval(intervalId);
});


document.getElementById('reset-btn').addEventListener('click', () => {
    totalSeconds = 5; //podesiti sekunde na 1500

    document.getElementById("minute").innerHTML = '0';
    document.getElementById("seconds").innerHTML = '5';
});


var breakminute = 0;
var breakseconds = 5;
var totalbreakseconds = 5;

function startBreak() {


    --totalbreakseconds;
    intervalId = setInterval(startBreak, 1500);

    breakminute = Math.floor((totalbreakseconds - 1) / 60);
    breakseconds = totalbreakseconds - (breakminute * 60);


    document.getElementById("minute").innerHTML = breakminute;
    document.getElementById("seconds").innerHTML = breakseconds;

    if (totalbreakseconds == 0) {

        clearInterval(intervalId);
        startTimer();

    }



    document.getElementById('stop-btn').addEventListener('click', () => {
        if (intervalId)
            clearInterval(intervalId);
    });


    document.getElementById('reset-btn').addEventListener('click', () => {
        totalbreakseconds = 5; //podesiti sekunde na 1500

        document.getElementById("minute").innerHTML = '0';
        document.getElementById("seconds").innerHTML = '5';
    });
}