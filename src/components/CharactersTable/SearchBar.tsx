import React from 'react';
import styled from 'styled-components'

const SearchInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  font-size: 25px;
`

interface SearchBarType {
    searchText: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchText, handleInput }: SearchBarType) => {
    return (
        <SearchInput
            placeholder='Search by culture'
            onChange={handleInput}
            value={searchText}
        />
    )
}

export default  SearchBar;