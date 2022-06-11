import React from 'react';
import styled from 'styled-components';

const Title = styled.summary`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  margin: 2px;
  padding: 2px;
`;

const Detail = styled.details``;

const Name = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

const Checkmark = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
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
