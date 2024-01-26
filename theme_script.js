var currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
  localStorage.setItem("theme", "light");
}

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-mode");
  document.getElementById("switch").checked = true;
}

document.getElementById("switch").addEventListener("click", function () {
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  document.body.classList.toggle("dark-mode");
});