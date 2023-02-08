import { useState } from 'react';
import ColorBox from './ColorBox';
import InputValue from './InputValue';

const App = () => {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputValue
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
};

export default App;
