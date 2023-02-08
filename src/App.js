import { useState } from 'react';
import ColorBox from './ColorBox';
import InputValue from './InputValue';

const App = () => {
  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorBox color={color} />
      <InputValue color={color} setColor={setColor} />
    </div>
  );
};

export default App;
