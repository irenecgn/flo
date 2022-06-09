import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
import Location from './Location';

const MapDiv = styled.div`
  display: flex;
  border: 1px solid rgb(208, 208, 208);
  width: 1200px;
  height: 800px;
`;

const API_KEY = 'AIzaSyD2Tw5TQfpJYUKOVMBBNB-6wmdO8GZtAi8';

const Map = ({ coordinates }) => {
  const mapContainer = {
    lat: 37.433431,
    lng: -100.500331,
  };

  const containerStyle = {
    width: '1200px',
    height: '800px',
  };

  return (
    <MapDiv>
      <LoadScript googleMapsApiKey={API_KEY} language='en'>
        <GoogleMap
          className='GoogleMap'
          mapContainerStyle={containerStyle}
          center={mapContainer}
          zoom={5}
        >
          {coordinates &&
            coordinates.map((coord) => {
              return (
                <Location
                  key={coord.title}
                  id={coord._id}
                  coord={coord.coordinates}
                ></Location>
              );
            })}
        </GoogleMap>
      </LoadScript>
    </MapDiv>
  );
};

export default Map;
