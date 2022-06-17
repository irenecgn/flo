import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
`;

function ModalForm() {
  return (
    <Form>
      <label>Cover image </label>
      <Input type='text'></Input>

      <label>City</label>
      <Input type='text' required></Input>

      <h1>Coordinates</h1>
      <label>lat</label>
      <Input type='text'></Input>
      <label>lng</label>
      <Input type='text'></Input>

      <h1>Schedule</h1>
      <label>Title</label>
      <Input typeText></Input>
      <label>Description</label>
      <Input typeText></Input>
      <label>Todos</label>
      <Input typeText></Input>
    </Form>
  );
}

export default ModalForm;
