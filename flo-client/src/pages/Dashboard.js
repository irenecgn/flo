import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';
import styled from 'styled-components';

const Journeycontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Dashboard = () => {
  return (
    <div>
      <Searchbar />
      <Journeycontainer>
        <Sidebar />
        <Map />
      </Journeycontainer>
    </div>
  );
};

export default Dashboard;
