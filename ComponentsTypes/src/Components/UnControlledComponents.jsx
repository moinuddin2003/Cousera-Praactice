// UnControlled Components

import React, { useRef } from 'react';

export default function UnControlledComponent() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.select();
    };
    return (
        <div>
            <h3>Example of UnControlled Component</h3>
            <input ref={inputRef} type="text" defaultValue="Initial Value" />
            <button onClick={handleFocus}>Select Value</button>
        </div>
    );

        // const inputRef = useRef(null);

        // const handleSubmit = (event) => {
        //     event.preventDefault(); // Prevent the form from reloading the page
        //     const inputValue = inputRef.current.value;
        //     console.log(inputValue); // Do something with the value, for example, log it
        // };

        // return (
        //     <form onSubmit={handleSubmit}>
        //         <input ref={inputRef} type="text" />
        //         <button type="submit">Submit</button>
        //     </form>
        // )
};

