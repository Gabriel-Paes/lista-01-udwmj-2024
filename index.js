var waitingTime = new Date().getTime() + 70000; //Math.floor(Math.random() * (120 - 60) + 60);

console.log(waitingTime);

console.log(new Date().getTime());

function showTimer(n) {
  return n < 10 ? `0${n}` : n;
}

var interval = setInterval(() => {
  const now = new Date().getTime();

  const distance = waitingTime - now;
  console.log(distance);
  const timer = {
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };

  document.getElementById("timer").innerHTML = `${showTimer(
    timer.hours
  )}:${showTimer(timer.minutes)}:${showTimer(timer.seconds)}`;

  if (distance < 0) {
    clearInterval(interval);
  }
}, 999);
