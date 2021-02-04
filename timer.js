const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference-(circumference*.0);

const timer = (seconds) => {
    let percentage = 0;
    let tick = 1/seconds;
    setInterval(()=>{
        circle.style.strokeDashoffset = circumference-(circumference*percentage)
        if(percentage<.9){

            percentage += tick;
           
        }
    
    
    }, 1000)
}

const seconds = document.querySelector('input');




let btn = document.createElement('button');
document.body.appendChild(btn).innerHTML = 'Start';
btn.addEventListener('click', () => timer(seconds.value))
