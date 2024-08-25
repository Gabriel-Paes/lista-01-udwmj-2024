const waitingTime =
  new Date().getTime() + 60000 * Math.floor(Math.random() * (15 - 1) + 1);

var now = new Date().getTime();

const allDistance = waitingTime - now;

let showUpcomingSessions = false;
let position = 1;

if (allDistance / 60000 >= 4) {
  showUpcomingSessions = true;
  position = Math.floor(Math.random() * (48 - 2) + 2);
}

document.querySelector("#position").textContent = position;

function showTimer(n) {
  return n < 10 ? `0${n}` : n;
}

var interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = waitingTime - now;

  const timer = {
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };

  const timerHTML = document.getElementById("timer");

  timerHTML.innerHTML = `${showTimer(timer.hours)}:${showTimer(
    timer.minutes
  )}:${showTimer(timer.seconds)}`;

  if (distance < 0) {
    clearInterval(interval);
    timerHTML.innerHTML = "00:00:00";
    goToMapRoom();
  }
}, 1000);

function goToMapRoom() {
  window.location.href = "mapRoom.html";
}

function divider(text) {
  const divider = document.createElement("div");
  divider.classList.add("divider");

  const span = document.createElement("span");
  span.textContent = text;

  const line = document.createElement("div");
  line.style.setProperty("--clr-line", "#fff");

  divider.appendChild(span);
  divider.appendChild(line);

  return divider;
}

if (showUpcomingSessions) {
  const upcomingSessions = document.querySelector("#upcoming-sessions");

  const h2 = document.createElement("h2");
  h2.textContent = "Próximas sessões";

  upcomingSessions.appendChild(h2);

  const p = document.createElement("p");
  p.textContent =
    "Com base na sua escolha e devido a alta demanda para a sessão escolhida, recomendamos essas alternativas";

  upcomingSessions.appendChild(p);

  upcomingSessions.appendChild(divider("Hoje ainda"));

  const session = document.createElement("div");
  session.classList.add("session");

  const h3 = document.createElement("h3");
  h3.textContent = "Star Wars - The Empire Strikes Back";
  session.appendChild(h3);

  const room = document.createElement("span");
  room.textContent = "Sala: 01";

  session.appendChild(room);

  const buttonGroup = session.appendChild(document.createElement("div"));
  buttonGroup.classList.add("button-group");
  const sessionsTimes = ["17:50", "20:15", "22:40"];

  sessionsTimes.forEach((sessionTime) => {
    const button = buttonGroup.appendChild(document.createElement("button"));
    button.classList.add("session-time");
    button.textContent = sessionTime;
    button.addEventListener("click", () => goToMapRoom());
  });

  upcomingSessions.appendChild(session);

  upcomingSessions.appendChild(divider("Amanhã"));
  const sessionTomorrow = document.createElement("div");
  sessionTomorrow.classList.add("session");

  const warning = document.createElement("h3");

  warning.textContent = "Não há sessões disponíveis";
  sessionTomorrow.appendChild(warning);

  upcomingSessions.appendChild(sessionTomorrow);
  upcomingSessions.classList.add("animation-upcoming-sessions");
}
