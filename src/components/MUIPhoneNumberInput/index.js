import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

function MUIPhoneNumberInput({ value, setValueHandler, label }) {
  return (
    <PhoneInput
      country={'eg'}
      specialLabel={label}
      value={value}
      inputStyle={{ width: '100%' }}
      inputClass="form-control"
      dropdownStyle={{ width: '250px' }}
      onChange={setValueHandler}
      autoFormat={true}
    />
  );
}

export default MUIPhoneNumberInput;
