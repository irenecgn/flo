import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getJourneysById } from '../Utilities/Service';
import styled from 'styled-components';

const JourneyCard = styled.div`
  border: 1px solid rgb(208, 208, 208);
`;
const Title = styled.h1`
  font-family: 'Arial';
`;

const Duration = styled.h2`
  font-family: 'Arial';
`;

const Photo = styled.img`
  width: 300px;
  height: 300px;
`;

function Journey() {
  let { id } = useParams();

  const [journey, setJourney] = useState([]);

  const journeyById = useCallback(
    async (id) => {
      console.log('hello');
      const journeyData = await getJourneysById(id);
      console.log('journeyData');
      setJourney(journeyData);
    },
    [setJourney]
  );

  useEffect(() => {
    journeyById(id);
    console.log(journeyById(id));
  }, [journeyById, id]);

  //*https://btholt.github.io/complete-intro-to-react/styled-components/

  return (
    <JourneyCard>
      {/* <img alt={journey.title} src={journey.coverImg} /> */}
      <Photo alt={journey.title} src={journey.coverImg}></Photo>
      <Title>{journey.title}</Title>
      <Duration>{journey.durationInDays}</Duration>
    </JourneyCard>
  );
}

export default Journey;
