//import logo from './logo.svg';
import './App.css';
import Router from './Router';
import styled from 'styled-components';
import { getAllJourneys } from './Utilities/Service.js';
import { useState, useEffect } from 'react';

const Main = styled.div`
  display: grid;
  justify-content: center;
  gap: 32px;
  margin: 64px auto;
`;

function App() {
  const [journeys, setJourneys] = useState([]);

  async function getJourneys() {
    const data = await getAllJourneys();
    setJourneys(data);
  }

  useEffect(() => {
    getJourneys();
  }, []);

  return (
    <Main>
      <Router journeys={journeys} />
    </Main>
  );
}

export default App;
