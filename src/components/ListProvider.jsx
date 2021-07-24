import { useState } from 'react';
import ListContext from './ListContext';
import DeleteListItemButton from './DeleteListItemButton';
import AssignmentDoneCheckbox from './AssignmentDoneCheckbox';

export default function ListProvider({ children }) {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, 
            <li id={`item-${items.length}`}>
                {item}
                <div className="list-item-buttons">
                    <AssignmentDoneCheckbox />
                    <DeleteListItemButton key={items.length}/>
                </div>
            </li>
        ]);
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <ListContext.Provider value={{items, addItem, removeItem}}>
            { children }
        </ListContext.Provider>
    );
}