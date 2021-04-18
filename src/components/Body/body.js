import React from 'react';
import Home from './home';
import About from './about';

export default function body(props) {
    return (
        <div className={props.isOpen? "bodyOpen" : "bodyClosed"}>
            {
                props.body? <About /> : <Home />
            }
        </div>
    )
}
