function Input({
  name,
  label,
  value,
  type = 'text',
  autoFocus = false,
  onChange
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
      />
    </div>
  );
}

export default Input;
