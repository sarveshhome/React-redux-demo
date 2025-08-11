import React, {useEffect} from 'react';
import ChildComponent from './ChildComponent.jsx';

function ParentComponent(){
    const [message, setMessage] = React.useState("");

    const handleButtonClick = () => {
        setMessage("Hello from Parent Component!");
    };

    return (
        <div>
            <h1> Parent Component </h1>
            <ChildComponent onSendMessage={handleButtonClick} />
        </div>
    );
}

export default ParentComponent;