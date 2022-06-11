import { GoogleMap, LoadScript } from '@react-google-maps/api';
//import API_KEY from '../api.json';

import styled from 'styled-components';
import Location from './Location';

const MapDiv = styled.div`
  display: flex;
  border: 4px solid rgb(208, 208, 208);
  width: 900px;
  height: 800px;
  background: rgb(255, 255, 255);
  border-radius: 0.4em;
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(250, 250, 250) 0.2em solid;
`;

const mapContainer = {
  lat: 37.433431,
  lng: -100.500331,
};

const containerStyle = {
  width: '1200px',
  height: '800px',
};
const API_KEY = 'AIzaSyD2Tw5TQfpJYUKOVMBBNB-6wmdO8GZtAi8';

const Map = ({ journeys }) => {
  return (
    <MapDiv>
      <LoadScript googleMapsApiKey={API_KEY} language='en'>
        <GoogleMap
          className='GoogleMap'
          mapContainerStyle={containerStyle}
          center={mapContainer}
          zoom={5}
        >
          {journeys &&
            journeys.map((journey) => {
              return (
                <Location
                  key={journey._id}
                  id={journey._id}
                  coord={journey.coordinates}
                ></Location>
              );
            })}
        </GoogleMap>
      </LoadScript>
    </MapDiv>
  );
};

export default Map;
