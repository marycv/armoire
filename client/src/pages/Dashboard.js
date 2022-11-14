import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import "../css/Dashboard.css"

 
 const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const currentUser = data?.me || null;
   
  return (
    <main>
      <div className="flex-row justify-center">
        <div>
          <nav className="col-12"
           style= {{textAlign:'center',padding:'1.4rem'}}>

            <div className = "position-absolute top-50 start-50" style={{margin:'0 auto',maxWidth:'100%',maxHeight:'100%',justifyContent:'space-around'}}>
          {/* <NavLink to="/">Wardrobe</NavLink> */}
          {/* <NavLink to="/add">Add to my closet</NavLink> */}
          <Link to="/add" className='flex'>
            <img src= "https://i.postimg.cc/VNgvJybY/adding.png" alt="add to my closet"></img>
          </Link>
          {/* <NavLink to="/category">See My Closet</NavLink> */}
          <Link to="/category" className='flex'>
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

