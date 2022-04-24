import React from 'react';
import PropTypes from 'prop-types';
import Note from "../Note/Note";
import './NoteList.css'

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
};

function NotesList({notes, deleteSub}) {
    return (
        <ul className='notes-list'>
            {notes.map(item=>
                <Note key={item.id} note={item} deleteSubmit={deleteSub}/>
            )}
        </ul>
    );
}
export default NotesList;