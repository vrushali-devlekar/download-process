let count = 0;

let progress = document.querySelector("#progressBar");
let number = document.querySelector("#percentText");
let h2 = document.querySelector("h2");
setInterval(function () {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    number.textContent = `${count}%`;
  }
  if (count == 100) {
    h2.textContent = "Download complete";
  }
}, 30);
