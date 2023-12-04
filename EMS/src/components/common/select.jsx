import PropTypes from 'prop-types';
const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <select className="form-select" name={name} id={name} {...rest}>
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
