import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getJourneysById } from '../Utilities/Service';
import styled from 'styled-components';
import Schedule from '../components/Schedule';

const Container = styled.div`
  ${'' /* border: 1px solid blue; */}
`;

const Topbar = styled.div`
  height: 180px;
  width: 900px;
  display: flex;
  align-items: flex-end;
  ${'' /* border: 1px solid green; */}
`;
const Photo = styled.img`
  width: 900px;
  height: 300px;
  position: absolute;
  border-radius: 0.4em;
`;

const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin: 4px;
  font-size: 40px;
  color: whitesmoke;
  position: relative;
  width: 400px;
`;

const JourneyCard = styled.div`
  ${'' /* border: 1px solid red; */}

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

function Journey() {
  // console.log('HOLA', journeyId);
  let { id } = useParams();

  const [journey, setJourney] = useState([]);
  console.log(journey);

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
      <Topbar>
        <Photo alt={journey.title} src={journey.coverImg}></Photo>
        <Title>{journey.title}</Title>
      </Topbar>
      <JourneyCard>
        <Duration>Numbers of days: {journey.durationInDays}</Duration>
      </JourneyCard>
      <Schedule days={journey.stages}></Schedule>
    </Container>
  );
}

export default Journey;
