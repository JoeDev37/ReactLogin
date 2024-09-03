import React from "react";
// import Out from "./Output/Out";

function Child() {

    return(
        <div className="ChildDiv">
            <input id="usrName" type="text" placeholder="Username" />
            <input id="usrPass" type="password" placeholder="password" />
            <br />
            {/* <a href="Out.html" target="_blank" rel="noopener noreferrer">
                <button type="button">Submit</button>
            </a> */}

            <button>
                <a href="https://github.com/JoeDev37">Submit</a>
            </button>

        </div>
    );

}

export default Child;