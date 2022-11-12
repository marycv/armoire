import { createContext, useState, useCallback } from 'react'

export const ClothesContext = createContext(null);

function ClothesContextProvider (props)  {
      const [clothes, setCloth] = useState([
      {
        title: "Peace Pants",
        type: "bottoms",
        brand: "Story MFG",
        cost: 450,
        condition: "new",
        season: "SS",
        id: "1",
        //img: "./images/peacepants.webp",
        own: false,
      },
    ]);
    const addCloth = useCallback((toAdd) => {
      setCloth((curr) =>[...curr,toAdd]);
    },[]);
    

    return(
      <ClothesContext.Provider value={{clothes,addCloth}}>
        {props.children}
      </ClothesContext.Provider>
    );
}
export default ClothesContextProvider

// types: 'shirt', 'tShirt', 'sweater', 'trousers', 'shorts', 'jacket', 'accessories'