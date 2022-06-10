import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';
import styled from 'styled-components';
import { useState } from 'react';

const Journeycontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Dashboard = ({ journeys }) => {
  const [searchCity, setSearchCity] = useState([]);

  return (
    <div>
      <Searchbar setSearchCity={setSearchCity} coordinates={journeys} />
      <Journeycontainer>
        <Sidebar />
        <Map searchCity={searchCity} coordinates={journeys} />
      </Journeycontainer>
    </div>
  );
};

export default Dashboard;
