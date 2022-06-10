import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const RestaurantCard = styled.div`
  width: 300px;
  height: 100px;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
`;

function Restaurants({ place }) {
  console.log(place);
  return (
    <Container>
      {place &&
        place.map((el) => {
          return (
            <RestaurantCard>
              <li>{el.name}</li>
              <li>{el.address}</li>
              <li>{el.cuisineTypes}</li>
              <li>{el.suggestedFor}</li>
            </RestaurantCard>
          );
        })}
    </Container>
  );
}

export default Restaurants;
