import { useContext } from 'react';
import { Icon } from 'react-icons-kit';
import { androidDelete } from 'react-icons-kit/ionicons/androidDelete';
import { iosPlusEmpty } from 'react-icons-kit/ionicons/iosPlusEmpty';
import ListContext from './ListContext';
import '../styles/DeleteListItemButton.css'

export default function DeleteListItemButton({ id }) {

    const { removeItem } = useContext(ListContext);

    return (
        <button className="btn-delete-list-item" 
                onClick={(e) => { 
                    removeItem(id);
                }}>
            <Icon icon={androidDelete} />
        </button>
    );
}