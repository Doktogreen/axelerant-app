import React from "react";
import ConfigurationModal from "../Configuration/Modal";
import './index.scss'

const Accordion = () => {
    return (
        <div className="Accordion">
            <h2 className="accordion-heading">Select Configuration</h2>
            <details open>
                <summary>
                    Manual Configuration
                    <p className="summary-paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </summary>
                <div>
                    <h4 className="div-heading">Services Access</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. 
                    Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris 
                    dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.
                </div>
            </details>
            <details>
                <summary>
                    Semi-auto Configuration
                    <p className="summary-paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </summary>
                <div>
                <h4 className="div-heading">Services Access</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. 
                    Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris 
                    dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.
                </div>
            </details>
            <details>
                <summary>
                    Automatic Configuration
                    <p className="summary-paragraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </summary>
                <div>
                    <h4 className="div-heading">Services Access</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius felis. 
                    Integer posuere urna ut mi porta, vel fringilla dolor convallis. Sed laoreet sodales sapien vel vestibulum. Nulla dictum eros ut efficitur porttitor. Mauris 
                    dignissim, lectus sit amet euismod pretium, ex purus condimentum erat, eu feugiat nisi ipsum ac eros.
                </div>
            </details>
            <span className="accordion-btns">
                <div className="btn-wrapper">
                    <ConfigurationModal />
                </div>
                <div className="btn-wrapper">
                    <button className="btn2">
                        <img 
                            src="https://res.cloudinary.com/skiltime/image/upload/v1650529450/cancel_kloptn.png"
                            alt="cancel" 
                        /> 
                        Cancel
                    </button>
                </div>
            </span>
        </div>
    );
  };
  
  export default Accordion;
  