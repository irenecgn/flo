import styled from 'styled-components';
import React from 'react';

import { addNewNote } from '../Utilities/Service';
import { useState } from 'react';

const Userbar = styled.div`
  height: 800px;
  border-radius: 8px;
  background-image: linear-gradient(to top, #c2e1ef 0%, #e3f5fd 100%);

  border: rgb(250, 250, 250) 0.2em solid;
`;

const Notes = styled.form``;

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

const AddNote = styled.button`
  border-radius: 8px;
  border: none;
  background-color: rgba(250, 250, 250, 0.5);
  font-size: 22px;
  font-weight: 600;
  padding: 8px;
`;

function JourneyBar({ id }) {
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const noteInput = {
      note: event.target.note.value,
      _id: id,
    };
    await addNewNote(noteInput);
    setNotes(noteInput);
    event.target.reset();
  };

  return (
    <Userbar>
      <Notes onSubmit={handleSubmit}>
        <TypeNote type='text' name='note'></TypeNote>
        <AddNote type='submit'>Add note ✏️</AddNote>
        <ul>{notes && notes.map((el) => <li key={el.id}>{el.notes}</li>)}</ul>
      </Notes>
    </Userbar>
  );
}

export default JourneyBar;
