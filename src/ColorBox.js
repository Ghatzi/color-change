const ColorBox = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#fff'
      }}
    >
      <p>{colorValue ? colorValue : 'Empty Value'}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

ColorBox.defaultProps = {
  colorValue: 'Empty Color Value'
};

export default ColorBox;
