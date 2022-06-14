import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import { addNewNote } from '../Utilities/Service';
import Notes from './Notes';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  border-radius: 8px;
  gap: 8px;
  padding: 16px;
  height: 300px;
  min-height: 300px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: rgb(250, 250, 250) 2px solid;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 16px;
  width: 230px;
  height: min-content;
  padding: 16px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const TypeNote = styled.input`
  height: 30px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  gap: 8px;
  background-color: rgba(250, 250, 250, 0.9);
`;

const AddNoteButton = styled.button`
  width: 180px;
  border-radius: 4px;
  border: none;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  background-color: rgba(250, 250, 250, 0.9);
  font-size: 12px;
  font-weight: 600;
  padding: 8px;
  margin: 12px;
`;

function AddNotes({ journey, notes, setJourney }) {
  const [note, setNote] = useState([]);

  useEffect(() => {
    setNote(notes);
  }, [notes]);

  async function handleSubmit(event) {
    event.preventDefault();
    const noteInput = event.target.note.value;
    const newNote = await addNewNote(journey._id, noteInput);
    setNote(newNote.notes);
    event.target.reset();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TypeNote type='text' name='note' required></TypeNote>
        <AddNoteButton type='submit'>Add note</AddNoteButton>
      </Form>
      <Notes journey={journey._id} note={note} setNote={setNote}></Notes>
    </Container>
  );
}

export default AddNotes;
