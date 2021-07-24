import { useState, useContext } from 'react';
import ListContext from './ListContext';
import '../styles/ListAddItemForm.css'

export default function ListAddItemForm() {
    const { addItem } = useContext(ListContext);

    const [value, setValue] = useState('');

    return (
        <form onSubmit={(e) => { e.preventDefault(); }}>
            <input type="text" value={value} placeholder="Adicione algo!"
                   onChange={(e) => { setValue(e.target.value) }}/>
            <button type="submit" onClick={() => {
                if (value.trim() !== '') {
                    addItem(value);
                } 
                setValue('');
            }}>
                +
            </button>
        </form>
    );
}