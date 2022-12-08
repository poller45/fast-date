import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faBookmark } from "@fortawesome/free-solid-svg-icons";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
          
          
          {status ? <FontAwesomeIcon icon={faBookmark} /> : <FontAwesomeIcon icon={faFaceGrin} />}
         
         
          
        </button>
    );
};

export default BookMark;

