function startTimer()
{
  let remainingTime = 10;
  let displayElement = document.getElementById("timer");
  let intervalID;

  const button = document.querySelector('.button-timer');
  button.classList.toggle('hide');

  function updateDisplay()
  {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    displayElement.textContent = `${minutes.toString().padStart(2,`0`)}:${seconds.toString().padStart(2,`0`)}`;

    if(!document.body.contains(displayElement))
    {
      document.body.appendChild(displayElement);
    }
  }

  function updateTimer()
  {
    remainingTime--;
    
    updateDisplay();
    
    if(remainingTime === 0)
    {
      const button_show = document.querySelector('.button-timer');
      //Your mistake are here.
      button_show.classList.toggle('show');
      //This line is wrong.
      clearInterval(intervalID);
    }
  }

  intervalID = setInterval(updateTimer,1000);
}

startTimer();
