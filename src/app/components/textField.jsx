import React from 'react';
import PropTypes from 'prop-types';
const TextField = ({label, type, name, value, onChange, error}) => {
   return (
      <div className="mb-4">
         <label htmlFor={name} >{label}</label>
            <input
               type={type}
               id={name}
               name={name}
               value={value}
               onChange={onChange} />
              {error && <div className="invalid-feedback">{error}</div>}
      </div>
   );
}
TextField.defaultProps = { type: 'text' }

TextField.propTypes = {
   label: PropTypes.string,
   type:PropTypes.string,
   name:PropTypes.string,
   value:PropTypes.string,
   onChange: PropTypes.func,
   error: PropTypes.string
}
export default TextField;