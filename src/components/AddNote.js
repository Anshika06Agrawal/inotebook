import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {

    const context = useContext(noteContext);

    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Added succesfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (

        <div className="container my-3">

            <h2 style={{ fontWeight: "Bold" }}>Create new Note</h2>
            <p className="mb-4">Add  a new note with your info / notes</p>

            <form action="">

                <div className="container">

                    <div className="mb-3">
                        <h4><label htmlFor="title" className="form-label">Title</label></h4>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />

                    </div>

                    <div className="mb-3">
                        <h4><label htmlFor="description" className="form-label">Description</label></h4>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                    </div>

                    <div className="mb-3">
                        <h4><label htmlFor="tag" className="form-label">Tag</label></h4>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                    </div>

                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>

                </div>

            </form>

        </div>


    )
}

export default AddNote