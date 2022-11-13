// import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_ARTICLE } from '../utils/queries';
// import { ADD_ARTICLE } from '../utils/mutations';

// const Clothesform =() => {
//   const {loading,data } = useQuery(QUERY_ARTICLE);

//   const articleList = data ?.article || [];

//   const [formData , setFormData] = useState({
//     clothingType: 'shirt',
//     clothingColor:'Blue',
//   });
//   let navigate = useNavigate();

//   const [addArticle,{error}] = useMutation(ADD_ARTICLE);

//   const handleInputChange = (event) => {
//     const {name , value } = event.target;
//     setFormData({...formData,[name]:value});
//   };
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await addArticle({
//         variables: { ...formData },
//       });

//     navigate(`/article/${data.createArticle._id}`);
//     } catch (err) {
//       console.log(err);
//     }  

//     setFormData({
//       clothingType: 'Shirt',
//       color: 'Blue',
//     });
//   };
//     return (
//       <div className="card bg-white card-rounded w-25">
//         <div className="card-header bg-dark text-center">
//           <h1>Let's create a matchup!</h1>
//         </div>
//         <div className="card-body m-5">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <form onSubmit={handleFormSubmit}>
//               <label>clothingType: </label>
//               <select name="ClothingType" onChange={handleInputChange}>
//                 {articleList.map((article) => {
//                   return (
//                     <option key={article._id} value={article.name}>
//                       {article.name}
//                     </option>
//                   );
//                 })}
//               </select>
//               <label>Tech 2: </label>
//               <select name="tech2" onChange={handleInputChange}>
//                 {articleList.map((article) => {
//                   return (
//                     <option key={article._id} value={article.name}>
//                       {article.name}
//                     </option>
//                   );
//                 })}
//               </select>
//               <button className="btn btn-danger" type="submit">
//                 Create Matchup!
//               </button>
//             </form>
//           )}
//         </div>
//         {error && <div>Something went wrong...</div>}
//       </div>
//     );

    
 
// };

// export default Clothesform



