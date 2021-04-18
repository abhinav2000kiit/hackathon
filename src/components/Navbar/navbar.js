import React from 'react'

export default function navbar(props) {
    return (
        <div className={props.isOpen? "navbarOpen" : "navbarClosed"}>
            <div className="navHead">
                <i className="fas fa-bars navIcon" onClick={() => props.setIsOpen(!props.isOpen)}></i> 
                <div className={props.isOpen? "navHeading" : "navHeadingNone"}>1828042</div>
            </div>
            <div className="navBody">
                <div className={props.body==0? "navMenusActive" : "navMenus"} onClick={() => props.setBody(0)}>
                    <i class="fas fa-home navIcon"></i> 
                    <div className={props.isOpen? "navHeading" : "navHeadingNone"}>Home</div>
                </div>
                <div className={props.body==1? "navMenusActive" : "navMenus"} onClick={() => props.setBody(1)}>
                    <i class="fas fa-user navIcon"></i> 
                    <div className={props.isOpen? "navHeading" : "navHeadingNone"}>About Me</div>
                </div>                     
            </div>
        </div>
    )
}
