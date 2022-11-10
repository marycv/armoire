import React from 'react';
//import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';
//import OutfitDisplay from '../components/OutfitDisplay';
//import add from '../components/OutfitDisplay'


// import { QUERY_THOUGHTS } from '../utils/queries';

 const Home = () => {
   // const { loading, data } = useQuery(QUERY_THOUGHTS);
   // const thoughts = data?.thoughts || [];

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
          <NavLink to="/">Wardrobe</NavLink>
        <NavLink to="/add">Add item</NavLink>
        
        
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

