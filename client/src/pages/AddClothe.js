import { useState } from 'react'
import ItemForm from '../components/clothesForm'
import styles from '../css/AddCloth'

const AddItem = () => {
  const [typeOfItem, setTypeOfItem] = useState('');

  const handleTypeChange = e => {
    setTypeOfItem(e.target.value);
  }

  return (
    <div className={styles.addItem}>
      <h2>Add a new item to your wardrobe</h2>
      <select className={styles.select} onChange={handleTypeChange}>
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
      {(typeOfItem === '' && <div className={styles.feedback}><p>You must choose a type...</p></div>)}
      {(typeOfItem === 'tShirt' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shirt' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'sweater' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'trousers' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shorts' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'jacket' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'shoes' && <ItemForm typeOfItem={typeOfItem} />)}
      {(typeOfItem === 'accessory' && <ItemForm typeOfItem={typeOfItem} />)}
    </div>
  );
}

export default AddItem;

/* 'shirt', 'tShirt', 'sweater', 'trouser', 'shorts', 'jacket', 'accessory'/'accessories'  */