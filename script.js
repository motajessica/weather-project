const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            document.documentElement.setAttribute("data-theme", "dark");
            document.querySelector(".toggle-container .fa-moon").classList.replace("fa-moon", "fa-sun");
        } else {
            document.documentElement.removeAttribute("data-theme");
            document.querySelector(".toggle-container .fa-sun").classList.replace("fa-sun", "fa-moon");
        }
    });
