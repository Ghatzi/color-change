import colorNames from 'colornames';

const InputValue = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <form className="form-input" onSubmit={e => e.preventDefault()}>
      <label htmlFor="addColorName">Add Color Name</label>
      <input
        type="text"
        placeholder="Add color name"
        id="addColorName"
        required
        autoFocus
        value={colorValue}
        onChange={e => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputValue;
