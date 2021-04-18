import React, { useState } from 'react';
import Navbar from './Navbar/navbar';
import Body from './Body/body';

export default function Landing() {
    const [isOpen, setIsOpen] = useState(false);
    const [body, setBody] = useState(0);
    return (
        <div className="home">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} body={body} setBody={setBody} />
            <Body isOpen={isOpen} body={body} />
            {console.log(isOpen)}
        </div>
    )
}
