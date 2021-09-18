class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    if (callback !== undefined) {
      this.intervalId = setInterval(callback => {this.currentTime += 1}, 1000);
    }
    this.intervalId = setInterval(() => {this.currentTime += 1}, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.trunc(this.currentTime/60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value % 10 === value) {
      return "0" + value.toString()
    }
    return value.toString();
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let elapsedMinutes = this.getMinutes();
    let elapsedSeconds = this.getSeconds();
    return this.computeTwoDigitNumber(elapsedMinutes) + ":" + this.computeTwoDigitNumber(elapsedSeconds); 
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
