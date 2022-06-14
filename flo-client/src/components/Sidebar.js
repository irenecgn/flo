import styled from 'styled-components';
import irene from '../images/irenecgn.png';
import BlurredBox from './BlurredBox';
import { CalendarAlt } from '@mountain-ui/icons';
import { Building } from '@mountain-ui/icons';

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
  border: rgb(250, 250, 250) 2px solid;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
`;

const Travelscroll = styled.div`
  border: none;
  border-radius: 8px;
  overflow-x: scroll;
`;

const Cities = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #25292d;
  padding: 8px;
`;

const Travel = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
  height: 90px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #25292d;
  border: rgb(250, 250, 250) 2px solid;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  border-radius: 8px;
`;

const BuildingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.5);
  border-radius: 50%;
  height: 80px;
  width: 80px;
  padding-top: 4px;
  margin: 4px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 84px;
  width: 140px;
`;
const TitleContainer = styled.div``;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
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
            journeys.map((el) => (
              <Travel key={el}>
                <BuildingContainer>
                  <Building color='#737577' fontSize={60} />
                </BuildingContainer>
                <InfoContainer>
                  <TitleContainer>{el.title} </TitleContainer>
                  <CalendarContainer>
                    <CalendarAlt fontSize={28} /> {el.durationInDays} days
                  </CalendarContainer>
                </InfoContainer>
              </Travel>
            ))}
        </Travelscroll>
      </UserTravel>
    </Userbar>
  );
};

export default SideBar;
