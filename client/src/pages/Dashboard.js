import React from 'react';
import { NavLink } from 'react-router-dom';
 const Home = () => {
   
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          Something here
          <nav className="col-12 col-md-10 mb-3 p-3"
          style= {{textAlign:'center',padding:'1.4rem'}}>

            <div style={{margin:'0 auto',maxWidth:'80%',display:'flex',justifyContent:'space-around'}}>
          <NavLink to="/wardrobe">See My Closet</NavLink>
        <NavLink to="/add">Add to my Closet</NavLink>
        
        
        </div>
        </nav>
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            "Something here"
          )} */}
        </div>
      </div>
    </main>
  );
 };

export default Home;

