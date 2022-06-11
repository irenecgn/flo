import styled from 'styled-components';
import React from 'react';
import irene from '../images/irenecgn.png';

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
  border: 1px solid #f3c4c7;
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

const Notes = styled.div`
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
  ${'' /* border: 1px solid #f7f5f5; */}
  transition: all 0.3s;
  ${'' /* box-shadow: 1px 1px 8px #c5c5c5, -1px -1px 12px #f5f5f5; */}
  width: 420px;
  margin: 24px;
`;
function JourneyBar() {
  return (
    <Userbar>
      <Info>
        <ProfilePicture src={irene} alt='Profile picture' />
        <Name> Irene </Name>
      </Info>
      <Notes>
        <Addnote type='text' name='note'></Addnote>
        <button>Add note ✏️</button>
      </Notes>
      <Addtrip>Back to map </Addtrip>
    </Userbar>
  );
}

export default JourneyBar;
