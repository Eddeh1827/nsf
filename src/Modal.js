import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "white",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root"); // Set the root element for accessibility

function EmailModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to ash@email.com. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button onClick={onClose}>Dismiss message</button>
    </Modal>
  );
}

export default EmailModal;
