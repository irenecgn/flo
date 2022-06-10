import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
`;

const Name = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

function Day({ daysDescription, isAllOpen, setIsAllOpen }) {
  const [isOpen, setOpen] = useState(false);
  const [isClose, setClose] = useState(true);

  useEffect(() => {
    if (!isAllOpen) {
      setOpen(false);
      setClose(true);
    }
  }, [isAllOpen]);

  const handleToggle = () => {
    //if isAllOpen
    //if !isAllOpen => isOpen = false && isClose = true
    isAllOpen || setOpen(!isOpen);
    isAllOpen && setClose(!isClose);
    isClose && setOpen(!isOpen);
    //isClose && setIsAllOpen(!isAllOpen);
  };

  return (
    //if all closed => isAllopen = false
    <Title key={daysDescription.title} onClick={handleToggle}>
      {daysDescription.title} - {daysDescription.description}{' '}
      {isClose && (isOpen || isAllOpen) && (
        <div>
          {daysDescription.todos.map((el) => {
            return (
              <Name key={el.title}>
                <div>
                  <input type='checkbox'></input>
                  <span>{el.name}</span>
                </div>
              </Name>
            );
          })}
        </div>
      )}
    </Title>
  );
}

export default Day;
