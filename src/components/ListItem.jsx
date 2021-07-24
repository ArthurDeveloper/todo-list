import { useState } from 'react';
import DeleteListItemButton from './DeleteListItemButton';
import AssignmentDoneCheckbox from './AssignmentDoneCheckbox';
import '../styles/ListItem.css';

export default function ListItem(props) {
    const { children } = props;
    const [id, setId] = useState(props.id);
    const [completed, setCompleted] = useState(false);

    return (
        <li style={{
            backgroundColor: (completed ? '#00FF00' : '#FF0000'),
            color: '#FFFFFF',
            textDecoration: (completed ? 'line-through' : 'none'),
            transition: 'opacity 500ms',
            opacity: (completed ? 0.7 : 1) 
        }}>
            {children}
            <div className="list-item-buttons">
                <AssignmentDoneCheckbox id={id} 
                                        onCheck={(e) => { 
                                            setCompleted(!completed);
                                        }}/>
                <DeleteListItemButton id={id} />
            </div>
        </li>
    );
}