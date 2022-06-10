import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`;

const Name = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;
// const Schedule = styled.h2`
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 20px;
//   margin: 8px;
// `;

function Stages({ days }) {
  const [isOpen, setOpen] = useState(false);
  // const [isCheck, setCheck] = useState(
  //   JSON.parse(localStorage.getItem('is-check')) || false
  // );

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  // const handleCheck = () => {
  //   setCheck(!isCheck);
  // };

  // useEffect(() => {
  //   localStorage.setItem('is-open', JSON.stringify(isCheck));
  // }, [isCheck]);

  return (
    <Container>
      <Daycard>
        <h1 onClick={handleToggle}>Schedule</h1>
        {days &&
          days.map((el) => {
            return (
              <Title key={el.title}>
                {el.title} - {el.description}
                {el.todos.map((el) => {
                  return (
                    <Name key={el.name}>
                      {isOpen && (
                        <div onClick={handleToggle}>
                          <input type='checkbox'></input>
                          <span>{el.name}</span>
                        </div>
                      )}
                    </Name>
                  );
                })}
              </Title>
            );
          })}
      </Daycard>
    </Container>
  );
}

export default Stages;
