import React from 'react';
import styled from 'styled-components';
import { deleteNoteById } from '../Utilities/Service';
import { Trash } from '@mountain-ui/icons';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  gap: 8px;
`;

const NotesCard = styled.div`
  border-radius: 4px;
  border: rgb(250, 250, 250) 2px solid;
  width: 240px;
  max-width: 200px;
  height: 170px;
  border-radius: 8px;
  border: rgb(250, 250, 250) 0.2em solid;
  padding: 4px;
  margin-left: 8px;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const NoteText = styled.p`
  margin: 4px;
`;

const ButtonDelete = styled.button`
  border: none;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  margin: 4px;
  border-radius: 40px;
  background-color: rgba(250, 250, 250, 0.9);
`;

function Notes({ journey, note, setNote }) {
  async function deleteNote(id) {
    await deleteNoteById(journey, id);
    return setNote((prevState) => {
      return prevState.filter((el) => el._id !== id);
    });
  }

  return (
    <Container>
      {note &&
        note.map((el) => {
          return (
            <NotesCard key={el._id}>
              <NoteText>{el.note}</NoteText>
              <ButtonDelete onClick={() => deleteNote(el._id)} value={el._id}>
                <Trash color='#737577'></Trash>
              </ButtonDelete>
            </NotesCard>
          );
        })}
    </Container>
  );
}

export default Notes;
