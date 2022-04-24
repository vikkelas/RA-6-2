import React from 'react';
import PropTypes from 'prop-types';
import './Note.css'

Note.propTypes = {
    note: PropTypes.object.isRequired,
};

function Note({note, deleteSubmit}) {

    const deleteEl = (evt)=>{
        if(evt.target.id==='btn-delete'){
            deleteSubmit(evt.currentTarget.id)
        }

    }

    return (
        <li className='note' id={note.id} onClick={deleteEl}>
            <div id='btn-delete' className="note__btn"/>
            {note.text}
        </li>
    );
}

export default Note;