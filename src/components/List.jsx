import { useContext, useEffect } from 'react';
import ListContext from './ListContext';
import '../styles/List.css';

export default function List({ children }) {

    const { items } = useContext(ListContext);

    return (
        <ul>
            { items }
        </ul>
    );

}
