// Set the date we're counting down to
var countDownDate = new Date("Jun 4, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdownDay").innerHTML = days + " ";
    document.getElementById("countdownHours").innerHTML = hours + " ";
    document.getElementById("countdownMinutes").innerHTML = minutes + " ";
    document.getElementById("countdownSeconds").innerHTML = seconds + " ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownDay").innerHTML = "00";
        document.getElementById("countdownHours").innerHTML = "00";
        document.getElementById("countdownMinutes").innerHTML = "00";
        document.getElementById("countdownSeconds").innerHTML = "00";
    }
}, 1000);