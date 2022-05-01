import React from  'react';
import './index.scss'

export const Spinner = () => {
    return(
        <div className="Spinner">
            <div className="SpinnerHalf SpinnerHalf--left"></div>
            <div className="SpinnerHalf SpinnerHalf--right"></div>
        </div>
    )
};

export const Loader = () => {
    return(
        <section>
            <div className="loading"></div>
        </section>
    )
}