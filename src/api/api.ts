import axios from 'axios';

const url = 'https://anapioficeandfire.com/api';

export const fetchCharacters = async (page: string) => {
    return axios.get(
        `${url}/characters?page=${page}&pageSize=25`
    )
}

export const fetchHouses = async (id: string) => {
    return axios(
        `${url}/houses/${id}`
    )
}