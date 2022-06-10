import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getAllJourneys } from '../Utilities/Service';

const Journeycontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Dashboard = () => {
  const [journeys, setJourneys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  async function getJourneys() {
    const data = await getAllJourneys();
    setJourneys(data);
  }

  useEffect(() => {
    getJourneys();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  const filteredJourneys = journeys.filter((journey) =>
    journey.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Searchbar onChange={handleChange} />
      <Journeycontainer>
        <Sidebar />
        <Map journeys={filteredJourneys} />
      </Journeycontainer>
    </div>
  );
};

export default Dashboard;
