import styled from 'styled-components';
import logo from '../images/flologo.png';

const Search = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100px;
  border-radius: 8px;
  ${'' /* border: 2px solid #70c5ec; */}
  box-shadow: 0.3em 0.3em 0.7em #00000015;
  transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: rgb(171, 197, 243) 0.2em solid;
  border: rgb(183, 207, 249) 2 0.2em solid;
`;

const Input = styled.input`
  width: 700px;
  font-family: 'Arial';
  font-size: 40px;
  border: none;
`;

const Searchbar = ({ onChange }) => {
  return (
    <Search>
      <img src={logo} alt={logo} />
      <Input
        type='search'
        placeholder='Where do you want to go? ✈️'
        onChange={onChange}
      />
    </Search>
  );
};

export default Searchbar;
