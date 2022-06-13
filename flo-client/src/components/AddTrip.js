import styled from 'styled-components';
import { Plus } from '@mountain-ui/icons';
import React from 'react';
import BlurredBox from './BlurredBox';
import { useState } from 'react';
import ModalForm from './ModalForm';

const StyledAddTrip = styled(BlurredBox)`
  display: flex;
  gap: 16px;
  position: fixed;
  height: auto;
  top: unset;
  left: unset;
  right: 32px;
  bottom: 32px;
  border-radius: 32px;
  background-color: rgba(250, 250, 250, 0.5);
  font-size: 22px;
  font-weight: 600;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.5);
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;

const Modal = styled.div`
  position: absolute;
  top: 400px;
  left: 850px;
  height: 500px;
  max-width: 500px;
  width: 500px;
  background-color: rgba(250, 250, 250, 0.6);
  border-radius: 48px;
  padding: 20px;
`;

function AddTrip({ journeys, setJourneys }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <StyledAddTrip onClick={toggleModal}>
        Add new journey
        <IconContainer>
          <Plus fontSize={32} />
        </IconContainer>
      </StyledAddTrip>

      {modal && (
        <Modal>
          <ModalForm />
        </Modal>
      )}
    </>
  );
}

export default AddTrip;
