import { openUploadWidget } from "../utils/CloudinaryService";

const ImageUpload = (props) => {
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
    <button className="greenButton" onClick={uploadImageWidget}>
      Upload Image
    </button>
    
  );
};

export default ImageUpload;
