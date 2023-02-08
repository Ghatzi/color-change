const ColorBox = ({ color }) => {
  return (
    <div className="colorBox" style={{ backgroundColor: color }}>
      <p>{color ? color : 'Empty Value'}</p>
    </div>
  );
};

export default ColorBox;
