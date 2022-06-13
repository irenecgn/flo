import React from 'react';
import { deleteNoteById } from '../Utilities/Service';

function Notes({ journey, note, setNote }) {
  async function deleteNote(event) {
    const delEvent = event.target.value;
    await deleteNoteById(journey, delEvent);
    return setNote((prevState) => {
      return prevState.filter((el) => el._id !== delEvent);
    });
  }

  return (
    <div>
      {note &&
        note.map((el) => {
          return (
            <div>
              <p key={el}>{el.note}</p>
              <button onClick={deleteNote} value={el._id}>
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Notes;
