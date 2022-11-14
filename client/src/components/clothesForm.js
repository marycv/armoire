import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
 import { ADD_ARTICLE } from '../utils/mutations';

import { Link } from 'react-router-dom'
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_ARTICLE } from '../utils/queries';
// import { CREATE_ARTICLE } from '../utils/mutation';

//const { dispatch } = useContext(ClothesContext);
  //console.log(dispatch);
const ClothesForm = () => {
  const [clothingType, setClothingType] = useState('')
  const [occassion, setOccassion] = useState('')
  const [color, setColor] = useState('')
  const [material, setMaterial] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [addArticle, { error, data }] = useMutation(ADD_ARTICLE);

  const handleClothingTypeChange = (e) => {
    setClothingType(e.target.value)
  }
  const handleOccassion = (e) => {
    setOccassion(e.target.value)
  }
  const handleColorChange = (e) => {
    setColor(e.target.value)
  }
  const handleMaterial = (e) => {
    setMaterial(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      material === '' ||
      color === '' ||
      occassion === '' ||
      clothingType === ' '
    ) {
      setFeedback('You must fill in all the fields!')
      setTimeout(() => {
        feedback(null)
      }, 3000)
    } else {
      const newItem = {
        clothingType: clothingType,
        material: material,
        color: color,
        occassion: occassion,
        // id: uuidv4(),
        // imageURL:''
      }
      console.log(newItem)
      
       const { error } = await addArticle({
         variables: newItem ,
       });
      //  console.log('data: ',data);
      //  navigate('/');
    }
  }

  return (
    <div>
      <h2 style={{ margin: '3rem' }}>Add a new item to your wardrobe</h2>
      <select
        style={{
          backgroundColor: '#262526',
          margin: '1rem',
          padding: '.5rem',
          color: '#262526',
          width: '50%',
          background: '#ddd',
        }}
        onChange={handleClothingTypeChange}
      >
        <option value="">Type of item</option>
        <option value="coats">Coats</option>
        <option value="sweaters-cardigans">Sweaters & Cardigans</option>
        <option value="shirts-blouses">Shirts & Blouses</option>
        <option value="tshirts">T-shirts</option>
        <option value="pants">Pants</option>
        <option value="dresses">Dresses</option>
        <option value="undergarments">Undergarments</option>
        <option value="accessories">Accessories</option>
        <option value="sports-wear">Sports Wear</option>
      </select>

      <div>
        <select
          style={{
            backgroundColor: '#262526',
            margin: '1rem',
            padding: '.5rem',
            color: '#262526',
            width: '50%',
            background: '#ddd',
          }}
          onChange={handleColorChange}
        >
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
        <select
          style={{
            backgroundColor: '#262526',
            margin: '1rem',
            padding: '.5rem',
            color: '#262526',
            width: '50%',
            background: '#ddd',
          }}
          onChange={handleOccassion}
        >
          <option value="">Occassion</option>
          <option value="wedding">Wedding</option>
          <option value="night-out">Night Out</option>
          <option value="work">Work</option>
          <option value="sports">Sport</option>
          <option value="costume">costume</option>
          <option value="other">Other</option>
        </select>
        <select
          style={{
            backgroundColor: '#262526',
            margin: '1rem',
            padding: '.5rem',
            color: '#262526',
            width: '50%',
            background: '#ddd',
          }}
          onChange={handleMaterial}
        >
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
        <NavLink to="/add Image">Add Image</NavLink>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add the item{' '}
      </button>
    </div>
  )
}
export default ClothesForm
