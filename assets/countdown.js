let remainingTime = 120;

let displayElement = document.createElement('div');

let intervalID;

function updateDisplay()
{
  let minutes = Math.floor(remainingTime / 60);
  let seconds = remainingTime % 60;

  displayElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (!document.body.contains(displayElement))
  {
    document.body.appendChild(displayElement);
  }
}

function updateTimer()
{
  remainingTime--;

  updateDisplay();

  if (remainingTime === 0)
  {
    clearInterval(intervalID);
  }
}

intervalID = setInterval(updateTimer, 1000);
