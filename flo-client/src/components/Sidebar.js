import styled from 'styled-components';
import irene from '../images/irenecgn.png';
import BlurredBox from './BlurredBox';

const Userbar = styled(BlurredBox)`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  height: auto;
  gap: 12px;
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

const Cities = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: #25292d;
  padding: 8px;
`;

const Travel = styled.p`
  margin: 8px;
  align-self: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: #25292d;
`;

const SideBar = ({ journeys }) => {
  return (
    <Userbar>
      <Info>
        <ProfilePicture src={irene} alt='Profile picture' />
        <Name> Irene Cagnoni</Name>
      </Info>

      <UserTravel>
        <Cities>Your Cities:</Cities>
        <Travelscroll>
          {journeys &&
            journeys.map((el) => <Travel key={el}> {el.title}</Travel>)}
        </Travelscroll>
      </UserTravel>
    </Userbar>
  );
};

export default SideBar;
