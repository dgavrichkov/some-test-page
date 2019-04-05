const rangeSlider = document.querySelector('.range__slider');
const rangeOutput = document.querySelector('.range__value');
rangeOutput.innerHTML = rangeSlider.value + ' %';
rangeSlider.oninput = function() {
  rangeOutput.innerHTML = this.value + ' %';
}