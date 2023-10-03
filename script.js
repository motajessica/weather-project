document.addEventListener("DOMContentLoaded", function() {
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("change", function() {
      console.log("Toggle button changed!");
      if (this.checked) {
          console.log("Dark mode on");
          document.documentElement.setAttribute("data-theme", "dark");
          document.querySelector(".toggle-container .fa-moon").classList.replace("fa-moon", "fa-sun");
      } else {
          console.log("Dark mode off");
          document.documentElement.removeAttribute("data-theme");
          document.querySelector(".toggle-container .fa-sun").classList.replace("fa-sun", "fa-moon");
      }
  });
});