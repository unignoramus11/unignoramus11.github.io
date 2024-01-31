var currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
  localStorage.setItem("theme", "light");
}

if (currentTheme == "dark") {
  document.getElementById("switch-mobile").checked = true;
  document.getElementById("switch-desktop").checked = true;
} else document.body.classList.toggle("dark-mode");

document.getElementById("switch-mobile").addEventListener("click", function () {
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
  document.body.classList.toggle("dark-mode");
});

document
  .getElementById("switch-desktop")
  .addEventListener("click", function () {
    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    document.body.classList.toggle("dark-mode");
  });

document
  .getElementById("hamburger-menu")
  .addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".section-name").style.display = "none";
    } else {
      document.querySelector(".section-name").style.display = "block";
    }
  });
