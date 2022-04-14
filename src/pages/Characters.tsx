import React, {useState, useEffect, ChangeEvent} from 'react';
import { fetchCharacters } from "../api/api";
import { CharacterTypes } from "../types/apiTypes";
import CharactersTable from "../components/CharactersTable/CharactersTable";
import FilterBar from "../components/CharactersTable/FilterBar";
import Pagination from "../components/CharactersTable/Pagination";

const Characters = () => {
  const [data, setData] = useState<CharacterTypes[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);

    const fetchApi = async () => {
        // @ts-ignore
        const res = await fetchCharacters(pageNumber);
        if (res?.data) {
            setData(res.data);
        }
    };

  useEffect(() => {
    fetchApi();
  }, [])

    const handlePageChange = async (number: number) => {
        setPageNumber(number)
        await fetchApi();
    }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const bySearch = (character: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    if (searchText !== '') {
      return Object.values(character).join('').toLowerCase().includes(searchText.toLowerCase());
    } else {
      return data;
    }
  }

 const byCategory = (character: string[] | null | undefined) => {
    if (category && category !== 'any') {
        // @ts-ignore
        return character.toLowerCase() === category.toLowerCase();
    } else return data;
 }

  const filteredList = () => {
    return data
        .filter(character => bySearch(character.culture))
        .filter(character => byCategory(character.gender))
  }

  return (
    <div className="App">
      <FilterBar
        handleInput={handleInput}
        searchText={searchText}
        setCategory={setCategory}
      />
      <CharactersTable data={filteredList() ? filteredList() : data}/>
        <Pagination
            pageNumber={pageNumber}
            handlePageChange={handlePageChange}
        />
    </div>
  );
}

export default Characters;
