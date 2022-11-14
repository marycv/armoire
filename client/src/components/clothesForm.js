import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
 import { ADD_ARTICLE } from '../utils/mutations';
 //import {Outfit_Picker} from '../components/OutfitPicker'

import { Link } from 'react-router-dom'

import { openUploadWidget } from "../utils/CloudinaryService";

const ClothesForm = (props) => {

  const uploadImageWidget =() => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: props.cloud_name,
        uploadPreset: props.upload_preset,
        tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info.public_id);
          console.log(result.info.public_id);
          const URL = result.info.url
         console.log(URL);
          
        }
      }
    )
     myUploadWidget.open();
  };
  const [typeOfItem, setTypeOfItem] = useState('')

  //const { dispatch } = useContext(ClothesContext);
  //console.log(dispatch);
  const [occassion, setOccassion] = useState('')
  const [color, setColor] = useState('')
  const [material, setMaterial] = useState('')
  const [URL , setUrl] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [addArticle, { error, data }] = useMutation(ADD_ARTICLE);

  const handleTypeChange = (e) => {
    setTypeOfItem(e.target.value)
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

  const handleURL = (e) => {
    setUrl(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      material === '' ||
      color === '' ||
      occassion === '' ||
      typeOfItem === ' '
    ) {
      setFeedback('You must fill in all the fields!')
      setTimeout(() => {
        feedback(null)
      }, 3000)
    } else {
      const newItem = {
        clothingType: typeOfItem,
        material,
        color,
        occassion,
        id: uuidv4(),
        URL:''
      }
      console.log(newItem)
      // addArticle({type: 'ADD_ITEM', newItem});
       const { data } = await addArticle({
         variables: newItem ,
       });
       console.log('data: ',data);
      //  navigate('/');
    }
  }

  return (
    <div>
      <h2 style={{ margin: '3rem' }}>Add a new item to your wardrobe</h2>
<div>
      <h1>Link to image</h1>
           <NavLink to= "/add Image" onClick={handleURL}>Add Image</NavLink>
      </div>     
      <select
        style={{
          backgroundColor: '#262526',
          margin: '1rem',
          padding: '.5rem',
          color: '#262526',
          width: '50%',
          background: '#ddd',
        }}
        onChange={handleTypeChange}
      >
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
          <option value="">occasion</option>
          <option value="wedding">Wedding</option>
          <option value="night-out">Night Out</option>
          <option value="work">Work</option>
          <option value="sports">Sport</option>
          <option value="costume">costume</option>
          <option value="costume">costume</option>
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


           {/* <h1>Link to image</h1>
           <NavLink to= "/add Image" onClick={handleURL}>Add Image</NavLink> */}
         </div>

         <button className="greenButton" onClick={uploadImageWidget}>
      Upload Image
    </button>
         <button type="submit" onClick={handleSubmit}>Add the item </button>
     </div>
  );  
  };
export default ClothesForm;
