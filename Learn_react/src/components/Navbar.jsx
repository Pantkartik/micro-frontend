import React from "react";


function Navbar(){
    return (
        <>
        <div className="navbar">
            <div className="leftnav">
                <span id="span"> React </span>
            </div>

            <div className="rightnav">
                <button className="bt-login">Login</button>
                <button className="bt-logout">Logout</button>
            </div>
        </div>
        </>
    )
}


export default Navbar