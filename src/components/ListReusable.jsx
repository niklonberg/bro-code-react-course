import PropTypes from "prop-types";
import { string } from "prop-types";
import { number } from "prop-types";

function ListReusable(props) {
  // const { category, items } = props;
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

ListReusable.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
ListReusable.defaultProps = {
  category: "Category",
  items: [],
};

export default ListReusable;
