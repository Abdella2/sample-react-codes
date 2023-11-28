function ListGroup({
  items,
  value,
  label,
  selectedItem,
  onItemSelectionChange
}) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[label]}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
          onClick={() => onItemSelectionChange(item)}>
          {item[label]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  label: 'name',
  value: '_id'
};

export default ListGroup;
