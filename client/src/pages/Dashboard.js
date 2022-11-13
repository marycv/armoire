import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import "../css/Dashboard.css"

 
 const Home = () => {
   
  return (
    <main>
      <div className="flex-row justify-center">
        <div>
          <nav className="col-12 col-md-10 mb-3 p-3"
           style= {{textAlign:'center',padding:'1.4rem'}}>

            <div style={{margin:'0 auto',maxWidth:'80%',display:'flex',justifyContent:'space-around'}}>
          {/* <NavLink to="/">Wardrobe</NavLink> */}
          {/* <NavLink to="/add">Add to my closet</NavLink> */}
          <Link to="/add">
            <img src= "https://i.postimg.cc/VNgvJybY/adding.png" alt="add to my closet"></img>
          </Link>
          {/* <NavLink to="/category">See My Closet</NavLink> */}
          <Link to="/category">
            <img src= "https://i.postimg.cc/Wz1VZHfh/view.png" alt="view my closet"></img>
          </Link>
        </div>
        </nav>
        </div>
      </div>
    </main>
  );
 };

export default Home;

