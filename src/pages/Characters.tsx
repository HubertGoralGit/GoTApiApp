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
  const [pageSize, setPageSize] = useState<number>(25)

    const fetchApi = async () => {
        const res = await fetchCharacters(pageNumber, pageSize);
        if (res?.data) {
            setData(res.data);
        }
    };

  useEffect(() => {
    fetchApi();
  }, [pageSize])

    const handlePageChange = async (number: number) => {
        setPageNumber(number);
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

 const byCategory = (character: (string[] | null | undefined) | string) => {
    if (category && category !== 'any') {
        if (character) {
            return typeof character === "string" && character?.toLowerCase() === category.toLowerCase();
        }
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
        setPageSize={setPageSize}
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
