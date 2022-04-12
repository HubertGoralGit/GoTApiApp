import React from 'react';
import { columns } from "../utils/colums";
import styled from 'styled-components';

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

    const getName = (
        name: string,
        aliases: string[] | null
    ): string => {
        let nameRow = '';
        let fullName = [];

        if (name) {
            fullName.push(name);
        }

        if (aliases && aliases.length) {
            aliases.forEach((alias) => {
                fullName.push(alias);
            })
        }

        nameRow = fullName.join(',');

        return nameRow;
    }

    const getAlive = (
        born: string,
        died: string,
    ): string => {
        let isAlive = "";

        if (!born && !died) {
            isAlive = "Unknown";
        } else if (!born && died) {
            isAlive = "No";
        } else if (born && died) {
            const bornYear = born.match(/\d+/);
            const diedYear = died.match(/\d+/);

            if (bornYear && bornYear.length > 0 && diedYear && diedYear.length > 0) {
                const diedAge = parseInt(diedYear[0]) - parseInt(bornYear[0]);
                isAlive = `No, died at ${diedAge} years old`;
            }
        } else if (born && !died) {
            isAlive = "Yes";
        }

        return isAlive;
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
                                <td>{item.allegiances}</td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </StyledTable>
    )
}

export default CharactersTable;