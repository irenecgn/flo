import React from 'react';

function Notes({ note }) {
  return (
    <div>
      {note &&
        note.map((el) => {
          return (
            <div>
              <p>{el.note}</p> <button>X</button>
            </div>
          );
        })}
    </div>
  );
}

export default Notes;
