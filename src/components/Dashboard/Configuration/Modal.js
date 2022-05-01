import React, { useState } from "react";
import Modal from "react-modal";
import { Spinner } from "../../../utilities";
import './index.scss'
import Success from "./Success";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "35.87%",
    minWidth: "390px",
    display: "flex",
    zIndex: "3",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "fit-content",
    maxWidth: "527px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "16px",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

function ConfigurationModal({isopen}) {
const [isOpen, setIsOpen ] = useState(false);
const [isSubmiting, setIsSubmiting] = useState(false);
const [isLoading, setIsLoading] = useState(false);

  
const openModal = () => {
    setIsOpen( true );
    setIsLoading(true);
    setIsSubmiting(true);

    setTimeout(() => {
      setIsSubmiting(false);
    }, 3000);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

  }

  const closeModal = () => {
    setIsOpen(false);
  }
    console.log("Render!");
    return (
      <div>
            <button onClick={() => openModal()} className="btn1">
                {isSubmiting === true ? 
                  <Spinner />
                :
                  <>
                    <img 
                      src="https://res.cloudinary.com/skiltime/image/upload/v1650529449/configure_d0yzfg.png"
                      alt="config" 
                  /> 
                  Update Configuration
                  </>
                }
            </button>
        <Modal
          isOpen={isOpen}
        //   onAfterOpen={this.afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName={{
            base: 'overlay-base',
            afterOpen: 'overlay-base_after-open',
            beforeClose: 'overlay-base_before-close'
          }}
        >
          <Success loading={isLoading} />
        </Modal>
      </div>
    );
  }


export default  ConfigurationModal;
