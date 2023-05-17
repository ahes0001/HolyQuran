

const rangeInput = document.getElementById('customRange2');
const rangeValue = document.getElementById('rangeValue');

// Add an event listener to the range input
rangeInput.addEventListener('input', function() {
  rangeValue.textContent = rangeInput.value; // Update the label with the current range value
  value = 1.2+0.025*rangeInput.value + "em"
  $(".quran").css("fontSize", value) // Update the font size of the #quran element 2.2em 
});

// JavaScript
const fontSelect = document.getElementById("fontSelect");
const quranText = document.querySelector(".quran");

fontSelect.addEventListener("change", function() {
  const selectedFont = fontSelect.value;
  quranText.style.fontFamily = selectedFont;
});





