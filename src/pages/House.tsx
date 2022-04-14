import React, { useState, useEffect } from 'react';
import { fetchHouses } from "../api/api";
import { HouseTypes } from "../types/apiTypes";
import { useLocation, Link } from "react-router-dom"
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const List = styled.ul`
  text-align: center;
  list-style: none;
`

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
`

const House = () => {
    const [data, setData] = useState<HouseTypes>();
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
        <Wrapper>
            <Link to='/'>
                <BackButton>back</BackButton>
            </Link>
            <h1>{data?.name}</h1>
            <List>
                {data?.region && (<li>Region: {data.region}</li>)}
                {data?.coatOfArms && (<li>Coat of Arms: {data.coatOfArms}</li>)}
                {data?.words && (<li>Words: {data.words}</li>)}
                {(data?.titles && data.titles.length > 1) && (<li>Titles: {data.titles.join(", ")}</li>)}
                <li>Has died out: {data?.diedOut ? 'yes' : 'no'}</li>
                <li>Has overlord: {data?.overlord ? 'yes' : 'no'}</li>
                <li>Number of Cadet Branches: {data?.cadetBranches && data?.cadetBranches.length}</li>
            </List>
        </Wrapper>
    )
}

export default House;