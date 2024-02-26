import React, { useState } from 'react';
import './style.css'; // Keep your existing CSS import

function App() {
  const [selectedColor, setSelectedColor] = useState('white'); // Initial background

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
    document.body.style.backgroundColor = newColor; // Update body background
  };

  return (
    <div className="container"> 
      <h1>Color Picker</h1>
      <div className="buttons">
        <button onClick={() => handleColorChange('red')}>Red</button>
        <button onClick={() => handleColorChange('green')}>Green</button>
        <button onClick={() => handleColorChange('blue')}>Blue</button>
        <button onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button onClick={() => handleColorChange('orange')}>Orange</button>
        <button onClick={() => handleColorChange('purple')}>Purple</button>
        <button onClick={() => handleColorChange('cyan')}>Cyan</button>
        <button onClick={() => handleColorChange('magenta')}>Magenta</button>
        <button onClick={() => handleColorChange('pink')}>Pink</button>
        <button onClick={() => handleColorChange('lime')}>Lime</button>
        <button onClick={() => handleColorChange('black')}>Black</button>

      </div>
    </div>
  );
}

export default App;
