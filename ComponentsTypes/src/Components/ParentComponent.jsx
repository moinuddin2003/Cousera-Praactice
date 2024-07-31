import React , { useState } from "react";
import ControlledComponents from "./ControlledComponents";
import UnControlledComponent from "./UnControlledComponents";

function ParentComponent() {

    const [activeComponent, setActiveComponent] = useState('UnControlledComponent');
    return (
        <div>
            <button onClick={() => setActiveComponent('UnControlledComponent')}>UnControlledComponent</button>
            <br />
            <button onClick={() => setActiveComponent('ControlledComponents')}>ControlledComponents</button>

            {activeComponent === 'UnControlledComponent' ? <UnControlledComponent />  : <ControlledComponents /> }
            
        </div>
    );
};

export default ParentComponent;