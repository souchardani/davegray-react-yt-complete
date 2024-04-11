import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveitems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveitems(listItems);
  };

  const addItem = (item) => {
    //si hay items, el id es el ultimo +1, si no es 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setAndSaveitems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
    setAndSaveitems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
