let remainingTime = 10;
let displayElement = document.getElementsByClassName('timer');
let intervalID;


const imageClock = document.querySelector('.timer-img');
imageClock.classList.toggle('show');
const imageTime = document.querySelector('.time-up-img')
imageTime.classList.toggle('hide');

function updateDisplay() 
{
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;
  for(let i = 0; i < displayElement.length; i++)
  {  
    displayElement[i].textContent = `${minutes.toString().padStart(2,`0`)}:${seconds.toString().padStart(2,`0`)}`;
    if(!document.body.contains(displayElement[i]))
    {
      document.body.appendChild(displayElement[i]);
    }
  }
}

function updateTimer() 
{
  remainingTime--;
  updateDisplay();

  if(remainingTime === 0)
  {
    clearInterval(intervalID);
      
    imageClock.classList.toggle('show');
    imageTime.classList.toggle('hide');
  }
}

function startTimer()
{
  clearInterval(intervalID);
  if(remainingTime === 0)
  {
    imageClock.classList.toggle('show');
    imageTime.classList.toggle('hide');
  }
  remainingTime = 10;
  updateDisplay();
  intervalID = setInterval(updateTimer, 1000);
}

updateDisplay();
intervalID = setInterval(updateTimer, 1000);
