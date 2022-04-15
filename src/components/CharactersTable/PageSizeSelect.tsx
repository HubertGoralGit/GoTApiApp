import React, {Dispatch, SetStateAction} from 'react';

interface PageSizeSelectType {
    setPageSize: Dispatch<SetStateAction<number>>;
}

const PageSizeSelect = ({ setPageSize }: PageSizeSelectType) => {
    return (
        <select onChange={(e) => setPageSize(parseInt(e.target.value))}>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
        </select>
    )
}

export default PageSizeSelect;