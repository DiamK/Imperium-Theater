// Dit maakt een variabele van het formulier die popupt
var formulier = document.getElementById("formPop");

// Dit maakt een variabele van de knop waarmee je het formulier popupt
var btn = document.getElementById("formBtn");

// Dit maakt een variabele van het kruisje waarmee je het formulier sluit
var span = document.getElementsByClassName("sluitknop")[0];

// Dit zorgt ervoor dat, wanneer er op knop wordt gedrukt, het formulier tevoorschijn komt
btn.onclick = function() {
  formulier.style.display = "inline-block";
}

// Dit zorgt ervoor dat, wanneer er op het kruisje wordt geklikt, het formulier sluit
span.onclick = function() {
  formulier.style.display = "none";
}

// Dit zorgt ervoor dat, wanneer de gebruiker buiten het formulier op de website klikt, het formulier sluit
window.onclick = function(event) {
  if (event.target == formulier) {
    formulier.style.display = "none";
  }
}

// Gemaakt met behulp van https://www.w3schools.com/howto/howto_css_modals.asp
