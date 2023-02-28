// The variable are used hr(Hour)
// second variable are used min(minute)
// sec(second) count (counter used count the value )
// Timer (timer is check the value the value is true or not in the project )

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
// Funcation start are used 

function start() {
    timer = true;
    stopwatch();

}
function stop() {
    timer = false;


}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}

// Inislize the proram before starting the logic then start the function

function stopwatch() {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (minString < 10) {
            minString = "0" + minString;
        }
        if (secString < 10) {
            secString = "0" + secString;
        }
        if (countString < 10) {
            countString = "0" + countString;
        }
        document.getElementById("hr").innerHTML = hrString; // To direct assec the data by Id 
        document.getElementById("min").innerHTML = minString;//hour and min and sec converting the string value 
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout("stopwatch()", 10) //set timeout timer after 10sec are used 
    }
}