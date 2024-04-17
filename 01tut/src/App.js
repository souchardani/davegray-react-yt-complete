////npx json-server -p 3500 -w data/db.json
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";

function App() {
  const API_URL =
    "https://basic-restapi-node-express.onrender.com/items";
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive Expected Data");
        let listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    (() =>  fetchItems())();
  }, []);

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id == id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({checked: myItem[0].checked}),
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const addItem = async (item) => {
    //si hay items, el id es el ultimo +1, si no es 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    //const itemDelete = listItems.filter((item) => item.id == id);
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
    const deleteOptions ={
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
