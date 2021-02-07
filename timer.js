// I learned how to make a progress ring from this article
// https://css-tricks.com/building-progress-ring-quickly/

const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
let countDown;
let alarm = new Audio("openhat.wav");

const alarmSound = () => {
    alarm.play();
}




const timer = (seconds) => {
    
    let percentage = 0;
    let tick = 1/seconds;
    
    countDown = setInterval(()=>{
        circle.style.strokeDashoffset = circumference-(circumference*percentage)
        if(percentage<1){
            percentage += tick;
        } 
        
    }, 1000)
    
    
    
}

const resetTimer = () => {
    clearInterval(countDown);
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
}




const seconds = document.querySelector('input');
const container = document.querySelector('#container');
container.style.width = '120px'



let start = document.querySelector('#start');
let reset = document.querySelector('#reset');


start.addEventListener('click', () => {
    clearInterval(countDown);
    timer(seconds.value);
})


reset.addEventListener('click', () => {
    resetTimer();
})