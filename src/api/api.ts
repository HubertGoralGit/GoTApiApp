import axios from 'axios';

const url = 'https://anapioficeandfire.com/api';

export const fetchCharacters = async () => {
    return axios.get(
        `${url}/characters`
    )
}

export const fetchHouses = async () => {
    return axios(
        `${url}/houses`
    )
}