import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styled from 'styled-components';
import { coordinates } from '../data/coordinates-db.js';

const MapDiv = styled.div`
  display: flex;
  border: 1px solid rgb(208, 208, 208);
  width: 1200px;
  height: 800px;
`;

// const Marker = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #000;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   user-select: none;
//   transform: translate(-50%, -50%);
// `;

const Map = () => {
  const API_KEY = 'AIzaSyD2Tw5TQfpJYUKOVMBBNB-6wmdO8GZtAi8';

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
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          className='GoogleMap'
          mapContainerStyle={containerStyle}
          center={mapContainer}
          zoom={5}
        >
          {coordinates.map((coord) => {
            return (
              <div>
                <Marker
                  key={coord.city}
                  position={{ lat: coord.lat, lng: coord.lng }}
                />
              </div>
            );
          })}
        </GoogleMap>
      </LoadScript>
    </MapDiv>
  );
};

export default Map;
