import Map from '../components/Map';
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';
import styled from 'styled-components';

const Journeycontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Dashboard = ({ journeys }) => {
  // const [coordinate, setCoordinates] = useState([]);

  // async function getCoordinate() {
  //   const data = await getAllJourneys();
  //   setCoordinates(data);
  // }

  // useEffect(() => {
  //   getCoordinate();
  // }, []);

  return (
    <div>
      <Searchbar />
      <Journeycontainer>
        <Sidebar />
        <Map coordinates={journeys} />
      </Journeycontainer>
    </div>
  );
};

export default Dashboard;
