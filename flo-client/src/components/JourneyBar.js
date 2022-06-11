import styled from 'styled-components';
import React from 'react';
import irene from '../images/irenecgn.png';
import { addNewNote } from '../Utilities/Service';
import { useState } from 'react';

const Userbar = styled.div`
  height: 800px;
  border-radius: 8px;
  ${
    '' /* background-image: linear-gradient(to top, #fff1eb 0%, #c2e1ef 100%); */
  }
  background-image: linear-gradient(to top, #c2e1ef 0%, #7fabf7 100%);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
`;

const ProfilePicture = styled.img`
  height: 72px;
  width: 72px;
  margin-top: 6%;
  border: 1px solid #bed6ef;
  border-radius: 50%;
  padding: 2px;
  margin: 20px;
`;

const Name = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  align-self: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  border: rgb(250, 250, 250) 0.2em solid;
`;

const Notes = styled.form`
  border: 1px solid red;
`;

const Addnote = styled.input`
  width: 420px;
  margin: 24px;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
`;

const Addtrip = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #fcfcfc;
  transition: all 0.3s;
  width: 420px;
  margin: 24px;
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
      <Info>
        <ProfilePicture src={irene} alt='Profile picture' />
        <Name> Irene </Name>
      </Info>
      <Notes onSubmit={handleSubmit}>
        <Addnote type='text' name='note'></Addnote>
        <button>Add note ✏️</button>
        <ul>{notes && notes.map((el) => <li key={el.id}>{el.notes}</li>)}</ul>
      </Notes>
      <Addtrip>Back to map </Addtrip>
    </Userbar>
  );
}

export default JourneyBar;
