import React from 'react';
import { columns } from "../../utils/colums";
import styled from 'styled-components';
import { getAlive, getName } from "./DataFunctions";
import { Link } from 'react-router-dom';
import Loader from "./Loader";

const StyledTable = styled.table`
  border: 3px solid #000000;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  
  td, th {
    border: 1px solid #000000;
    padding: 5px 4px;
  }
  
  tbody td {
      font-size: 13px;
  }
  
  thead {
    background: #CFCFCF;
    border-bottom: 3px solid #000000
  }
  
  thead th {
    font-size: 15px;
    font-weight: bold;
    color: #000000;
    text-align: left;
  }
`

const CharactersTable = ({ data }: any) => {

    if (!data.length) {
        return <Loader />
    }

    return (
        <StyledTable>
            <thead>
                {columns.map((column) => {
                    return (
                        <th>{column.name}</th>
                    )
                })}
            </thead>
            <tbody>
                {data.map((item: any) => {
                    return (
                        <tr data-testid="characters-table-row">
                            <td>
                                {getName(item.name, item.aliases)}
                            </td>
                            <td>
                                {getAlive(item.born, item.died)}
                            </td>
                            <td>
                                {item.gender}
                            </td>
                            <td>
                                {item.culture ? item.culture : 'Unknown'}
                            </td>
                            <td>
                                {item.allegiances.length ? (<Link to={`house/${item.allegiances[0].split("/").pop()}`}>{item.allegiances}</Link>) : 'No allegiances'}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </StyledTable>
    )
}

export default CharactersTable;