import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="darkModeSwitch"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="custom-control-label" htmlFor="darkModeSwitch">
        {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
      </label>
    </div>
  );
};

export default DarkModeToggle;
