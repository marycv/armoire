// import { ClothesContext } from '../contexts/ClothesContext'
// import { useContext, useState, useEffect } from 'react'
// import styles from '../css/OutfitPicker.css'
// import OutfitDisplay from './OutfitDisplay'
// import { v4 as uuidv4} from 'uuid'

// const OutfitPicker = () => {
//   const { clothes } = useContext(ClothesContext);
//   const tShirts = clothes.filter(item => item.type === 'tShirt');
//   const shirts = clothes.filter(item => item.type === 'shirt');
//   const sweaters = clothes.filter(item => item.type === 'sweater');
//   const trousers = clothes.filter(item => item.type === 'trousers');
//   const shorts = clothes.filter(item => item.type === 'shorts');
//   const jackets = clothes.filter(item => item.type === 'jacket');
//   const shoes = clothes.filter(item => item.type === 'shoes');
//   const accessories = clothes.filter(item => item.type === 'accessory');


//   const checkIfRandomOutfitNeedsUpdate = () => {
//       const localData = localStorage.getItem('randomOutfit');
//       if(localData) {
//         const localDataArray = JSON.parse(localData);
//         const now = new Date().getTime();
//         const arrayTime = localDataArray[localDataArray.length-1].timestamp
//         const diff = now - arrayTime
//         const millisecIn12H = 1000*60*60*12;
//         if(diff > millisecIn12H) {
//           return null
//         } else {
//           return localDataArray
//         }
//       } else {
//         return null
//       }
//   }

//   const [outfitItems, setOutfitItems] = useState([]);
//   const [randomOutfit, setRandomOutfit] = useState(checkIfRandomOutfitNeedsUpdate());

//   const handleChange = e => {
//     console.log(e.target.value)
//     const index = outfitItems.indexOf(e.target.value);
//     if (index !== -1) {
//       setOutfitItems(outfitItems.filter(item => item !== e.target.value))
//     } else {
//       setOutfitItems(prevState => [e.target.value, ...prevState]);
//     }
//   }

//   const getRandomItem = itemList => itemList[Math.floor(Math.random() * itemList.length)];

//   const pickNewOutfit = e => {
//     e.preventDefault();
//     const someOutfit = [];

//     if (outfitItems.includes('tShirt')) {
//       someOutfit.push(getRandomItem(tShirts));
//     }
//     if (outfitItems.includes('shirt')) {
//       someOutfit.push(getRandomItem(shirts));
//     }
//     if (outfitItems.includes('sweater')) {
//       someOutfit.push(getRandomItem(sweaters));
//     }
//     if (outfitItems.includes('trousers')) {
//       someOutfit.push(getRandomItem(trousers));
//     }
//     if (outfitItems.includes('shorts')) {
//       someOutfit.push(getRandomItem(shorts));
//     }
//     if (outfitItems.includes('jacket')) {
//       someOutfit.push(getRandomItem(jackets));
//     }
//     if (outfitItems.includes('shoes')) {
//       someOutfit.push(getRandomItem(shoes));
//     }
//     if (outfitItems.includes('accessory')) {
//       someOutfit.push(getRandomItem(accessories));
//     }
//     console.log(someOutfit);
//     setRandomOutfit([...someOutfit, {timestamp: new Date().getTime(), id: uuidv4()}]);
//   }

//   useEffect( () => {
//     if(randomOutfit) {
//       localStorage.setItem('randomOutfit', JSON.stringify(randomOutfit))
//     }
//   }, [randomOutfit]);

//   return (
//     <div className={styles.outfitContainer}>
//       <p className={styles.lead}>What do you want to wear today?</p>
//       <form onSubmit={pickNewOutfit}>
//         <label className={styles.checkboxContainer} htmlFor='tShirt'>T-shirt
//           <input type="checkbox" id="tShirt" name="tShirt" value="tShirt" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <label className={styles.checkboxContainer} htmlFor='shirt'>Shirt
//           <input type="checkbox" id="shirt" name="shirt" value="shirt" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <label className={styles.checkboxContainer} htmlFor='sweater'>Sweater
//           <input type="checkbox" id="sweater" name="sweater" value="sweater" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <label className={styles.checkboxContainer} htmlFor='trousers'>Trousers
//           <input type="checkbox" id="trousers" name="trousers" value="trousers" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <label className={styles.checkboxContainer} htmlFor='shorts'>Shorts
//           <input type="checkbox" id="shorts" name="shorts" value="shorts" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <label className={styles.checkboxContainer} htmlFor='shoes'>Shoes
//           <input type="checkbox" id="shoes" name="shoes" value="shoes" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <label className={styles.checkboxContainer} htmlFor='accessory'>Accessory
//           <input type="checkbox" id="accessory" name="accessory" value="accessory" onChange={handleChange} />
//           <span className={styles.checkmark}></span>
//         </label>
//         <div className={styles.btnContainer}>
//           <button type="sumbit">Get new outfit!</button>
//         </div>
//       </form>
//       <div>
//         {randomOutfit && <OutfitDisplay outfit={randomOutfit} />}
//       </div>
//     </div>
//   );
// }

// export default OutfitPicker;

import {useState } from "react";
import ImageUpload from "./ImageUpload";
import "../css/App.css";
import CldGallery from "./CldGallery";

import { Cloudinary } from "@cloudinary/url-gen";

function App() {
  const [imagesUploadedList, setImagesUploadedList] = useState([]);

  const cld = new Cloudinary({
    cloud: {
      cloud_name: "dylijfrpe", //Your cloud name
      upload_preset: "yepsgsmc" //Create an unsigned upload preset and update this
    }
  });

  const onImageUploadHandler = (publicId) => {
    setImagesUploadedList((prevState) => [...prevState, publicId]);
  };

  const deleteAllImages = async () => {
    try {
      //You can call an API in your backend if you want to delete images.
      //Thi021s is the API you should call:
      //https://cloudinary.com/documentation/image_upload_api_reference#destroy
      // const responseData = await fetch(
      //   "http://localhost:5000/api/photos/delete"
      // );
      setImagesUploadedList([]);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <button className="redButton" onClick={deleteAllImages}>
        Delete all images
      </button>
      <ImageUpload
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
        upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
        onImageUpload={(publicId) => onImageUploadHandler(publicId)}
      />
      <p>
        This mini project demonstrates the use of Upload widget +
        transformations on uploaded images in responsive way useing hooks in
        React
      </p>
      <CldGallery
        imagesUploaded={imagesUploadedList}
        {...cld}
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
      />
    </div>
  );
}

export default App;
