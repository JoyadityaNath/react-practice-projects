import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
  ]);

  const handleAdd = () => {
    return setItems((prevItems) => [
      ...prevItems,
      { id: prevItems.length, name: `Item ${prevItems.length + 1}` },
    ]);
  };
  const handleRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id}>{item.name}</li>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
