import styled from 'styled-components';
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

const Info = styled.div`
  display: flex;
  flex-direction: row;
  border: rgb(250, 250, 250) 0.2em solid;
`;

const Name = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  align-self: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
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

const Addtrip = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #fcfcfc;
  border: 1px solid #f7f5f5;
  transition: all 0.3s;
  box-shadow: 1px 1px 12px #c5c5c5, -1px -1px 12px #f5f5f5;
  width: 420px;
  margin: 24px;
`;

const UserTravel = styled.div`
  display: grid;
  justify-content: start;
  padding: 0.7em 1.7em;
  border: rgb(250, 250, 250) 0.2em solid;
`;

const Travelscroll = styled.div`
  width: 420px;
  height: 200px;
  border: 2px solid white;
  border-radius: 4px;
  overflow: scroll;
`;

const SideBar = () => {
  return (
    <Userbar>
      <Info>
        <ProfilePicture src={irene} alt='Profile picture' />
        <Name> Irene </Name>
      </Info>
      <UserTravel>
        <h2>Your Travel</h2>
        <Travelscroll>
          <p>San Diego</p>
          <p>Los Angeles</p>
          <p>Las Vegas</p>
          <p>San Francisco</p>
          <p>Las Vegas</p>
          <p>San Francisco</p>
        </Travelscroll>
        <h2>Next travel: </h2>
        <Travelscroll>
          <p>Marrakesh</p>
          <p>London</p>
          <p>Rio de Janeiro</p>
        </Travelscroll>
      </UserTravel>
      <Addtrip>Add a trip 📍</Addtrip>
    </Userbar>
  );
};

export default SideBar;
