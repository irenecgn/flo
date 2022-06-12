import React from 'react';
import styled from 'styled-components';

const Title = styled.summary`
  font-size: 28px;
  margin: 2px;
  padding: 2px;
`;

const Detail = styled.details`
  cursor: pointer;
`;

const Name = styled.h2`
  font-size: 16px;
`;

const Checkmark = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  margin: 2px;
  padding: 2px;
`;

function Day({ daysDescription }) {
  return (
    <Detail>
      <Title key={daysDescription.title}>
        {daysDescription.title} - {daysDescription.description}{' '}
      </Title>
      {daysDescription.todos.map((el) => {
        return (
          <Name key={el.title}>
            <Checkmark type='checkbox'></Checkmark>
            <Label>{el.name}</Label>
          </Name>
        );
      })}
    </Detail>
  );
}

export default Day;
