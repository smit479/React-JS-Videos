import React, { useState } from 'react';

const Forms = () => {
  // 1. Unified state variable name
  const [name, setName] = useState({ firstName: 'Bob', lastName: 'Builder' });

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>First Name:</label>
        <input
          type="text"
          value={name.firstName}
          // 2. Copies existing state, then updates only firstName
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        /><br/>
<br></br>  
        <label>Last Name:</label>
        <input
          type="text"
          value={name.lastName}
          // 2. Copies existing state, then updates only lastName
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>

      {/* Live Preview */}
      <h3>Full Name: {name.firstName} {name.lastName}</h3>
    </div>
  );
};

export default Forms;
