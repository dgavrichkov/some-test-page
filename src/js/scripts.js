const rangeSlider = document.querySelector('.range__slider');
const rangeOutput = document.querySelector('.range__value');
rangeOutput.value = rangeSlider.value + ' %';
rangeSlider.oninput = function() {
  rangeOutput.value = this.value + ' %';
}