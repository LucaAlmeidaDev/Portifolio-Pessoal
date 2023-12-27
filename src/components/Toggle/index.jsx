import React, { useState } from 'react';
import './toggle.css';
import moon from '../../assets/moon-fill.svg'
import sun from '../../assets/sun-fill.svg'

function Toggle() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        const darkModeIcon = document.getElementById('darkModeIcon');
        const lightModeIcon = document.getElementById('lightModeIcon');

        if (darkMode) {
            darkModeIcon.style.display = 'none';
            lightModeIcon.style.display = 'block';
            document.documentElement.style.setProperty('--background-color', '#171717');
            document.documentElement.style.setProperty('--border-color', '#171717');
            document.documentElement.style.setProperty('--titulo-color', '#FFF');
            document.documentElement.style.setProperty('--resumo-text', '#A1A6AD');
            document.documentElement.style.setProperty('--header-color', 'transparent');
            document.documentElement.style.setProperty('--box-shadow', 'transparent');
            document.documentElement.style.setProperty('--blur-color', '#6244d4');
        } else {
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
            document.documentElement.style.setProperty('--background-color', '#f5fcff');
            document.documentElement.style.setProperty('--border-color', '#f5fcff');
            document.documentElement.style.setProperty('--titulo-color', '#282938');
            document.documentElement.style.setProperty('--resumo-text', '#0A2942');
            document.documentElement.style.setProperty('--header-color', '#FFF');
            document.documentElement.style.setProperty('--box-shadow', '#00000030');
            document.documentElement.style.setProperty('--blur-color', 'none');
        }
    }

    return (
        <div>
            <button id="darkModeButton" onClick={toggleDarkMode}>
                <img id="darkModeIcon" src={sun} alt="Dark Mode" />
                <img id="lightModeIcon" src={moon} alt="Light Mode" />
            </button>
        </div>
    );
}

export default Toggle;
