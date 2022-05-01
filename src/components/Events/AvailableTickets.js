import React from "react";


const AvailableTickets = ({
    number
  }) => {
    return (
      <div className="ticket">
        <p className="tickets">
          Available Tickets:{" "}
          <b className={number === 0 ? "na" : "cardNumber"}>
            {number === 0 ? "N/A" : number}
          </b>
        </p>
      </div>
    );
  };
  
  export default AvailableTickets;
  