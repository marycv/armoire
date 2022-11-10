import { createContext, useReducer, useEffect } from 'react'
import { clothesReducer } from '../reducers/clothesReducer'
import { v4 as uuidv4} from 'uuid'

export const ClothesContext = createContext();

const ClothesContextProvider = (props) => {

    const [clothes, dispatch] = useReducer(clothesReducer, [], () => {
      const localData = localStorage.getItem('clothes');
      return localData ? JSON.parse(localData) : [
        {
          type: 'sweater',
          brand: 'H&M',
          color: 'Green',
          description: 'Knitted',
          id: uuidv4()
        },
        {
          type: 'sweater',
          brand: 'Jack&Jones',
          color: 'Black',
          description: 'Hoodie',
          id: uuidv4()
        },
        {
          type: 'sweater',
          brand: 'Gant',
          color: 'Dark purple',
          description: 'Fine knitted jumper',
          id: uuidv4()
        },
        {
          type: 'shirt',
          brand: 'Dressman',
          color: 'Green/checked',
          description: 'Everyday/longsleeved',
          id: uuidv4()
        },
        {
          type: 'shirt',
          brand: 'Brothers',
          color: 'Red/blue/checked',
          description: 'Shortsleeved summer shirt',
          id: uuidv4()
        },
        {
          type: 'shirt',
          brand: 'Ralph Lauren',
          color: 'Blue/checked',
          description: 'Fancy shirt',
          id: uuidv4()
        },
        {
          type: 'tShirt',
          brand: 'Race Marine',
          color: 'Black',
          description: 'T-shirt',
          id: uuidv4()
        },
        {
          type: 'tShirt',
          brand: 'H&M',
          color: 'Black',
          description: 'Polo shirt',
          id: uuidv4()
        },
        {
          type: 'tShirt',
          brand: 'Uniqlo',
          color: 'Lighter blue',
          description: 'Longsleeved t-shirt',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'Ecco',
          color: 'Black',
          description: 'Loafers',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'Adidas',
          color: 'Black/white',
          description: 'Sneakers',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'North Face',
          color: 'Brown',
          description: 'Boots',
          id: uuidv4()
        },
        {
          type: 'shoes',
          brand: 'Salomon',
          color: 'Black/grey',
          description: 'Walking shoes',
          id: uuidv4()
        },
        {
          type: 'trousers',
          color: 'Indigo',
          brand: 'Tiger',
          description: 'Jeans',
          id: uuidv4()
        },
        {
          type: 'shorts',
          color: 'Blue',
          brand: 'Race Marine',
          description: 'Shorts',
          id: uuidv4()
        },
        {
          type: 'shorts',
          color: 'Red',
          brand: 'H&M',
          description: 'Shorts',
          id: uuidv4()
        },
        {
          type: 'trousers',
          color: 'Grey',
          brand: 'H&M',
          description: 'Chinos',
          id: uuidv4()
        },
        {
          type: 'trousers',
          color: 'Black',
          brand: 'Nudie',
          description: 'Jeans',
          id: uuidv4()
        },
        {
          type: 'jacket',
          color: 'Dark blue',
          brand: 'Everest',
          description: 'Warm winter jacket',
          id: uuidv4()
        },
        {
          type: 'jacket',
          color: 'Dark blue',
          brand: 'H&M',
          description: 'Spring/autumn jacket',
          id: uuidv4()
        },
        {
          type: 'jacket',
          color: 'Dark blue',
          brand: 'Tiger',
          description: 'Blazer',
          id: uuidv4()
        },
        {
          type: 'accessory',
          color: 'Black',
          brand: 'Unknown',
          description: 'Knitted scarf',
          id: uuidv4()
        },
        {
          type: 'accessory',
          color: 'Grey',
          brand: 'Hestra',
          description: 'Mittens',
          id: uuidv4()
        },
        {
          type: 'accessory',
          color: 'Black',
          brand: 'Weekday',
          description: 'Cap',
          id: uuidv4()
        }
      ];
  });

  useEffect( () => {
    localStorage.setItem('clothes', JSON.stringify(clothes))
  }, [clothes]);

  return (
    <ClothesContext.Provider value={ {clothes, dispatch} }>
      { props.children }
    </ClothesContext.Provider>
  );
}

export default ClothesContextProvider

// types: 'shirt', 'tShirt', 'sweater', 'trousers', 'shorts', 'jacket', 'accessories'