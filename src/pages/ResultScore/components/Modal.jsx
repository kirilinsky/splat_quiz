import React from "react";
import Modal from "react-modal";
import successIcon from "../assets/success.png";
import close from "../../../assets/images/close.svg";
import Tilt from "react-parallax-tilt";

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "24px",
    overflow: "unset",
    padding: "0",
    border: "none",
  },
};

const ModalSuccess = ({ isOpen, onClose }) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      overlayClassName="modal_overlay"
      isOpen={isOpen}
      style={customStylesModal}
    >
      <div className="modal_inner">
        <button onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <Tilt 
        >
          <img className="success" src={successIcon} alt="success check" />
        </Tilt>

        <h2>Спасибо, мы получили вашу заявку!</h2>
        <p>
          В ближайшее время с вами свяжется специалист SPLAT, который
          проконсультирует вас по записи к стоматологу
        </p>
        <p>
          Если остались вопросы,{" "}
          <a
            title="напишите нам"
            target="_blank"
            rel="noopener noreferrer"
            href="https://splatglobal.com/ru/help"
          >
            напишите нам
          </a>{" "}
        </p>
      </div>
    </Modal>
  );
};

export default ModalSuccess;
