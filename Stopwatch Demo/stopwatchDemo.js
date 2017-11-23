var recordTime = [];
var running = false;
var seconds = 0;
var milliseconds = 0;
var clearTime;

setUp();

function showTime() {
    var doc = document.getElementById('timer');
    doc.innerHTML = seconds + '.' + milliseconds;
}

function start(){

    if(milliseconds === 100)
    {
        seconds++;
        milliseconds = 0;
    }
    milliseconds++;
    showTime();
    clearTime = setTimeout( 'start( )', 10 );

}

function stop(){
    clearTimeout(clearTime);
}

function reset() {
    stop();
    milliseconds = 0;
    seconds = 0;
    while (recordTime.length > 0) {
        recordTime.pop();
    }
    showTime();
    document.getElementById('pastTimes').innerHTML = "";
}

function saveTime() {
    recordTime.push(seconds + '.' + milliseconds);
    var s = recordTime.toString();
    var splitted = s.split(',');
    document.getElementById('pastTimes').innerHTML = splitted.join("<br>")
}

function setUp() {
    document.getElementById('startStop').addEventListener('click', function(){
        if(running){
            running = false;
            stop();
        }
        else{
            running = true;
            start();
        }
    });

    document.getElementById('reset').addEventListener('click', function () {
        reset();
    });

    document.getElementById('recordTime').addEventListener('click', function () {
       saveTime();
    });
}
