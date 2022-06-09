import styled from 'styled-components';

const Userbar = styled.div`
  display: flex;
  background-color: #ebfbff;
  height: 800px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const SideBar = () => {
  return (
    <Userbar>
      <Title> Irene </Title>
    </Userbar>
  );
};

export default SideBar;
