import styled from 'styled-components';
import irene from '../images/irenecgn.png';
import BlurredBox from './BlurredBox';

const Userbar = styled(BlurredBox)`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  height: 600px;
  top: 88px;
`;

const Info = styled.div`
  display: flex;
  width: 360px;
  height: 74px;
  border-radius: 8px;
  background-color: rgba(250, 250, 250, 0.8);
  padding: 8px;
`;

const Name = styled.h1`
  align-self: center;
  font-size: 28px;
  font-weight: 400;
  color: #25292d;
  padding: 12px;
`;

const ProfilePicture = styled.img`
  height: 60px;
  width: 60px;
  border: 1px solid #bed6ef;
  border-radius: 8px;
`;

const UserTravel = styled.div`
  width: 360px;
  background-color: rgba(250, 250, 250, 0.6);
  border-radius: 8px;
`;

const Travelscroll = styled.div`
  border: none;
  border-radius: 8px;
  overflow: scroll;
`;

const Travel = styled.p`
  margin: 8px;
  align-self: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: #25292d;
`;

const SideBar = () => {
  return (
    <Userbar>
      <Info>
        <ProfilePicture src={irene} alt='Profile picture' />
        <Name> Irene Cagnoni</Name>
      </Info>

      <UserTravel>
        <Name>Your Travel:</Name>
        <Travelscroll>
          <Travel>San Diego</Travel>
          <Travel>Los Angeles</Travel>
          <Travel>Las Vegas</Travel>
          <Travel>San Francisco</Travel>
          <Travel>New York</Travel>
        </Travelscroll>
      </UserTravel>
    </Userbar>
  );
};

export default SideBar;
