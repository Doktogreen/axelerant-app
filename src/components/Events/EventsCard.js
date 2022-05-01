import React from "react";
import { StyledProductCard } from "../../utilities/StyledComponents";
import AvailableTickets from "./AvailableTickets";
import EventsTime from "./EventsTime";
import EventModal from "./EventsBooking";

function Event({events}){

  // Date resource for future use
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + " " + mm + ', ' + yyyy;

  // // This creates Product Containers (the horizontal tracks) for each unique category in the product data

  return (
    <React.Fragment>
    {events.length > 0 ? (
      events.map((event) => {
          return (
            <StyledProductCard className="eventCard">
              {/* flex @media */}
              <div
                className="eventCardImg eventCardImgDiv"
                style={{ backgroundImage: `url(${event.img})` }}
              >
              </div>
              {/* flex @media */}
              <div className="eventCardContents">
              <div className="eventTexts">
                <h2 className="eventCardName">{event.title}</h2>
                <span className="eventDateQntyCover">
                  <div className="event-time" >
                      <EventsTime />
                  </div>
                  <div className="event-ticket" >
                    <AvailableTickets number={event.ticket_number} />
                  </div>
                </span>
              </div>
              <EventModal event={event} date={today}/>
              </div>
            </StyledProductCard>
                );
              })
          ):(
              <h1 className="not-available">
                  No results found!
              </h1>
            )
          }
    </React.Fragment>
  );
};

export default Event;