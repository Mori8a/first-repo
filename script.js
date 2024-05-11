let timeoutId;

function ColorChange() {
    let colorChangeBtn = document.getElementsByClassName('colorChangeBtn');
    colorChangeBtn.disabled = true; 

    timeoutId = setTimeout(changeColor, 2000);
}

function changeColor() {
    let colorChangeBtn = document.getElementsByClassName('colorChangeBtn');
    colorChangeBtn.disabled = false; 
}

function cancelColorChange() {
    let colorChangeBtn = document.getElementsByClassName('colorChangeBtn');
    clearTimeout(timeoutId);
    colorChangeBtn.disabled = false;
}


let timeInSeconds = 20;


function updateTimer() {
  let timer = document.getElementById('timer');
  timer.textContent = timeInSeconds;

  
  if (timeInSeconds <= 0) {
    timer.textContent = "Time is up!";
    return;
  }

  
  timeInSeconds--;

  
  setTimeout(updateTimer, 1000);
}


updateTimer();

function customIndexOf(str, target) {
    if (typeof str !== "string" || typeof target !== "string") {
      throw new Error("One of them is not a string");
    }
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  try {
    console.log(customIndexOf(2536, 5));
  } catch (error) {
    console.error(error.message);
  }

  