import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // Hook returns an array [state, functiontoChangeState]

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
