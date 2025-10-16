const timeContainer = document.getElementById("current-time");

function updateTime() {
  const now = new Date();
  const milliseconds = now.getTime();
  timeContainer.textContent = milliseconds;
}

setInterval(updateTime, 1000);
