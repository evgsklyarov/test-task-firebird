import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import style from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={style['modal-overlay']} onClick={onClose}>
      <div className={style['modal-window']} onClick={(e) => e.stopPropagation()}>
        <button className={style['modal-close']} onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  );
};

export default Modal;
