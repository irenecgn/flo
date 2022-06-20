import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getAllJourneys } from '../Utilities/Service';
import FullContainer from '../components/FullContainer';
// import AddTrip from '../components/AddTrip';

const MapContainer = styled(FullContainer)`
  height: 100%;
`;

interface Note{
  id : string; note : string; _id: string;
}

type journey = {
  coordinates: {
    lat: number,
    lng: number
  },
  coverImg: string,
  durationInDays: number,
  title: string,
  _id: string,
  accomodation: string,
  stages: stage[],
  restaurants: restaurant[],
  notes: Note[]
}

type restaurant = {
  name: string,
  address: string,
  cuisineTypes: string,
  suggestedFor: string,
  _id: string
}

type stage = {
  title: string,
  description: string,
  todos: Todos[]
}

type Todos = {
  name: string,
  completed: boolean,
  title: string
}

const Dashboard: React.FC = () => {
  const [journeys, setJourneys] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  async function getJourneys() {
    const data = await getAllJourneys();
    console.log(data);
    //const arr = data.sort((a, b) => a.title.localCompare(b.title));
    setJourneys(data);
  }

  useEffect(() => {
    getJourneys();
  }, []);

  const handleChange = (event: any) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  const filteredJourneys = journeys.filter((journey: journey) =>
    journey.title.toLowerCase().includes(searchQuery)
  );

  return (
    <MapContainer>
      <Map journeys={filteredJourneys} />
      <Header onChange={handleChange} />
      <Sidebar journeys={filteredJourneys} />
      {/* <AddTrip journeys={journeys} setJourneys={setJourneys} /> */}
    </MapContainer>
  );
};

export default Dashboard;
