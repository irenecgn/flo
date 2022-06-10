import React from 'react';
import { Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

function Location({ key, coord, id }) {
  const navigate = useNavigate();

  return (
    <Marker
      key={key}
      position={{ lat: coord.lat, lng: coord.lng }}
      onClick={() => {
        navigate('/journeys/' + id);
      }}
    />
  );
}

export default Location;
