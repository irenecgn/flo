import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//import Marker from './Marker';

const Map = () => {
  const API_KEY = 'AIzaSyD2Tw5TQfpJYUKOVMBBNB-6wmdO8GZtAi8';

  // const [mapContainer, setContainer] = useState({
  //   lat: 37.773795,
  //   lng: -122.446747,
  // });

  const mapContainer = {
    lat: 37.773795,
    lng: -122.446747,
  };

  const containerStyle = {
    width: '1000px',
    height: '800px',
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        className='GoogleMap'
        mapContainerStyle={containerStyle}
        center={mapContainer}
        zoom={6}
      ></GoogleMap>
      <Marker position={{ lat: 37.773795, lng: -122.446747 }} />
    </LoadScript>
  );
};

export default Map;
