import styled from 'styled-components';
import Day from './Day';
import { useState } from 'react';

const Daycard = styled.li`
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
  list-style-type: none;
  cursor: pointer;
`;

const Scheduletitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  margin: 8px;
  padding: 2px;
`;

function Stages({ days }) {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <Daycard>
      <Scheduletitle onClick={handleToggle}>Schedule</Scheduletitle>
      <div>
        {days &&
          days.map((el) => {
            return <Day key={el.title} daysDescription={el}></Day>;
          })}
      </div>
    </Daycard>
  );
}

export default Stages;
