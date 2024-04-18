import "./App.css";
import ButtonList from "./ButtonList";
import PostList from "./PostList";
import { useEffect, useState } from "react";

function App() {
  const [dataList, setDataList] = useState([]);

  const REQUEST_URL = "https://jsonplaceholder.typicode.com";

  const defaultUrl = `${REQUEST_URL}/users`;
  const petitionToURL = async (RequestUrl, optionsObj) => {
    console.log("execution petitiontoURl");
    const response = await fetch(RequestUrl);
    const data = await response.json();
    setDataList(data);
  };
  useEffect(() => {
    petitionToURL(defaultUrl);
  }, []);

  const handleClick = async (dataRequested) => {
    const requestUrl = `${REQUEST_URL}/${dataRequested}`;
    await petitionToURL(requestUrl);
  };

  return (
    <div className="App">
      <ButtonList handleClick={handleClick} />
      <PostList postArray={dataList} />
    </div>
  );
}

export default App;
