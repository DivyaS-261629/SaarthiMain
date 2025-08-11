function setFontSize(percent) {
  document.documentElement.style.fontSize = (percent / 100 * 16) + 'px';
}

document.addEventListener('click', e => {
  if (e.target.id === 'increaseFont') {
    setFontSize(parseFloat(document.getElementById('fontSlider').value) + 5);
  }
  if (e.target.id === 'decreaseFont') {
    setFontSize(parseFloat(document.getElementById('fontSlider').value) - 5);
  }
  if (e.target.id === 'accessibleToggle') {
    document.body.classList.toggle('accessible');
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'fontSlider') {
    setFontSize(parseFloat(e.target.value));
  }
});
