import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
  isModalOpen: boolean;
};

function isDefined<T>(value: T | undefined | null): value is T {
  return typeof value !== 'undefined' && value !== null;
}

const Modal: React.FC<Props> = ({ children, isModalOpen }) => {
  const ref = React.useRef<HTMLElement | null>();
  const mounted = React.useRef<boolean>();

  let modal = null;

  React.useEffect(() => {
    ref.current = document.body;
    mounted.current = true;
    return () => {
      ref.current = null;
      mounted.current = false;
    };
  }, []);

  if (isDefined(ref.current) && mounted.current && isModalOpen) {
    modal = ReactDOM.createPortal(children, ref.current);
  }

  return modal;
};

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return { isModalOpen, setIsModalOpen };
};

React.memo(Modal);

export { Modal, useModal };
