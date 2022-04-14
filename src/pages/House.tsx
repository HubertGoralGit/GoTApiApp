import React, { useState, useEffect } from 'react';
import { fetchHouses } from "../api/api";
import { HouseTypes } from "../types/apiTypes";
import { useLocation } from "react-router-dom"

const House = () => {
    const [data, setData] = useState<HouseTypes[]>([]);
    const location = useLocation().pathname.split("/").pop();

    const fetchApi = async () => {
        // @ts-ignore
        const res = await fetchHouses(location);
        if (res?.data) {
            setData(res.data);
        }
    };

    useEffect( () => {
        fetchApi()
    }, []);

    return (
        <h1>House</h1>
    )
}

export default House;