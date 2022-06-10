import e from 'cors';
import { useState } from 'react';
import styled from 'styled-components';

const Search = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100px;
`;

const Input = styled.input`
  width: 700px;
  font-family: 'Arial';
  font-size: 40px;
  border: none;
`;

const Searchbar = ({ coordinates, setSearchCity, onChange }) => {
  // const handleChange = (value) => {
  //   const lowerCase = value.target.value.toLowerCase();
  //   console.log('LOWER', lowerCase);
  //   setSearchBar(lowerCase);

  //   const coord = coordinates.filter((el) => {
  //     console.log('THE EL', el.title);
  //     return el.title.toLowerCase() === lowerCase;
  //   });
  //   setSearchCity(coord);
  // };

  return (
    <Search>
      <Input
        type='search'
        placeholder='Where do you want to go?'
        onChange={onChange}
      />
    </Search>
  );
};

export default Searchbar;
