import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { ClothesContext } from '../contexts/ClothesContext'
import styles from '../css/ClothForm.css'

const ClothesForm = ({ typeOfItem }) => {
  const { dispatch } = useContext(ClothesContext);
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [feedback, setFeedback] = useState(null);

  const history = useHistory();

  const handleDescChange = e => {
    setDescription(e.target.value);
  }
  const handleColorChange = e => {
    setColor(e.target.value);
  }
  const handleBrandChange = e => {
    setBrand(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();

    if(description === '' || color === '' || brand === ''){
      setFeedback('You must fill in all the fields!')
      setTimeout(() => {
        setFeedback(null);
      }, 3000)
    } else {
      const newItem = {
        type: typeOfItem,
        description,
        color,
        brand,
        id: uuidv4()
      }
      dispatch({type: 'ADD_ITEM', newItem});
      history.push('/');
    }
  }

  return (
    <div className={styles.itemForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What kind of {typeOfItem} is it?</label>
          <br />
          <input name="desc" type="text" placeholder={`Description...`} onChange={handleDescChange} required />
        </div>
        <div>
          <label>Color of the {typeOfItem}</label>
          <br />
          <input name="color" type="text" placeholder="Color..." onChange={handleColorChange} required />
        </div>
        <div>
          <label>Brand</label>
          <br />
          <input name="color" type="text" placeholder="Brand..." onChange={handleBrandChange} required />
        </div>
        <button type="submit">Add the item</button>
      </form>
      <div>
        {feedback && <p className="feedback">feedback</p>}
      </div>
    </div>
  );
}

export default ClothesForm;