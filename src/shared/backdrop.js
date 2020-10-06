import React from 'react';
import './backdrop.css';

function Backdrop(props) {

    return (
        <React.Fragment>
            {props.menuIsOpen === true ? <div onClick={props.menuHandler} className='backdrop'></div> : null}
        </React.Fragment>
    )
}

export default Backdrop
