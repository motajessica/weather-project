export function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light' || !currentTheme) { // The !currentTheme is to handle if the attribute isn't set initially
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
  