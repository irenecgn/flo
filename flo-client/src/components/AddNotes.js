import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import { addNewNote, getJourneysById } from '../Utilities/Service';
import Notes from './Notes';

const Userbar = styled.div`
  height: 800px;
  border-radius: 8px;
  background-image: linear-gradient(to top, #c2e1ef 0%, #e3f5fd 100%);

  border: rgb(250, 250, 250) 0.2em solid;
`;

const NotesForm = styled.form``;

const TypeNote = styled.input`
  background-color: rgba(250, 250, 250, 0.5);

  width: 700px;
  margin: 24px;
  color: #090909;
  padding: 8px;
  font-size: 18px;
  border-radius: 0.5em;
  border: none;
`;

const AddNoteButton = styled.button`
  border-radius: 8px;
  border: none;
  background-color: rgba(250, 250, 250, 0.5);
  font-size: 22px;
  font-weight: 600;
  padding: 8px;
`;

function AddNotes({ journey, setJourney }) {
  const [note, setNote] = useState([]);

  // const journeyData = await

  useEffect(() => {
    setNote(journey.notes);
  }, [journey.notes]);

  async function handleSubmit(event) {
    event.preventDefault();
    const noteInput = event.target.note.value;
    // TODO make sure that the addNewNote return only the new Note added
    // data must be {note: newInput, _id: dataBa}
    //const newNote = await addNewNote(journey, noteInput);
    const newNote = await addNewNote(journey._id, noteInput);
    setNote(newNote.notes);
    event.target.reset();
  }

  return (
    <Userbar>
      <NotesForm onSubmit={handleSubmit}>
        <TypeNote type='text' name='note'></TypeNote>
        <AddNoteButton type='submit'>Add note ✏️</AddNoteButton>
      </NotesForm>
      <Notes note={note}></Notes>
    </Userbar>
  );
}

export default AddNotes;
