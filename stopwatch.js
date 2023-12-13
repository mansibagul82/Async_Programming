
let  hours =  0;
let  minutes = 0;
let  seconds =  0;
let milliseconds = 0;
let timerstop;

let display = document.querySelector(".timer-display");
display.innerText = "00hr : 00min : 00s : 00ms ";

// start timer

function start()
{
    timerstop = setInterval(displaytimer,10);
}

// pause timer

function pause() 
{
    clearInterval(timerstop);
}

// Reset timer

function reset()
{
    clearInterval(timerstop);
    hours =  0;
    minutes = 0;
    seconds =  0;
    milliseconds = 0;
    display.innerText = `${seconds}s : ${milliseconds}ms`;

}


function displaytimer(){

    if (milliseconds == 1000)
    {
        milliseconds = 0;
        seconds++;
    }
    else{
        milliseconds++
    }
    if(seconds == 60)
    {
        seconds = 0;
        minutes++; 
    }
    if (minutes == 60)
    {
        minutes = 0;
        hours++;
    }

    // if hours and minutes both are 0 

    if (hours == 0 && minutes == 0)
    {
        display.innerText = `${seconds}s : ${milliseconds}ms`

    }
    else if (hours == 0)
    {
        display.innerText = `${minutes}min : ${seconds}s : ${milliseconds}ms`
    }
    else{
        display.innerText = `${hours}hr : ${minutes}min : ${seconds}s : ${milliseconds}ms`
    }

}
