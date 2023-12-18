import './toggle.css';

function Toggle(){
    const modeImage = document.getElementById('modeImage');

    let darkMode = false;

    const darkModeButton = document.getElementById('darkModeButton');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');

    darkModeButton.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        darkMode = !darkMode;
        if (darkMode) {
            darkModeIcon.style.display = 'none';
            lightModeIcon.style.display = 'block';
            document.documentElement.style.setProperty('--background-color', '#171717');
            document.documentElement.style.setProperty('--titulo-color', '#FFF');
            document.documentElement.style.setProperty('--resumo-text', '#A1A6AD');
        } else {
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
            document.documentElement.style.setProperty('--background-color', '#FFF');
            document.documentElement.style.setProperty('--titulo-color', '#000');
            document .documentElement.style.setProperty('--resumo-text', '#0A2942');
        }
    }
    return(
        <div>

        </div>
    )
}

export default Toggle;