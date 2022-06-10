import styled from 'styled-components';
import Day from './Day';
import { useState } from 'react';

const Container = styled.div``;

const Daycard = styled.li`
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
  list-style-type: none;
  cursor: pointer;
`;

// const DayTitle = styled.h1`
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 20px;
// `;

// const Schedule = styled.h2`
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 20px;
//   margin: 8px;
// `;

function Stages({ days }) {
  const [isAllOpen, setIsAllOpen] = useState(false);

  const handleToggle = () => {
    setIsAllOpen(!isAllOpen);
  };

  return (
    <Container>
      <Daycard>
        <h1 onClick={handleToggle}>Schedule</h1>

        {days &&
          days.map((el) => {
            return (
              <Day
                key={el.title}
                daysDescription={el}
                isAllOpen={isAllOpen}
                setIsAllOpen={setIsAllOpen}
              ></Day>
            );
          })}
      </Daycard>
    </Container>
  );
}

//when isAllOpen && isOpen && !isClose

export default Stages;
