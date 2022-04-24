import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './NotesForm.css'

NotesForm.propTypes = {
    add: PropTypes.func.isRequired
};

function NotesForm({add}) {

    const[stateInput, setState] = useState('')

    const handleChangeInput = (evt)=>{
        setState(evt.target.value);
    }

    const addSubmit = (e)=>{
        e.preventDefault();
        if(stateInput!==''){
            add(stateInput)
            setState('')
        }
    }

    return (
        <form className='notes-form' onSubmit={addSubmit}>
            <textarea value={stateInput} onChange={handleChangeInput}/>
            <button/>
        </form>
    );
}

export default NotesForm;