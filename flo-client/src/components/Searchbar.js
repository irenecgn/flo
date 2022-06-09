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

const Searchbar = () => {
  return (
    <Search>
      <Input type='search' placeholder='Where do you want to go?' />
    </Search>
  );
};

export default Searchbar;
