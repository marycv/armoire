import React,{ useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom';
import "../css/App.css";
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_ARTICLE } from '../utils/queries';
// import { CREATE_ARTICLE } from '../utils/mutation';

const ClothesForm = () => {
  const [typeOfItem,setTypeOfItem] = useState('');

  //const { dispatch } = useContext(ClothesContext);
  //console.log(dispatch);
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleTypeChange = e => {
    setTypeOfItem(e.target.value);
  }
  const handleOccasion = e => {
    setDescription(e.target.value);
  }
  const handleColorChange = e => {
    setColor(e.target.value);
  }
  const handleMaterial = e => {
    setBrand(e.target.value);
  }
  const handleSubmit = e => {
          e.preventDefault();

    if(description === '' || color === '' || brand === ''){
      setFeedback('You must fill in all the fields!')
      setTimeout(() => {
        feedback(null);
      }, 3000)
    } else {
      const newItem = {
        type: typeOfItem,
        description,
        color,
        brand,
        id: uuidv4()
      }
      // dispatch({type: 'ADD_ITEM', newItem});
      //  navigate('/');
    }
  }

  return (
    <div>
      <h2 style={{margin:'3rem'}}>Add a new item to your wardrobe</h2>
      <select style={{backgroundColor:'#262526',margin:'1rem',padding:'.5rem',color:'#262526',width:'50%',background:"#ddd"}} onChange={handleTypeChange}>
        <option value="">Type of item</option>
        <option value="coats">Coats</option>
        <option value="shirt">Shirt</option>
        <option value="sweater">Sweater</option>
        <option value="trousers">Trousers</option>
        <option value="shorts">Shorts</option>
        <option value="jacket">Jacket</option>
        <option value="shoes">Shoes</option>
        <option value="accessory">Accessory</option>
      </select>

         <div>
           <select style={{backgroundColor:'#262526',margin:'1rem',padding:'.5rem',color:'#262526',width:'50%',background:"#ddd"}} onChange={handleColorChange}>
         <option value="">Color</option>
         <option value="red">Red</option>
         <option value="blue">Blue</option>
         <option value="orange">Orange</option>
         <option value="pink">Pink</option>
         <option value="green">Green</option>
         <option value="yellow">Yellow</option>
         <option value="brown">Brown</option>
        <option value="beige">Beige</option>
       </select> 
        </div>
         <div>
        <select style={{backgroundColor:'#262526',margin:'1rem',padding:'.5rem',color:'#262526',width:'50%',background:"#ddd"}} onChange={handleOccasion}>
          <option value="">occasion</option>
          <option value="wedding">Wedding</option>
          <option value="night-out">Night Out</option>
          <option value="work">Work</option>
          <option value="sports">Sport</option>
          <option value="costume">costume</option>
          <option value="costume">costume</option>
        </select> 

       <select style={{backgroundColor:'#262526',margin:'1rem',padding:'.5rem',color:'#262526',width:'50%',background:"#ddd"}} onChange={handleMaterial}>
         <option value="">Material</option>
         <option value="wool">Wool</option>
         <option value="cotton">Cotton</option>
         <option value="silk">Silk</option>
         <option value="denium">Denium</option>
         <option value="leather">leather</option>
         <option value="fur-synthentic-fur">Fur</option>
         <option value="nylon">Nylon</option>
         <option value="spandex">Spandex</option>
         <option value="rayon">Rayon</option>
         <option value="jute">Jute</option>
         <option value="combination">Combination</option>
         <option value="not-sure">Not Sure!</option>
       </select> 

           <h1>Link to image</h1>
           <NavLink to= "/add Image">Add Image</NavLink>
         </div>
         <button type="submit">Add the item</button>


     </div>
  );  



  };
export default ClothesForm;