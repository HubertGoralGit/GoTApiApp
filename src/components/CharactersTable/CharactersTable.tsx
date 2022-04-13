import React from 'react';
import { columns } from "../../utils/colums";
import styled from 'styled-components';
import { getAlive, getName } from "./DataFunctions";

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
                        <>
                            <tr>
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
                                    {item.allegiances.length ? item.allegiances : 'No allegiances'}
                                </td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </StyledTable>
    )
}

export default CharactersTable;