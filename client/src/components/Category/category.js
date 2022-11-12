import React, { useEffect, useMemo } from "react";
// import { createPath } from "react-router-dom";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { gql } from '@apollo/client';
// import { assertValidExecutionArguments } from "graphql/execution/execute";
// import { extendResolversFromInterfaces } from "apollo-server-express";
//import "./categoryStyle.css";
export const COMPILE_CLOTHES = gql `
       query Query($clothingType: String, $color: String, $occasion: String, $material: String) {
            articles(clothingType: $clothingType, color: $color, occasion: $occasion, material: $material) {
                imageURL
                _id
  }
}
`
export default function Category() {

//ex: occassionList is a react state to maintain the list of all occassions
// const [occassionList, setOccassionList]= useState([]);
//selectedOccassion is a react state to keep track of the type of occassion that the user has selected.
const [selectedOccassion, setSelectedOccassion] = useState();

// const [typeList, setTypeList] = useState([]);
const [selectedType, setSelectedType] = useState();

// const [colorList, setColorList] = useState([]);
const [selectedColor, setSelectedColor] = useState();

// const [materialList, setMaterialList] = useState([]);
const [selectedMaterial, setSelectedMaterial]= useState();

// cosnt [myFunction, { data }] = useLazyQuery(TARGET_QUERY)

const [fetchData, {data}] = useLazyQuery(COMPILE_CLOTHES)
console.log(data);
// function getFilteredOccassion() {
//     if(!selectedOccassion) {
//         return data;
//     }
//     return data?.filter((item) => item.category === selectedOccassion);
// }

// var filteredOccassionList = useMemo(getFilteredOccassion, [selectedOccassion, data]);

// function getFilteredType() {
//     if(!selectedType) {
//         return data;
//     }
//     return data?.filter((item) => item.category === selectedType);
// }
// var filteredTypeList = useMemo(getFilteredType, [selectedType, data]);

// function getFilteredColor() {
//     if(!selectedColor) {
//         return data;
//     }
//     return data?.filter((item) => item.category === selectedColor);
// }
// var filteredColorList = useMemo(getFilteredColor, [selectedColor, data]);

// function getFilteredMaterial() {
//     if(!selectedMaterial) {
//         return data;
//     }
//     return data.filter((item) => item.category === selectedMaterial);
// }
// var filteredMaterialList = useMemo(getFilteredMaterial, [selectedMaterial, data]);

useEffect(() => {
  const grabClothes = async () => {

    fetchData({
        variables: {
            clothingType: selectedType,
            color: selectedColor,
            material: selectedMaterial,
            occassion: selectedOccassion
        }
  });

  } 
  grabClothes();
}, [selectedColor,selectedMaterial,selectedType,selectedOccassion, fetchData]);



const Item = ({ name, category}) => (
    <div className="item-container">
        <div>
            <span className="item-label">Category: </span>
            {category}
        </div>
    </div>
);

// export default Item;
// ----------------------------------------------------------------------
// var defaultOccassions = [
//     {category: "wedding"},
//     {category: "night-out"},
//     {category: "work"},
//     {category: "sports"},
//     {category: "costume"},
//     {category: "other"}
// ]

// var defaultType = [
//     {category: "coats"},
//     {category: "sweaters-cardigans"},
//     {category: "shirts-blouses"},
//     {category: "tshirts"},
//     {category: "pants"},
//     {category: "dresses"},
//     {category: "undergarments"},
//     {category: "accessories"},
//     {category: "sports-wear"}
// ]

// var defaultColor = [
//     {category: "white"},
//     {category: "black"},
//     {category: "red"},
//     {category: "orange"},
//     {category: "beige"},
//     {category: "brown"},
//     {category: "yellow"},
//     {category: "blue"},
//     {category: "other-variety"}
// ]

// var defaultMaterial = [
//     {category: "wool"},
//     {category: "cotton"},
//     {category: "silk"},
//     {category: "denim"},
//     {category: "leather"},
//     {category: "fur-synthetic-fur"},
//     {category: "nylon"},
//     {category: "spandex"},
//     {category: "rayon"},
//     {category: "jute"},
//     {category: "combination"},
//     {category: "not-sure"}
// ]
// ----------------------------------------------------------------------
// useEffect(() => {
//     setOccassionList(defaultOccassions);
// }, []);
// useEffect(() => {
//     setTypeList(defaultType);
// }, []);
// useEffect(() => {
//     setColorList(defaultColor);
// }, []);
// useEffect(() => {
//     setMaterialList(defaultMaterial);
// }, []);
// ----------------------------------------------------------------------
function handleOccassionChange(event) {
    setSelectedOccassion(event.target.value);
}
function handleTypeChange(event) {
    setSelectedType(event.target.value);
}
function handleColorChange(event) {
    setSelectedColor(event.target.value);
}
function handleMaterialChange(event){
    setSelectedMaterial(event.target.value);
}
// ----------------------------------------------------------------------
return (
<>
<div className="all-categories">
<div className="occassion-container">
    <div>Filter by Occassion:</div>
    <div>
        <select
            name="occassion-list"
            id="occassion-list"
            onChange={handleOccassionChange}
        >
            <option value="">All</option>
            <option value="wedding">Wedding</option>
            <option value="night-out">Night Out</option>
            <option value="work">Work</option>
            <option value="sports"> Sport</option>
            <option value="costume">Costume</option>
            <option value="other">Other</option>
        </select>
    </div>
</div>


<div className="type-container">
    <div>Filter By Type:</div>
    <div>
        <select
            name="type-list"
            id="type-list"
            onChange={handleTypeChange}
        >
            <option value= "wedding"> Wedding</option>
            <option value= "night-out">Night Out</option>
            <option value= "work">Work</option>
            <option value="sports"> Sport</option>
            <option value="costume">Costume</option>
            <option value="other">Other</option>   
        </select>
    </div>
</div>

<div className="color-container">
    <div>Filter By Color:</div>
    <div>
        <select
            name="color-list"
            id="color-list"
            onChange={handleColorChange}
        >
            <option value= "white"> White </option>
            <option value= "black"> Black</option>
            <option value= "red">Red</option>
            <option value= "orange">Orange</option>
            <option value="beige"> Beige</option>
            <option value="brown">Brown</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            <option value="other-variety">Other/Variety</option>  
        </select>
    </div>
</div>

<div className="material-container">
    <div>Filter By Material:</div>
    <div>
        <select
            name="material-list"
            id="material-list"
            onChange={handleMaterialChange}
        >
            <option value= "wool"> Wool </option>
            <option value= "cotton"> Cotton</option>
            <option value= "silk">Silk</option>
            <option value= "denim">Denim</option>
            <option value="leather"> Leather</option>
            <option value="fur-synthentic-fur">Fur</option>
            <option value="nylon">Nylon</option>
            <option value="spandex">Spandex</option>
            <option value="rayon">Rayon</option>
            <option value="jute">Jute</option>
            <option value="combination">Combination</option>
            <option value="not-sure">Not Sure!</option>
        </select>
    </div>
</div>


</div>

<div className= "list-displays">

<div className="occassion-list">
    {data?.articles.map((element, index) => (
        <Item {...element} key ={index} />
    ))}
</div>
{/* <div className="type-list">
    {filteredTypeList?.map((element, index) => (
        <Item {...element} key ={index} />
    ))}
</div>
<div className="color-list">
    {filteredColorList?.map((element, index) => (
        <Item {...element} key ={index} />
    ))}
</div>
<div className="material-list">
    {filteredMaterialList?.map((element, index) => (
        <Item {...element} key ={index} />
    ))} */}
{/* </div> */}
</div>
</>
)
}


// ----------------------------------------------------------------------

// const getArticles = gql` 
//     query Articles($occassion: String!) {
//         article(occassion: $occassion) {
//             _id
//         }
//     }
// `;

// const getArticles = gql `
//     const []
// `

// useLazyQuery  --> 
//images need to be stored in database
//
