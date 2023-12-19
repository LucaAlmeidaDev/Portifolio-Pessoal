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
            document.documentElement.style.setProperty('--background-color', '#030712');
            document.documentElement.style.setProperty('--titulo-color', '#FFF');
            document.documentElement.style.setProperty('--resumo-text', '#A1A6AD');
        } else {
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
            document.documentElement.style.setProperty('--background-color', '#FFF');
            document.documentElement.style.setProperty('--titulo-color', '#000');
            document.documentElement.style.setProperty('--resumo-text', '#0A2942');
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
