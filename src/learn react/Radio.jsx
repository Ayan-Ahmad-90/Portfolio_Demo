// Radio.jsx
import React from 'react';

function Radio({ value, onChange }) {
  return (
    <div className="radio-box">
      <label><input type="radio" name="gender" value="Male" checked={value === 'Male'} onChange={onChange} /> Male</label>
      <label><input type="radio" name="gender" value="Female" checked={value === 'Female'} onChange={onChange} /> Female</label>
      <label><input type="radio" name="gender" value="Other" checked={value === 'Other'} onChange={onChange} /> Other</label>
    </div>
  );
}

export default Radio;
