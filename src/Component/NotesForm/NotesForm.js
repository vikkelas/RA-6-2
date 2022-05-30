import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './NotesForm.css'

NotesForm.propTypes = {
    add: PropTypes.func.isRequired
};

function NotesForm({add}) {

    const[stateForm, setState] = useState({
        text: ''
    })

    const handleChangeInput = (evt)=>{
        const {name, value} = evt.target;
        setState(prevState => ({...prevState, [name]: value}));
    }

    const addSubmit = (e)=>{
        e.preventDefault();
        if(stateForm.text!==''){
            add(stateForm)
            setState({
                text: '',
            })
        }
    }

    return (
        <form className='notes-form' onSubmit={addSubmit}>
            <textarea name='text' value={stateForm.text} onChange={handleChangeInput}/>
            <button/>
        </form>
    );
}

export default NotesForm;