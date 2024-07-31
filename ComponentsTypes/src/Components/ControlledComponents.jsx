// Controlled Components

import React, { useState } from 'react';

function ControlledComponents() {

    const[value,setValue] = useState('');

    const handleChange = (e) => (setValue(e.target.value));

    return (
        <div>
            <h3>Example of Controlled Component</h3>
            <input type="text" value={value} onChange={handleChange} />
            <p>Current Value {value}</p>
        </div>
    );
}

export default ControlledComponents;

