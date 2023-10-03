document.addEventListener('DOMContentLoaded', function() {

  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("change", function() {
      toggleTheme(this.checked);
  });

  function toggleTheme(isDarkTheme) {
      if (isDarkTheme) {
          activateDarkTheme();
      } else {
          deactivateDarkTheme();
      }
  }

  function activateDarkTheme() {
      document.documentElement.setAttribute("data-theme", "dark");
      document.querySelector(".toggle-container .fa-moon").classList.replace("fa-moon", "fa-sun");
  }

  function deactivateDarkTheme() {
      document.documentElement.removeAttribute("data-theme");
      document.querySelector(".toggle-container .fa-sun").classList.replace("fa-sun", "fa-moon");
  }

});
