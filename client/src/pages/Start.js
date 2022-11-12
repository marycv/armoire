import React from 'react';
import { Link } from 'react-router-dom';

function Start () {
    
    return (
    <div>
        <Link className="btn btn-lg btn-info m-2" to="/login">
            Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
            Signup
        </Link>
    </div>
    );
  
    
}

export default Start;