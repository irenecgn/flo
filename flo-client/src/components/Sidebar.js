import styled from 'styled-components';
import irene from '../images/irenecgn.png';
import BlurredBox from './BlurredBox';

const Userbar = styled(BlurredBox)`
  width: 300px;
  top: 88px;
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
  color: #25292d;
`;

const ProfilePicture = styled.img`
  height: 72px;
  width: 72px;
  margin-top: 8%;
  border: 1px solid #bed6ef;
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
  width: 300px;
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

const Travel = styled.p`
  margin: 8px;
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  align-self: center;
  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #25292d;
`;

const SideBar = () => {
  return (
    <Userbar>
      {/* <Info>
        <ProfilePicture src={irene} alt='Profile picture' />
        <Name> Irene </Name>
      </Info>
      <UserTravel>
        <h2>Your Travel:</h2>
        <Travelscroll>
          <Travel>San Diego</Travel>
          <Travel>Los Angeles</Travel>
          <Travel>Las Vegas</Travel>
          <Travel>San Francisco</Travel>
          <Travel>Berlin</Travel>
          <Travel>Barcelona</Travel>
          <Travel>Tokio</Travel>
        </Travelscroll>
        <h2>Next travel: </h2>
        <Travelscroll>
          <Travel>Marrakesh</Travel>
          <Travel>London</Travel>
          <Travel>Rio de Janeiro</Travel>
        </Travelscroll>
      </UserTravel>
      <Addtrip>Add a trip 📍</Addtrip> */}
    </Userbar>
  );
};

export default SideBar;
