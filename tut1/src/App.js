import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[item.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItes = [...items, myNewItem];
    setAndSaveItems(listItes);
    localStorage.setItem("shoppinglist", JSON.stringify(listItes));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // addItem
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
        newItem={newItem}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
