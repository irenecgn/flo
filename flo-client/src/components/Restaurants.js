import React from 'react';
import styled from 'styled-components';
import { Plus } from '@mountain-ui/icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  gap: 8px;
  padding: 16px;
  list-style: none;
  overflow: scroll;
  border: rgb(250, 250, 250) 0.2em solid;
`;

const Form = styled.form`
  border: rgb(250, 250, 250) 0.2em solid;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  padding: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
`;

const Input = styled.input`
  height: 30px;
  width: 120px;
  border: 1px solid #9da0a5;
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: rgba(250, 250, 250, 0.5);
  border-radius: 40%;
  height: 30px;
  width: 38px;
  margin: 8px;
`;

const RestaurantCard = styled.div`
  width: 240px;
  height: auto;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  border: rgb(250, 250, 250) 0.2em solid;
  padding: 16px;
`;

const ResName = styled.h1`
  font-size: 20px;
`;

const ResAddress = styled.h2`
  font-size: 16px;
`;

function Restaurants({ place }) {
  return (
    <>
      <Form>
        <Label>Name</Label>
        <Input type='text' required></Input>

        <Label>Address</Label>
        <Input type='text' required></Input>

        <Label>Cuisine type</Label>
        <Input type='text' required></Input>

        <Label>Suggested for</Label>
        <Input type='text'></Input>
        <Button>
          <Plus fontSize={20}></Plus>
        </Button>
      </Form>
      <Container>
        {place &&
          place.map((el) => {
            return (
              <RestaurantCard>
                <ResName>{el.name}</ResName>
                <ResAddress>{el.address}</ResAddress>
                <li>{el.cuisineTypes}</li>
              </RestaurantCard>
            );
          })}
      </Container>
    </>
  );
}

export default Restaurants;
