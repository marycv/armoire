import { openUploadWidget } from "../utils/CloudinaryService";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_GARMENT } from '../utils/mutations';
// export const COMPILE_IMAGES = gql `
// query Query {
//   articles {
//     imageURL
//   }
// }
// `


const ImageUpload = (props) => {
  const [image, setImage] = useState('');
  const [addArticle, { error }] = useMutation(ADD_GARMENT);
  
  
const handleImageSubmit = async (event) => {
  event.preventDefault();

  try {
    const { error } = await addArticle({
      variables: { image },
    });
    window.location.reload();
  } catch (err) {
    console.error(error);
  }
};


  const uploadImageWidget = () => {
    //console.log(props);
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

          props.onImageUpload(result.info.url);
          console.log(result.info.url);

        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="greenButton" onClick={uploadImageWidget} onSubmit={handleImageSubmit} onChange= {(event) => setImage(event.target.value)} >
      Upload Image
    </button>
    
  );


};

export default ImageUpload;
