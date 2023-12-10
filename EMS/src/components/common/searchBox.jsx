import Input from './input';
const SearchBox = ({ value, onChange }) => (
  <Input
    name="search"
    value={value}
    placeholder="Search..."
    onChange={(e) => onChange(e.currentTarget.value)}
  />
);

export default SearchBox;
