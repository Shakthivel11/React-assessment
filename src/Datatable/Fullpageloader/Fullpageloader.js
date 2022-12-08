import React from "react";
import Spinner from "../../Images/giphy.gif"

export const Fullpageloader = () => {
  return(<div className="fp-container">
    
    <img src={Spinner} className="fp-loader" alt="loading"/>

    </div>
  )
};
