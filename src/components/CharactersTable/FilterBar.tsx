import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';
import SearchBar from "./SearchBar";
import GenderSelect from "./GenderSelect";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  
  input {
    margin-right: 20px;
  }
`

interface FilterBarType {
    searchText: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setCategory: Dispatch<SetStateAction<string>>;
}

const FilterBar = ({ searchText, handleInput, setCategory }: FilterBarType) => {
    return (
        <Wrapper>
            <SearchBar
                searchText={searchText}
                handleInput={handleInput}
            />
            <GenderSelect
                setCategory={setCategory}
            />
        </Wrapper>
    )
}

export default FilterBar;