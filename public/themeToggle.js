export function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');

  if (currentTheme === 'light' || !currentTheme) {
     document.body.setAttribute('data-theme', 'dark');
     document.querySelector(".toggle-container .fa-moon").classList.replace("fa-moon", "fa-sun");
  } else {
     document.body.setAttribute('data-theme', 'light');
     document.querySelector(".toggle-container .fa-sun").classList.replace("fa-sun", "fa-moon");
  }
}

// Attach the event listener
document.getElementById("theme-toggle").addEventListener("change", toggleTheme);
