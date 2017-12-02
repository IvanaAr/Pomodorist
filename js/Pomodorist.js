window.onload = () => {
    // pocetne vrednosti tajmera
    var minute = 25;
    var seconds = 0;
    var totalSeconds = 1500;

    var intervalId = null;

    function startTimer() {
        --totalSeconds;

        minute = Math.floor((totalSeconds - 1) / 60);
        seconds = totalSeconds - (minute * 60);


        document.getElementById("minute").innerHTML = minute;
        document.getElementById("seconds").innerHTML = seconds;
    }

    document.getElementById('start-btn').addEventListener('click', () => {
        intervalId = setInterval(startTimer, 1500);
    })

    document.getElementById('stop-btn').addEventListener('click', () => {
        if (intervalId)
            clearInterval(intervalId);
    });


    document.getElementById('reset-btn').addEventListener('click', () => {
        totalSeconds = 1500;

        document.getElementById("minute").innerHTML = '25';
        document.getElementById("seconds").innerHTML = '00';
    });
}