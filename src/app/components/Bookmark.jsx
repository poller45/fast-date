import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faBookmark } from "@fortawesome/free-solid-svg-icons";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
          {status ? <FontAwesomeIcon icon={faBookmark} /> : <FontAwesomeIcon icon={faFaceGrin} />}
        </button>
    );
};
BookMark.propTypes = {
   status: PropTypes.bool
}
export default BookMark;

