import React from 'react'
import styles from './Button.module.css'


export const Button = ({ type, text, onClick }) => {
   return (
      <button
      className={styles.button}
      type={type}
      onClick={onClick}
      >{text}</button>
   )
}
