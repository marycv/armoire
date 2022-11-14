import React from 'react';
// import { Link } from 'react-router-dom';
import "../css/Start.css"
function Start () {
    
    return (
    <div className="flex-row justify-center">
        <div className="col-12">
        <h1>WELCOME TO ARMOIRE!</h1>
        <p>THIS APPLICATION SUPPORTS USERS IN CREATING A VIRTUAL CLOSET! SAY HELLO TO ALL THE FORGOTTEN T-SHIRTS AND GOODBYE TO CLUTTER!</p>
        
        <div className="door">
        <img src ="https://i.postimg.cc/WbRQCPqm/door.png" alt="closet door"></img>
        </div>
        {/* <Link className="btn btn-lg btn-info m-2" to="/login">
            Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
            Signup
        </Link> */}
        </div>
    </div>
    );
  
    
}

export default Start;