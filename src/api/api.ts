import axios from 'axios';

const url = 'https://anapioficeandfire.com/api';

export const fetchCharacters = async (page: string) => {
    return axios.get(
        `${url}/characters?page=${page}&pageSize=25`
    )
}

export const fetchHouses = async () => {
    return axios(
        `${url}/houses`
    )
}