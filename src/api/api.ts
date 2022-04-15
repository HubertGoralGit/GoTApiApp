import axios from 'axios';

const url = 'https://anapioficeandfire.com/api';

export const fetchCharacters = async (page: number, size: number) => {
    return axios.get(
        `${url}/characters?page=${page}&pageSize=${size}`
    ).catch((error) => {
        if (error.response) {
            alert(error);
        }
    })
}

export const fetchHouses = async (id: string) => {
    return axios(
        `${url}/houses/${id}`
    )
}