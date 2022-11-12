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

  // const navigate = useNavigate();

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
        <option value="tShirt">T-shirt</option>
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
         <option value="red">Red</option>
         <option value="blue">Blue</option>
         <option value="orange">Orange</option>
         <option value="pink">Pink</option>
         <option value="green">Green</option>
         {/* <option value="jacket">Jacket</option>
//         <option value="shoes">Shoes</option>
//         <option value="accessory">Accessory</option> */}
       </select> 

       <select style={{backgroundColor:'#262526',margin:'1rem',padding:'.5rem',color:'#262526',width:'50%',background:"#ddd"}} onChange={handleMaterial}>
         <option value="">Material</option>
         <option value="wool">Wool</option>
         <option value="cotton">Cotton</option>
         <option value="silk">Silk</option>
         <option value="denium">Denium</option>
         <option value="leather">leather</option>
         {/* <option value="jacket">Jacket</option>
//         <option value="shoes">Shoes</option>
//         <option value="accessory">Accessory</option> */}
       </select> 
          
           <h1>Link to image</h1>
           <NavLink to= "/add Image">Add Image</NavLink>
         </div>
         <button type="submit">Add the item</button>
      
      {/* <div>
//         {feedback && <p className="feedback">feedback</p>}
//       </div> */}
     </div>
  );  

// const { loading ,data} = useQuery(QUERY_ARTICLE);
// const articleList = data?.article || [];
// const [articleData , setArticleData] = useState({
//   clothingType:'T-Shirt',
//   color:'Blue',
// });
// let navigate = useNavigate();

// const [createArticle, {error}] = useMutation(CREATE_ARTICLE);

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setArticleData({ ...articleData, [name]: value });
// };

// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   try {
//     const { data } = await createArticle({
//       variables: { ...articleData },
//     });

//     navigate(`/matchup/${data.createMatchup._id}`);
//   } catch (err) {
//     console.error(err);
//   }
//   setArticleData({
//     clothingType:'T-Shirt',
//     color:'Blue',
//   });
// };

// return(
//   <div className="card bg-white card-rounded w-25">
//   <div className="card-header bg-dark text-center">
//     <h1>Let's create a matchup!</h1>
//   </div>
//   <div className="card-body m-5">
//     {loading ? (
//       <div>Loading...</div>
//     ) : (
//       <form onSubmit={handleFormSubmit}>
//         <label>clothingType: </label>
//         <select name="clothingType" onChange={handleInputChange}>
//           {articleList.map((tech) => {
//             return (
//               <option key={tech._id} value={tech.name}>
//                 {tech.name}
//               </option>
//             );
//           })}
//         </select>
//         <label>color: </label>
//         <select name="color" onChange={handleInputChange}>
//           {articleList.map((article) => {
//             return (
//               <option key={article._id} value={article.name}>
//                 {article.name}
//               </option>
//             );
//           })}
//         </select>
//         <button className="btn btn-danger" type="submit">
//           Create Matchup!
//         </button>
//       </form>
//     )}
//   </div>
//   {error && <div>Something went wrong...</div>}
// </div>
// )

  };
export default ClothesForm;
