// components/Modal.tsx

import React from "react";
import styles from "@/styles/Home.module.css"; // Adjust the path as necessary

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export default Modal;
