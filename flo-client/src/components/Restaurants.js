import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  gap: 8px;
  padding: 16px;
  list-style: none;

  overflow: scroll;
  width: 860px;
  border: rgb(250, 250, 250) 0.2em solid;
`;

const RestaurantCard = styled.div`
  width: 240px;
  height: auto;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
`;

const ResName = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
`;

const ResAdd = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`;

function Restaurants({ place }) {
  console.log(place);
  return (
    <Container>
      {place &&
        place.map((el) => {
          return (
            <RestaurantCard>
              <ResName>{el.name}</ResName>
              <ResAdd>{el.address}</ResAdd>
              <li>{el.cuisineTypes}</li>
              <li>{el.suggestedFor}</li>
            </RestaurantCard>
          );
        })}
    </Container>
  );
}

export default Restaurants;
