import React, {Component} from 'react';
import {API} from "../../API/API";
import NotesForm from "../NotesForm/NotesForm";
import './Notes.css'
import NotesList from "../NotesList/NotesList";

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state= {notes:[]}
        this.api = new API();

    }

    load(){
        this.api
            .load()
            .then(res=>this.setState((state)=>state.notes = res));
    }

    addNode = (text)=>{
        this.api.add(text).then(()=>this.load())
    }

    deleteNote = (id)=>{
        this.api.delete(id).then(()=>this.load());

    }

    update=()=>{
        this.load()
    }

    componentDidMount() {
        this.load();
    }

    render() {
        return (
            <div className='notes'>
                <div className="notes__header">
                    <h1 className="notes__title">Notes</h1>
                    <div className="notes__update" onClick={this.update}/>
                </div>
                <NotesList notes={this.state.notes} deleteSub={this.deleteNote}/>
                <NotesForm add={this.addNode}/>
            </div>
        );
    }
}

export default Notes;