import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/me">
           <img src="https://i.postimg.cc/BvBM87QJ/armoire-logo.png" alt="armoire logo"/>
          </Link>
          
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              {/* <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link> */}
              <button className="btn btn-lg btn-dark m-2" onClick={logout}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-warning m-2" to="/login">
                LOGIN
              </Link>
              <Link className="btn btn-lg btn-dark m-2" to="/signup">
                SIGNUP
              </Link>
            </>
          )
        }
        </div>
      </div>
    </header>
  );
};

export default Header;
