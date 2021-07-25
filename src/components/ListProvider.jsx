import { useState } from 'react';
import ListContext from './ListContext';
import ListItem from './ListItem';


export default function ListProvider({ children }) {

    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, 
            <ListItem id={items.length}>
                {item}
            </ListItem>
        ]);
    };

    const removeItem = (index) => {
        // Update values
        let newItems = items.filter((item) => items.indexOf(item) !== index);
        // Update indexes
        setItems(newItems);
    }

    return (
        <ListContext.Provider value={{items, addItem, removeItem}}>
            { children }
        </ListContext.Provider>
    );
}