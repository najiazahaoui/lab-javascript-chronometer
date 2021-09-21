const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  //creating an li to append to ul element
  let listEl = document.createElement('li');
  let parentList = document.querySelector('#splits');
  listEl.innerHTML = "testing";
  parentList.appendChild(listEl);  
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.className = "btn split";
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.className = "btn start";
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  btnRightElement.className = "btn reset";
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  //checking if the chrono status is started
  if (btnLeftElement.className === "btn start") {
    //start the chrono
    chronometer.start();
    setStopBtn();
    setSplitBtn();
  }
  else {
    //stop the chrono
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    //checking if the chrono status is stopped or started:
    if (btnLeftElement.className === "btn start") {
      //reset the counter
    }
    else {
      //split the time
      printSplit();
    }
});
