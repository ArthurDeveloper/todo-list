import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_check_box_outline_blank } from 'react-icons-kit/md/ic_check_box_outline_blank'
import '../styles/AssignmentDoneCheckbox.css';

export default function AssignmentDoneCheckbox({ onCheck }) {

    return (
        <input type="checkbox" 
               className="assignment-done-checkbox"
               onClick={onCheck} />
    )
}