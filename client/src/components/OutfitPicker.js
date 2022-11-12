
 import { useState } from "react";
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
     <a href="/addnewitem">AddDetail</a>
      
      <ImageUpload
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
        upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
        onImageUpload={(publicId) => onImageUploadHandler(publicId)}
      />

      <CldGallery
        imagesUploaded={imagesUploadedList}
        {...cld}
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
      />
    </div>
  );

  
  
}

export default App;
