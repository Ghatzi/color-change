const InputValue = ({ color, setColor }) => {
  return (
    <form className="formInput">
      <label htmlFor="addColorName">Add Color Name</label>
      <input
        type="text"
        placeholder="Add color name"
        id="addColorName"
        required
        autoFocus
        value={color}
        onChange={e => setColor(e.target.value)}
      />
    </form>
  );
};

export default InputValue;
