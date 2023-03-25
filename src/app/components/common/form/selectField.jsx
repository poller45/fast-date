import React from 'react';
import PropTypes from 'prop-types';
const SelectField = ({
   label,
   value,
   onChange,
   defaultOption,
   options,
   error
}) => {
   
   const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
   let optionsArray=!Array.isArray(options) && typeof (options) === "object"?
      Object.keys(options).map((optionName)=>({name: options[optionName].name, value: options[optionName]._id})):options
      
   return (
      <div className="mb-4">
            <label htmlfor="validationCustom04" class="form-label">{label}</label>
             <select
                className={getInputClasses()}
                id="validationCustom04"
                name='profession'
                value={value}
                onChange = {onChange}
             >
                <option disabled value="">
                  {defaultOption}
            </option>
            
            {
               optionsArray&& optionsArray.map(option=><option
                      value={option.value}
                      key={option.value}
                   >{option.name}</option>)
               }
                     </select>
         {error&&<div className="invalid-feedback">
            {error}
         </div>}
         </div>
 );
}
 
SelectField.defaultProps = { type: 'text' };

SelectField.propTypes = {
   defaultOption: PropTypes.string,
   label: PropTypes.string, 
   value:PropTypes.string,
   onChange: PropTypes.func,
   error: PropTypes.string,
   option: PropTypes.oneOfType([PropTypes.object,PropTypes.array])
}
export default SelectField;