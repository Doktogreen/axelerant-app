import React, { useState } from "react";
import Modal from "react-modal";
import BookNow from "../BookNow";
import SoldOut from "../SoldOut";
import { StyledEventButton } from "../../../utilities/StyledComponents";
import './index.scss'
import EventForm from "./ModalForm";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

function EventModal({event}) {
  const [step, setStep ] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Costumed styling for react-modal
  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "30px 30px",
      marginRight: "-50%",
      overflowY: "scroll",
      overlay: {zIndex: 19000},
      width: "35.87%",
      maxWidth: "527px",
      minWidth: "390px",
      minHeight: `${step === 1 ? "570px" : "fit-content"}`,
      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      borderRadius: "4px",
      transform: "translate(-50%, -50%)"
    }
  };

  // This function will handle the modal
  const openModal = () => {
    setModalIsOpen(
      event.ticket_number <= 0 
      || event.ticket_number === null
      || event.ticket_number === undefined
      ? false :  true );
  }

  // this function will close the modal
  const closeModal = () => {
    setModalIsOpen( false );
  }
  const back = () => setStep(1);
  const next = () => setStep(2);

  const EventBooking = (
    <div>
      {event.ticket_number <= 0 
      || event.ticket_number === null
      || event.ticket_number === undefined
      ? <><SoldOut />
        <b className="soldOutImg">
          <img 
            className="soldOutImg"
            src="https://res.cloudinary.com/skiltime/image/upload/v1650529448/sold-out_duod9c.png" 
            alt="soldOut" 
          />
        </b>
        </>
      : <><BookNow />
        <b className="bookNowImg">
          <img 
            src="https://res.cloudinary.com/skiltime/image/upload/v1650529448/book_zyic8k.png" 
            alt="booknow" 
          />
        </b> 
        </>
      }
     </div>
   )
    console.log("Render!");
    return (
      <div className="zin">
        <StyledEventButton
          onClick={() => openModal()} 
          className={
            event.ticket_number <= 0 
            || event.ticket_number === null
            || event.ticket_number === undefined 
            ? "eventCardSoldOutButton" : 
            "eventCardButton"} 
            type="button"
        >
          {EventBooking}
        </StyledEventButton>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          overlayClassName={{
            base: 'overlay-base',
            afterOpen: 'overlay-base_after-open',
            beforeClose: 'overlay-base_before-close'
          }}
        >
          <EventForm
            event={event}
            step={step} 
            back={() => back()} 
            next={() => next()} 
            close={() => closeModal() } 
          />
        </Modal>
      </div>
    );
  }

export default  EventModal;
