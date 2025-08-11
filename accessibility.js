// accessibility.js — toggles Screen Reader Mode

(function () {
  const body = document.body;
  const STORAGE_KEY = "screenReaderMode";

  // Load saved state
  if (localStorage.getItem(STORAGE_KEY) === "true") {
    body.classList.add("sr-mode");
  }

  // Function to toggle
  window.toggleScreenReaderMode = function () {
    const isOn = body.classList.toggle("sr-mode");
    localStorage.setItem(STORAGE_KEY, isOn);
  };
})();
