import React from "react";
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 8 && number < 15) {
            return "WOW!!! So many people will meet";
        }
        if (lastOne === 1) return "Only one person will meet";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "several person will meet";
        return "person will meet you";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}   with you today`
                    : "No one will meet you"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
   length: PropTypes.number
};
export default SearchStatus;