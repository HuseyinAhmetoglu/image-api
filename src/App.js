import logo from "./logo.svg";
import "./App.css";
import SearchHeader from "./component/SearchHeader";
import searchImage from "./component/Api";
import { useState } from "react";
import ImageList from "./component/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSearch = async (term) => {
    const result = await searchImage(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
