import React from 'react';

function Option({ selected = [], onChange }) {
  const roles = ['Admin', 'User', 'Manager'];

  return (
    <div className="checkbox-box">
      {roles.map(role => (
        <label key={role}>
          <input
            type="checkbox"
            value={role}
            checked={selected.includes(role)}
            onChange={onChange}
          />
          {role}
        </label>
      ))}
    </div>
  );
}

export default Option;
