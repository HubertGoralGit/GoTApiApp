import React, {useState, useEffect, useMemo} from 'react';
import { fetchCharacters, fetchHouses } from "../api/api";
import { CharacterTypes, HouseTypes } from "../types/apiTypes";
import CharactersTable from "../components/CharactersTable";


const App = () => {
  const [data, setData] = useState<CharacterTypes[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchCharacters();
      if (res?.data) {
        setData(res.data);
      }
    };

    fetchApi();
  }, [])

  return (
    <div className="App">
      {/*<CharactersTable*/}
      {/*  data={data}*/}
      {/*/>*/}
      <CharactersTable data={data}/>
    </div>
  );
}

export default App;
