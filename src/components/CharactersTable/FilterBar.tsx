import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';
import SearchBar from "./SearchBar";
import GenderSelect from "./GenderSelect";
import PageSizeSelect from "./PageSizeSelect";

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
    setPageSize: Dispatch<SetStateAction<number>>;
}

const FilterBar = ({ searchText, handleInput, setCategory, setPageSize }: FilterBarType) => {
    return (
        <Wrapper>
            <SearchBar
                searchText={searchText}
                handleInput={handleInput}
            />
            <GenderSelect
                setCategory={setCategory}
            />
            <PageSizeSelect
                setPageSize={setPageSize}
            />
        </Wrapper>
    )
}

export default FilterBar;