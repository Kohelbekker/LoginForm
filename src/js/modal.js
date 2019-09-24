let modal = document.getElementById("myForgot");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("mod-cont-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    }
}
