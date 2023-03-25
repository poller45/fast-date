import React from 'react';
import PropTypes from 'prop-types';
const RadioField = ({options, name, onChange, value,label}) => {
   return (
      <div className="mb-4"> 
         <label className="form-label">
            {label}
         </label>
         {options.map(option => (
            <div
               key={option.name + "_" + option.value}
               className="form-check form-check-inline ms-2"
            >
            <input
               className="form-check-input"
               type="radio"
               name={name}
               id={option.name + "_" + option.value}
               checked={option.value===value}
               value={option.value}
               onChange={onChange}
            />
            <label
               className="form-check-label"
               htmlFor={option.name + "_" + option.value}>
               {option.name}
            </label>
         </div>
         ))}
      
   </div>
     );
}
 
RadioField.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   value:PropTypes.string,
   onChange: PropTypes.func,
   options:PropTypes.array
}
export default RadioField;