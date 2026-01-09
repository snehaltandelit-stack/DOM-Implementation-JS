function funuser() {
  const user = document.getElementById("txtuser");
  const huser = document.getElementById("huser");
  const btngreet = document.getElementById("btngreet");
  if (user.value != "") {
    huser.innerText = huser.textContent + ", " + user.value;
    btngreet.disabled = true;
  }
}

function redcolor() {
  const redbox = document.getElementById("redbox");
  redbox.classList.add("red");
}
function bluecolor() {
  const bluebox = document.getElementById("bluebox");
  bluebox.classList.add("blue");
}
function yellowcolor() {
  const yellowbox = document.getElementById("yellowbox");
  yellowbox.classList.add("yellow");
}
function greencolor() {
  const greenbox = document.getElementById("greenbox");
  greenbox.classList.add("green");
}
