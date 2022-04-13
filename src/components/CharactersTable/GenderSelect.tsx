import React, {Dispatch, SetStateAction} from 'react';

interface GenderSelectType {
    setCategory: Dispatch<SetStateAction<string>>;
}

const GenderSelect = ({ setCategory }: GenderSelectType) => {
    return (
        <select onChange={e => setCategory(e.target.value)}>
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    )
}

export default  GenderSelect;