import React from 'react';
import { Link } from 'react-router-dom';

function Start () {
    
    return (
    <div className="flex-row justify-center">
        <div className="col-md-6 offset-md-3">
        <h1>Welcome to Armoire!</h1>
        <p>A virtual closet app to help you stay organized!</p>
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