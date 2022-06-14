import React from 'react';
import styled from 'styled-components';
import { Plus } from '@mountain-ui/icons';
import { addNewRestaurant, deleteRestaurantById } from '../Utilities/Service';
import { useEffect } from 'react';
import { useState } from 'react';

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

function Restaurants({ journeyId, place }) {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    setRestaurant(place);
  }, [place]);

  async function handleSubmit(event) {
    event.preventDefault();
    const restaurantInput = {
      name: event.target.name.value,
      address: event.target.address.value,
      cuisineTypes: event.target.cuisineTypes.value,
      suggestedFor: event.target.suggestedFor.value,
    };
    const newRestaurant = await addNewRestaurant(journeyId, restaurantInput);
    console.log(newRestaurant.restaurants);
    setRestaurant(newRestaurant.restaurants);
    event.target.reset();
  }

  async function deleteRestaurant(event) {
    const delEvent = event.target.value;
    await deleteRestaurantById(journeyId, delEvent);
    return setRestaurant((prevState) => {
      return prevState.filter((el) => el._id !== delEvent);
    });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input type='text' name='name' required></Input>

        <Label>Address</Label>
        <Input type='text' name='address' required></Input>

        <Label>Cuisine type</Label>
        <Input type='text' name='cuisineTypes' required></Input>

        <Label>Suggested for</Label>
        <Input type='text' name='suggestedFor'></Input>
        <Button type='submit'>
          <Plus fontSize={20}></Plus>
        </Button>
      </Form>
      <Container>
        {restaurant &&
          restaurant.map((el) => {
            return (
              <RestaurantCard key={el._id}>
                <ResName>{el.name}</ResName>
                <ResAddress>{el.address}</ResAddress>
                <li>{el.cuisineTypes}</li>
                <li>{el.suggestedFor}</li>
                <button onClick={deleteRestaurant} value={el._id}></button>
              </RestaurantCard>
            );
          })}
      </Container>
    </>
  );
}

export default Restaurants;
