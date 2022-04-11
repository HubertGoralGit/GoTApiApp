import React, { useState, useEffect } from 'react';
import { fetchCharacters, fetchHouses } from "../api/api";
import { CharacterTypes, HouseTypes } from "../types/apiTypes";

const App = () => {
  const [data, setData] = useState<HouseTypes>();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchHouses();
      if (res?.data) {
        setData(res.data);
      }
    };

    fetchApi();
  }, [])

  console.log(data);

  return (
    <div className="App">
    </div>
  );
}

export default App;
