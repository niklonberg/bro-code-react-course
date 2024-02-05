interface ListItem {
  id: number;
  name: string;
  calories: number;
}

interface ListReusableProps {
  category: string;
  items: ListItem[];
}

function ListReusable(props: ListReusableProps) {
  const { category = "Category", items = [] } = props;

  const listItems = items.map((item: ListItem) => (
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

export default ListReusable;
