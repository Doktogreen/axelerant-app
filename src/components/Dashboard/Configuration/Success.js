import React from "react";
import { Loader } from "../../../utilities";
import './index.scss'

export default function Success({loading}){
    return(
        <div id="success" className="success-container">
            {loading === true ? 
                <Loader />
            :
                <>
                    <div className="success-img">
                        <img  
                            src="https://res.cloudinary.com/skiltime/image/upload/v1650950827/image_1_1_tvvwmf.png" 
                            alt="clapping" 
                        />
                    </div>
                    <h1 className="success-title">Great Job!</h1>
                    <p className="success-message">Your configurations have been updated successfully.</p>
                </>
            }
        </div>
    )
}