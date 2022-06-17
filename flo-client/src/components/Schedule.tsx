import styled from 'styled-components';
import Day from './Day';
import { useState } from 'react';

const Daycard = styled.li`
  border-radius: 8px;
  list-style-type: none;
`;

const SingleDayCard = styled.div``;
const Scheduletitle = styled.h1`
  bottom: 32px;
  border-radius: 32px;
  font-size: 28px;
  font-weight: 600;
`;

function Stages({ days }) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <Daycard>
      <Scheduletitle onClick={handleToggle}></Scheduletitle>
      <SingleDayCard>
        {days &&
          days.map((el) => {
            return <Day key={el.title} daysDescription={el}></Day>;
          })}
      </SingleDayCard>
    </Daycard>
  );
}

export default Stages;
