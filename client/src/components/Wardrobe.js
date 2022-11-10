import Shelf from './Shelf'
import { ClothesContext } from '../contexts/ClothesContext'
import { useState, useContext } from 'react'
import styles from '../css/Wardrobe.css'

const Wardrobe = () => {
  const { clothes } = useContext(ClothesContext);
  const tShirts = clothes.filter(item => item.type === 'tShirt');
  const shirts = clothes.filter(item => item.type === 'shirt');
  const sweaters = clothes.filter(item => item.type === 'sweater');
  const trousers = clothes.filter(item => item.type === 'trousers');
  const shorts = clothes.filter(item => item.type === 'shorts');
  const jackets = clothes.filter(item => item.type === 'jacket');
  const shoes = clothes.filter(item => item.type === 'shoes');
  const accessories = clothes.filter(item => item.type === 'accessory');

  // 'shirt', 'tShirt', 'sweater', 'trouser', 'shorts', 'jacket', 'accessiories'

  const [itemToShow, setItemToShow] = useState('tShirt');

  return (
    <div className={styles.wardrobe}>
      <h2>Clothes</h2>
      <div className={styles.wardrobeContainer}>
        <div className={styles.tabs}>
          <div className={`${styles.tab}  ${itemToShow === 'tShirt' ? styles.active : ""}`} onClick={() => setItemToShow('tShirt')}>
            <img src="assets/icons/T-Shirt-icon.png" alt="t-shirt icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'shirt' ? styles.active : ""}`} onClick={() => setItemToShow('shirt')}>
            <img src="assets/icons/Shirt-icon.png" alt="shirt icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'sweater' ? styles.active : ""}`} onClick={() => setItemToShow('sweater')}>
            <img src="assets/icons/sweater.png" alt="Sweater icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'trousers' ? styles.active : ""}`} onClick={() => setItemToShow('trousers')}>
            <img src="assets/icons/Jeans-icon.png" alt="Jeans icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'shorts' ? styles.active : ""}`} onClick={() => setItemToShow('shorts')}>
            <img src="assets/icons/Clothing-Shorts-icon.png" alt="Shorts icon" />
          </div>
          <div className={`${styles.tab}  ${itemToShow === 'jacket' ? styles.active : ""}`} onClick={() => setItemToShow('jacket')}>
            <img src="assets/icons/Jacket-icon.png" alt="jacket icon" />
          </div>
          <div className={`${styles.tab} ${itemToShow === 'shoes' ? styles.active : ""}`} onClick={() => setItemToShow('shoes')}>
            <img src="assets/icons/Shoes-icon.png" alt="shoes icon" />
          </div>
          <div className={`${styles.tab} ${styles.access} ${itemToShow === 'accessories' ? styles.active : ""}`} onClick={() => setItemToShow('accessories')}>
            <img src="assets/icons/Clothing-Hat-icon.png" alt="hat icon" />
            {/* <img src="assets/icons/Clothing-Mittens-icon.png" alt="mittens icon" /> */}
            <img src="assets/icons/Clothing-Scarf-icon.png" alt="scarf icon" />
          </div>
        </div>
        {itemToShow === 'tShirt' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={tShirts} />
        </div>}
        {itemToShow === 'shirt' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={shirts} />
        </div>}
        {itemToShow === 'sweater' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={sweaters} />
        </div>}
        {itemToShow === 'trousers' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={trousers} />
        </div>}
        {itemToShow === 'shorts' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={shorts} />
        </div>}
        {itemToShow === 'jacket' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={jackets} />
        </div>}
        {itemToShow === 'shoes' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={shoes} />
        </div>}
        {itemToShow === 'accessories' && <div className={`${styles.shelfContainer}`}>
          <Shelf itemList={accessories} />
        </div>}
      </div>
    </div>
  );
}

export default Wardrobe;