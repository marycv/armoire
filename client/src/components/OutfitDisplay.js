//import styles from '../css/OutfitDisplay.css'
import React from 'react';

const styles = {
  headText: {
    fontFamily : 'serif',
    textAlign: 'center',
  }

}
const OutfitDisplay = ({ outfit }) => {
  return (
    // <div className={styles.outfitDisplay}>
    //   <p>Outfit of the day:</p>
    //   {outfit.map(item => (
    //       <div key={item.id}>
    //         {item.type === 'tShirt' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/T-Shirt-icon.png" alt='t-shirt icon'/></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'shirt' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/Shirt-icon.png" alt="shirt icon" /></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'sweater' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/sweater.png" alt="Sweater icon" /></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'trousers' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/Jeans-icon.png" alt="Jeans icon" /></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'shorts' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/Clothing-Shorts-icon.png" alt="Jeans icon" /></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'jacket' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/Jacket-icon.png" alt="jacket icon" /></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'shoes' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.imgContainer}><img src="assets/icons/Shoes-icon.png" alt="shoes icon" /></div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.type === 'accessory' &&
    //           <div className={styles.itemContainer}>
    //             <div className={styles.accessoryImgContainer}>
    //               <img src="assets/icons/Clothing-Hat-icon.png" alt="hat icon" />
    //               <img src="assets/icons/Clothing-Scarf-icon.png" alt="scarf icon" />
    //             </div>
    //             <p>{item.description}</p>
    //             <p>{item.color}</p>
    //           </div>}
    //         {item.timestamp && <div className={styles.hide}></div>}
    //       </div>
    //   ))}
    // </div>
    "Hello from outfit display"
  );
}

export default OutfitDisplay;