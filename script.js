document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    // Aplico el tema guardado previamente si existe
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Modo Claro';
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
                themeToggleBtn.textContent = '☀️ Modo Claro';
            } else {
                themeToggleBtn.textContent = '🌙 Modo Oscuro';
            }
            
            // Guardo en localStorage para que se mantenga al cambiar de página
            localStorage.setItem('theme', theme);
        });
    }
});