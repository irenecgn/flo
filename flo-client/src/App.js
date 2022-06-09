//import logo from './logo.svg';
import './App.css';
import Router from './Router';
import styled from 'styled-components';

const Main = styled.div`
  display: grid;
  justify-content: center;
  gap: 32px;
  margin: 64px auto;
`;

function App() {
  return (
    <Main>
      <Router />
    </Main>
  );
}

export default App;
