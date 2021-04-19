import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal, useModal } from './modal';
import styled from '@emotion/styled';

type ModalContensProps = {
  setIsModalOpen: (arg: boolean) => void;
};

const ModalContents: React.FC<ModalContensProps> = ({ setIsModalOpen }) => {
  const handleModalClose = React.useCallback(() => {
    setIsModalOpen(false);
  }, []);
  return (
    <ModalContentsWrapper>
      <h1>モーダルが開きました</h1>
      <button onClick={handleModalClose}>モーダルが閉じるよ</button>
    </ModalContentsWrapper>
  );
};

const Main = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const handleModalOpen = React.useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <h1>モーダル動作検証</h1>
      <button onClick={handleModalOpen}>モーダルが開くよ</button>
      <Modal isModalOpen={isModalOpen}>
        <ModalContents setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};

const ModalContentsWrapper = styled('div')`
  padding: 1rem;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

ReactDOM.render(<Main />, document.getElementById('app'));
