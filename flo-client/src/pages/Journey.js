import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getJourneysById } from '../Utilities/Service';
import styled from 'styled-components';
import Schedule from '../components/Schedule';
import Restaurant from '../components/Restaurants';

import JourneyBar from '../components/JourneyBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Topbar = styled.div`
  height: 180px;
  width: 900px;
`;
const Photo = styled.img`
  width: 900px;
  height: 300px;
  position: absolute;
  border-radius: 0.4em;
  border: rgb(250, 250, 250) 0.2em solid;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 8px;
  font-size: 40px;
  color: whitesmoke;
  position: relative;
  width: 400px;
  text-shadow: 1px 1px;
`;

const JourneyCard = styled.div`
  width: 900px;
  height: 100px;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
`;

const Duration = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin: 8px;
`;

const Restitle = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  margin: 8px;
  padding: 2px;
`;

function Journey() {
  let { id } = useParams();

  const [journey, setJourney] = useState([]);

  const journeyById = useCallback(
    async (id) => {
      const journeyData = await getJourneysById(id);
      setJourney(journeyData);
    },
    [setJourney]
  );

  useEffect(() => {
    journeyById(id);
  }, [journeyById, id]);

  return (
    <Container>
      <JourneyBar id={id}></JourneyBar>
      <div>
        <Topbar>
          <Photo alt={journey.title} src={journey.coverImg}></Photo>
          <Title>{journey.title}</Title>
        </Topbar>
        <JourneyCard>
          <Duration>Numbers of days: {journey.durationInDays}</Duration>
        </JourneyCard>
        <Schedule days={journey.stages}></Schedule>
        <Restitle>Restaurant</Restitle>
        <Restaurant place={journey.restaurants} />
      </div>
    </Container>
  );
}

export default Journey;
