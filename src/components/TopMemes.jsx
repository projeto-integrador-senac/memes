import React from 'react';
import { useState } from "react";
import styles from '../styles/Top_memes.module.scss'

const TopMemes = (props) => {
  return (
    <>
 <div className={styles.contener}>
    <div className={styles.caixa}>  
        
          <h1 className={styles.button}>Top Memes</h1>
        <div className={styles.div}>
          <div className={styles.div1}>1 lugar</div>
          <div className={styles.div2}>2 lugar</div>
          <div className={styles.div3}>3 lugar</div> 
        </div>
    </div>
    
  </div>
  </>
  )
}

export default TopMemes;