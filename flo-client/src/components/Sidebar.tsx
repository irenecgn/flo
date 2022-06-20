import styled from 'styled-components';
import BlurredBox from './BlurredBox';
import { CalendarAlt } from '@mountain-ui/icons';
import { Building } from '@mountain-ui/icons';
import { Link } from 'react-router-dom';

const Travelscroll = styled.div`
  width: 360px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  position: absolute;
  left: 16px;
  top: 88px;
`;

const Travel = styled(Link)`
  position: block;
  display: flex;
  flex-direction: row;
  gap: 16px;
  background-color: rgba(250, 250, 250, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0px 1px 6px 0px rgba(50, 50, 50, 0.25);
  border-radius: 8px;
  padding: 16px;
  height: auto;
`;

const BuildingContainer = styled.div<StyleProps>`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TitleContainer = styled.h2`
  font-size: 22px;
  margin: 0;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  color: #737577;
`;

interface StyleProps {
  src: string;
}

interface Props {
  journeys: journey[];
}

type journey = {
  coordinates: {
    lat: number,
    lng: number
  },
  coverImg: string,
  durationInDays: number,
  title: string,
  _id: string,
  accomodation: string,
  stages: stage[],
}

type stage = {
  title: string,
  description: string,
  todos: todo[]
}

type todo = {
  name: string,
  completed: boolean
}

const SideBar: React.FC<Props> = ({ journeys }) => {
  return (
    <Travelscroll>
      {journeys &&
        journeys.map((el) => (
          <Travel key={el._id} to={`/journeys/${el._id}`}>
            <BuildingContainer src={el.coverImg} />
            <InfoContainer>
              <TitleContainer>{el.title}</TitleContainer>
              <CalendarContainer>
                <CalendarAlt fontSize={16} color='#737577' />{' '}
                {el.durationInDays} days
              </CalendarContainer>
            </InfoContainer>
          </Travel>
        ))}
    </Travelscroll>
  );
};

export default SideBar;
