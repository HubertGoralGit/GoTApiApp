import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharactersTable from "../components/CharactersTable/CharactersTable";
import {BrowserRouter} from "react-router-dom";

const mockData = [
    {
        url: 'https://www.abc.com',
        name: 'ala',
        culture: 'aaa',
        born: 'abc',
        died: 'abc',
        titles: ['abc1'],
        aliases: ['abc'],
        gender: 'male',
        father: 'no',
        mother: 'yes',
        spouse: 'as',
        allegiances: ['abc'],
        books: ['abc'],
        povBooks: ['abc'],
        tvSeries: ['abc'],
        playedBy: ['abc'],
    },
    {
        url: 'https://www.abc.com',
        name: 'ala',
        culture: 'bbb',
        born: 'abc',
        died: 'abc',
        titles: ['abc1'],
        aliases: ['abc'],
        gender: 'male',
        father: 'no',
        mother: 'yes',
        spouse: 'as',
        allegiances: ['abc'],
        books: ['abc'],
        povBooks: ['abc'],
        tvSeries: ['abc'],
        playedBy: ['abc'],
    },
];



describe("Characters Table", () => {
    it ('render loader when there is no data', async() => {
        render(<CharactersTable data={[]}/>);

        await waitFor(() => {
            expect(screen.getByTestId('loader')).toBeInTheDocument();
        });
    });
    it ('render characters table when fetched api', async() => {
        render(<CharactersTable data={mockData}/>, {wrapper: BrowserRouter});

        await waitFor(() => {
            expect(screen.getAllByTestId('characters-table-row')[0]).toBeInTheDocument();
        });
    })
})
