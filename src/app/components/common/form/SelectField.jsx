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
   const optionsArray=!Array.isArray(options)&& typeof(options)==="object"?
      Object.keys(options).map(
         optionName => ({
            name: optionName, value: options[optionName].name
         }))
      :
      options
   const handleChange = ({target}) => {
      onChange({name:target.name, value: target.value})       
    };
   return (
      <div className="mb-4">
         <label htmlFor="validationCustom04" className="form-label">
            {label}
         </label>
         <select 
               label="Choose your profession"
               className={getInputClasses()}
               name='profession'
               id="validationCustom04" 
               value={value}
               onChange={handleChange}
         >
          <option disabled value="">
            {defaultOption}
            </option>
            { 
            optionsArray&&optionsArray.map((option)=>(
               <option value={option.value} key={option._id}>
                  {option.name}
               </option>
            ))}
         </select>
                        {error && <div className="invalid-feedback">
                           {error}
                         </div>}
                        </div>
    );
}
 
SelectField.propTypes = {
   label: PropTypes.string,
   defaultOption:PropTypes.string,
   name:PropTypes.string,
   value:PropTypes.string,
   onChange: PropTypes.func,
   error: PropTypes.string,
   options:PropTypes.oneOfType([PropTypes.object,PropTypes.array])
}
export default SelectField;