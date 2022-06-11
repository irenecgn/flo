import styled from 'styled-components';
import logo from '../images/flologo.png';

const Search = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 100px;
  border-radius: 8px;
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

const Image = styled.img`
  ${'' /* border: 1px solid #9da0a5; */}
`;

const Searchbar = ({ onChange }) => {
  return (
    <Search>
      <Input
        type='search'
        placeholder='Where do you want to go?  ✈️'
        onChange={onChange}
      />
      <Image src={logo} alt={logo} />
    </Search>
  );
};

export default Searchbar;
