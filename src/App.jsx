import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [hits, setHits] = useState([]);
  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos").then((res) => {
      setHits(res.data.hits);
    });
  }, []);
  return <header></header>;
};

export default App;
