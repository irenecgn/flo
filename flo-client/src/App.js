import styled from 'styled-components';
import Router from './Router';

const Main = styled.main`
  display: grid;
  justify-content: center;
  gap: 32px;
  max-width: 1400px;
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
