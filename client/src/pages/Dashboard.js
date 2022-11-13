import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import "../css/Dashboard.css"

 
 const Home = () => {
   
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid #1a1a1a' }}
        >
          <nav className="col-12 col-md-10 mb-3 p-3"
          style= {{textAlign:'center',padding:'1.4rem'}}>

            <div style={{margin:'0 auto',maxWidth:'80%',display:'flex',justifyContent:'space-around'}}>
          {/* <NavLink to="/">Wardrobe</NavLink> */}
          {/* <NavLink to="/add">Add to my closet</NavLink> */}
          <Link to="/add">
            <img src= "https://i.postimg.cc/VNgvJybY/adding.png" alt="add to my closet"></img>
          </Link>
          <NavLink to="/category">See My Closet</NavLink>
        </div>
        </nav>
        </div>
      </div>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid #1a1a1a' }}
        >
          <nav className="col-12 col-md-10 mb-3 p-3"
          style= {{textAlign:'center',padding:'1.4rem'}}>

            <div style={{margin:'0 auto',maxWidth:'80%',display:'flex',justifyContent:'space-around',}}>
        {/* <NavLink to="/add">Add to my Closet</NavLink> */}
        </div>
        </nav>
        </div>
        <div className="col-12 col-md-8 mb-3">
        </div>
      </div>


    </main>
  );
 };

export default Home;

