import React, { useState } from "react";
import Swal from "sweetalert2";
import { Loader, Spinner } from "../../../../utilities";
import './index.scss';

// Regular expressions for each fields validation
const initialName = {
  key: "name",
  value: "",
  error: false,
  touched: false,
  regex: /[A-Za-z0-9]+/,
  required: true
};
const initialEmail = {
  key: "email",
  value: "",
  error: false,
  touched: false,
  regex: /[a-z]+[0-9]*@[a-z]+\.[a-z]+$/,
  required: true
};

const initialMobile = {
  key: "mobile",
  value: "",
  error: false,
  touched: false,
  regex: /(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
  required: true
};
const initialSeats = {
  key: "seats",
  value: "",
  error: false,
  touched: false,
  regex: /^[0-9\b]+$/,
  required: true
};

const initialAttendeeOne = {
  key: "attendeeOne",
  value: "",
  error: false,
  touched: false,
  regex: /[A-Za-z0-9]+/,
  required: true
};
const initialAttendeeTwo = {
  key: "attendeeTwo",
  value: "",
  error: false,
  touched: false,
  regex: /[A-Za-z0-9]+/,
  required: true
};

const initialAttendeeThree = {
  key: "attendeeThree",
  value: "",
  error: false,
  touched: false,
  regex: /[A-Za-z0-9]+/,
  required: true
};

export default function EventForm({close, event}) {

  // Setting up initial state for all fields, including spinner, and Loader
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [mobile, setMobile] = useState(initialMobile);
  const [seats, setSeats] = useState(initialSeats);
  const [attendeeOne, setAttendeeOne] = useState(initialAttendeeOne);
  const [attendeeTwo, setAttendeeTwo] = useState(initialAttendeeTwo);
  const [attendeeThree, setAttendeeThree] = useState(initialAttendeeThree);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [booked, setBooked] = useState(false);

  // All validation messages occur here
  const validate = obj => {
    let error;
    if (!obj.value) {
      error = `
      ${obj === name ? "Please enter your name"
      : obj === email ? "Please enter your email" 
      : obj === seats ? "Please enter the numbers of seats"
      : obj === mobile ? "Please enter your phone number"
      // : obj === attendeeOne ? "Please enter the name of Attendee #1"
      : obj === attendeeTwo ? "Please enter the name of Attendee #2"
      : obj === attendeeThree ? "Please enter the name of Attendee #3" 
      : ""}`;

    } else if (!obj.regex.test(obj.value)) {
      error = `Invalid ${obj.key}`;
    }
    return error;
  };

  // Error schema
  const isError = obj => obj.error && obj.touched && obj.required;

  // Submission of modal form occur here.
  const handleSubmit = e => {
    e.preventDefault();

    setIsSubmitting(true);
    setEmail({ ...email, error: validate(email), touched: true });
    setName({ ...name, error: validate(name), touched: true });
    setMobile({ ...mobile, error: validate(mobile), touched: true });
    setSeats({ ...seats, error: validate(seats), touched: true });
    setAttendeeOne({ ...attendeeOne, error: validate(attendeeOne), touched: true });
    setAttendeeTwo({ ...attendeeTwo, error: validate(attendeeTwo), touched: true });
    setAttendeeThree({ ...attendeeThree, error: validate(attendeeThree), touched: true });  
    console.log(
      "Name", name.value,
      "Email", email.value,
      "Phone No.", mobile.value,
      "Seats No.", seats.value,
      "Attendes", `${attendeeOne ? attendeeOne : name.value} 
        ${attendeeTwo ? attendeeTwo : "Attendee #2 not available"} 
        ${attendeeThree ? attendeeThree : "Attendee #3 not available"}`
    )
    setIsSubmitting(true);
    setTimeout(() => {
      setName(initialName);
      setEmail(initialEmail);
      setMobile(initialMobile);
      setSeats(initialSeats);
      setAttendeeOne(initialAttendeeOne);
      setAttendeeTwo(initialAttendeeTwo);
      setAttendeeThree(initialAttendeeThree);
     
    }, 2000);
    
    setTimeout(() => {
      setIsSubmitting(false);
      window.history.pushState('./', 'Events');
    }, 3000);
    
  }

  // Wiring "Book Now" Button together with validation 
  const Next = (e) => {
    e.preventDefault();

    console.log("before error")

    if ( (name.value === "" || 
          name.value === null || 
          name.value === undefined) 

      || (email.value === "" || 
          email.value === null || 
          email.value === undefined)

      || (mobile.value === "" || 
          mobile.value === null || 
          mobile.value === undefined)

      || (seats.value === "" ||
          seats.value === null ||
          seats.value === undefined)

      || (seats.value==="2" && 
          attendeeTwo.value === "" ||
          attendeeTwo.value === null ||
          attendeeTwo.value === undefined)

      || (seats.value==="3" && 
          attendeeThree.value === "" ||
          attendeeThree.value === null ||
          attendeeThree.value === undefined)

      || (mobile.value === "" || 
          mobile.value === null || 
          mobile.value === undefined)) {

        console.log("error"); Swal("Error: ")
        setBooked(false); setStep(1);

      }else {
        console.log("no error");
        setBooked(true); setIsSubmitting(true);
        setIsLoading(true);

        setTimeout(() => {
          setIsSubmitting(false); setStep(2)
        }, 3000);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000)
      }
  }

  const Back = (e) => {
    e.preventDefault();
    console.log("before error")
    if ( booked === true ) {
        console.log("booked: ", booked)
        return () => setStep(2);
      }else {
        console.log("not booked: ", booked)
        return () => setStep(1);
      }
  }
  React.useEffect(() => {
    setName({ ...name, error: validate(name) });
    setEmail({ ...email, error: validate(email) });
    setMobile({ ...mobile, error: validate(mobile) });
    setSeats({ ...seats, error: validate(seats) });
    setAttendeeOne({ ...attendeeOne, error: validate(attendeeOne) });
    setAttendeeTwo({ ...attendeeTwo, error: validate(attendeeTwo) });
    setAttendeeThree({ ...attendeeThree, error: validate(attendeeThree) });
  }, [name.value, email.value, mobile.value, seats.value, attendeeOne.value, 
      attendeeTwo.value, attendeeThree.value, attendeeOne, attendeeThree, attendeeTwo, 
      email, mobile, name, seats
    ]
  );

  let firstAttendee = (
    <label className='attendeeOne'
      htmlFor="attendeeOne">
      <h4>1</h4>
      <div>
        <input
          className={isError(attendeeOne) && "error input"}
          type="text"
          placeholder="First Name Last Name"
          name="attendee-one"
          value={attendeeOne.value}
          onChange={e => setAttendeeOne(
            { ...attendeeOne, value: e.target.value })}
          onBlur={() => setAttendeeOne(
            { ...attendeeOne, touched: true })}
          required
        />
        {isError(attendeeOne) && <p className="required">
          {attendeeOne.error}</p>
        }
      </div>
    </label>
  )

  let secondAttendee = (
    <label className='attendeeTwo'
      htmlFor="attendeeTwo">
      <h4>2</h4>
      < div>
        <input
          className={isError(attendeeTwo) && "error input"}
          type="text"
          placeholder="First Name Last Name"
          name="attendee-Two"
          value={attendeeTwo.value}
          onChange={e => setAttendeeTwo(
            { ...attendeeTwo, value: e.target.value })}
          onBlur={() => setAttendeeTwo(
            { ...attendeeTwo, touched: true })}
          required
        />
        {isError(attendeeTwo) && <p className="required">
          {attendeeTwo.error}</p>
        }
      </ div>
    </label>
  )

  let thirdAttendee = (
    <label className='attendeeThree'
      htmlFor="attendeeThree">
     <h4>3</h4>
      <div>
        <input
          className={isError(attendeeThree) && "error input"}
          type="text"
          placeholder="First Name Last Name"
          name="attendee-Three"
          value={attendeeThree.value}
          onChange={e => setAttendeeThree(
            { ...attendeeThree, value: e.target.value })}
          onBlur={() => setAttendeeThree(
            { ...attendeeThree, touched: true })}
          required
        />
        {isError(attendeeThree) && <p className="required">
          {attendeeThree.error}</p>
        }
      </ div>
    </label>
  )

  return (
      <form onSubmit={handleSubmit} className="form" id="form">
        <h1 className={step === 1 ? 'title' : 'none' }>{event.title}</h1>
        <p className={step === 1 ? 'sub-titles' : 'none' }>21 Sep, 2020</p>
        <p className={step === 1 ? 'sub-titles' : 'sub-titles subtitle-two'}>
        {step === 1 ? `Tickets Available: ${event.ticket_number}`
          : `You have booked ${seats.value === null || seats.value === "" 
          || seats.value === undefined ? 1 : seats.value} tickets for` }
        </p>
        <div className={step === 1 ? 'inputs' : 'inputs inputs-two'}>
          {step === 1 ? 
              <React.Fragment>
                <label htmlFor="name">Name</label>
                <input
                  className={isError(name) && "error input"}
                  type="text"
                  placeholder="First Name Last Name"
                  name="name"
                  value={name.value}
                  onChange={e => setName({ ...name, value: e.target.value })}
                  onBlur={() => setName({ ...name, touched: true })}
                  required
                />
                {isError(name) && <p className="required">{name.error}</p>}

                <label htmlFor="email">Email</label>
                <input 
                  className={isError(email) && "error input"}
                  type="email" 
                  placeholder="username@domain.com" 
                  name="email"
                  value={email.value}
                  onChange={e => setEmail({ ...email, value: e.target.value })}
                  onBlur={() => setEmail({ ...email, touched: true })}
                  required 
                />
                {isError(email) && <p className="required">{email.error}</p>}

                <label htmlFor="mobile">Phone No</label>
                <input
                  className={isError(mobile) && "error input"}
                  type="number"
                  placeholder="+91XXXXXXXXXXXX"
                  name="mobile"
                  value={mobile.value}
                  onChange={e => setMobile({ ...mobile, value: e.target.value })}
                  onBlur={() => setMobile({ ...mobile, touched: true })}
                  required
                />
                {isError(mobile) && <p className="required">{mobile.error}</p>}

                <label htmlFor="seats">Number of Seats</label>
                <select
                  className={isError(seats) && "error input"}
                  type="number"
                  placeholder="Seats No"
                  name="seats"
                  value={seats.value === "1" ? "1" : seats.value === "2" ? "2" 
                  : seats.value === "3" ? "3" : seats.value}
                  onChange={e => setSeats({ ...seats, value: e.target.value })}
                  onBlur={() => setSeats({ ...seats, touched: true })}
                  required
                >   <option >Select Seats Number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                {isError(seats) && <p className="required">{seats.error}</p>}
                
                <div>
                    <label>Name of Attendees</label>
                    {seats.value === "3" &&firstAttendee}
                    {seats.value === "3" &&secondAttendee}
                    {seats.value ==="2" &&firstAttendee}
                    {seats.value === "" &&firstAttendee}
                    {seats.value === "1" &&firstAttendee}
                    {seats.value ==="2" &&secondAttendee}
                    {seats.value === "3" &&thirdAttendee}
                    <span className='add-attendee'>
                        <div>
                            <img 
                                src='https://res.cloudinary.com/skiltime/image/upload/v1650529448/add_ovpw7i.png'
                                alt='add-attendee'
                            />
                        </div>
                        <p className='add-attendee-text'>Add an Attendee</p>
                    </span>
                </div>
              </React.Fragment>
          :
              <React.Fragment>
                {isLoading === true? 
                  <Loader /> 
                : 
                  <>
                    <h1 className='title'>{event.title}</h1>
                    <p className='sub-titles'>{event.date}</p>
                  </>
                }
              </React.Fragment>
          }
        </div>
      
        {step === 1 ? 
          <div className="buttons">
              <button disabled={isSubmitting} onClick={(e) => Next(e)} 
                type="submit" className="button book"
              >
                {isSubmitting === true? <Spinner /> :"Book Ticket"}
              </button>
              <button onClick={close} id="signup" type="button" 
                className="button cancel"
              >
                Cancel
              </button>
          </div>
          :
          <div className="buttons">
            <button onClick={(e) => handleSubmit(e)} type="submit" className="button book">
            {isSubmitting === true? <Spinner /> :"Submit"}
            </button>
              <button onClick={(e) => Back(e)} id="signup" type="button" 
                className="button cancel"
              >
                Back To Booking
              </button>
          </div>
      }
    </form>
  );
}
