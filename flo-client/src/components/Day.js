import React from 'react';
import styled from 'styled-components';
//import { useState, useEffect } from 'react';

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`;

const Name = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

function Day({ daysDescription }) {
  // const [isOpen, setOpen] = useState(false);

  // const handleToggle = () => {
  //   setOpen(!isOpen);
  // };

  return (
    <Title key={daysDescription.title}>
      {daysDescription.title} - {daysDescription.description}{' '}
      {/* {isOpen && (
        <div> */}
      {daysDescription.todos.map((el) => {
        return (
          <Name key={el.title}>
            <input type='checkbox'></input>
            <span>{el.name}</span>
          </Name>
        );
      })}
      {/* </div> */}
      {/* )} */}
    </Title>
  );
}

export default Day;
