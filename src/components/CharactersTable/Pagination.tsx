import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

interface PaginationType {
    setPageNumber: Dispatch<SetStateAction<number>>
    pageNumber: number;
    handlePageChange(number: number): Promise<void>;
}

const Pagination = ({ setPageNumber, pageNumber, handlePageChange }: PaginationType) => {

    return (
        <div>
            <button disabled={pageNumber === 1} onClick={() => handlePageChange(1)}>first</button>
            <button disabled={pageNumber === 1} onClick={() => handlePageChange(pageNumber - 1)}>prev</button>
            <button disabled={pageNumber === 214} onClick={() => handlePageChange(pageNumber + 1)}>next</button>
            <button disabled={pageNumber === 214} onClick={() => handlePageChange(214)}>last</button>
        </div>
    )
}

export default Pagination;