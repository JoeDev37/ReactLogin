import React from "react";

function Container(props) {

    return(
        <div className='Container'>
            <h1>Login</h1>
            <hr />
            {props.children}
        </div>
    );

}

export default Container;